const {test}=require('node:test');
const assert=require('node:assert/strict');
const engine=require('../study-engine.js');
const questions=require('../questions.js');
const now=Date.parse('2026-09-11T12:00:00Z');
const day=86400000;
function fullState(){const s=engine.blank();for(const q of questions)s.attempts[q.id]={total:2,correct:2,last:true,lastAt:new Date(now).toISOString()};return s;}
function timed(correct=18,age=0,extra={}){return {mode:'timed',label:'Timed challenge',total:20,correct,date:new Date(now-age*day).toISOString(),...extra};}
test('New learner has no readiness evidence and receives a balanced first step',()=>{
 const r=engine.readiness(engine.blank(),questions,now);assert.equal(r.score,0);assert.equal(r.ready,false);assert.equal(r.status,'Building your baseline');assert.equal(r.next.action,'smart');
});
test('One topic cannot mask gaps in the other five, regardless of its question count',()=>{
 const s=engine.blank();for(const q of questions.filter(q=>q.topic==='signs'))s.attempts[q.id]={total:20,correct:20,last:true,lastAt:new Date(now).toISOString()};
 const r=engine.readiness(s,questions,now);assert.equal(r.coverage,17);assert.equal(r.retention,17);assert.equal(r.ready,false);assert.ok(r.score<=10);
});
test('Mastery requires repeat success, most recent correctness and fresh evidence',()=>{
 const s=fullState();for(const q of questions)s.attempts[q.id].lastAt=new Date(now-15*day).toISOString();assert.equal(engine.readiness(s,questions,now).retention,0);
 for(const q of questions)s.attempts[q.id]={total:1,correct:1,last:true,lastAt:new Date(now).toISOString()};assert.equal(engine.readiness(s,questions,now).retention,0);
 for(const q of questions)s.attempts[q.id]={total:3,correct:2,last:false,lastAt:new Date(now).toISOString()};assert.equal(engine.readiness(s,questions,now).retention,0);
});
test('One perfect timed round cannot grant readiness; three consistent rounds can',()=>{
 const s=fullState();s.history=[timed(20)];assert.equal(engine.readiness(s,questions,now).score,73);assert.equal(engine.readiness(s,questions,now).ready,false);
 s.history=[timed(18),timed(17,1),timed(19,2)];const r=engine.readiness(s,questions,now);assert.equal(r.score,96);assert.equal(r.ready,true);
 s.history.unshift(timed(16));assert.equal(engine.readiness(s,questions,now).ready,false);
});
test('Assisted, stale and wrong-length rounds are excluded, unanswered reduce timed evidence',()=>{
 const s=fullState();s.history=[timed(20,0,{assisted:true}),timed(20,15),timed(20,0,{total:10}),timed(1)];const r=engine.readiness(s,questions,now);assert.equal(r.timed.length,1);assert.equal(r.timedAverage,5);assert.equal(r.ready,false);
});
test('Future-dated evidence cannot inflate readiness',()=>{
 const s=fullState();for(const q of questions)s.attempts[q.id].lastAt=new Date(now+day).toISOString();s.history=[timed(20,-1)];const r=engine.readiness(s,questions,now);assert.equal(r.retention,0);assert.equal(r.timed.length,0);
});
test('Smart practice covers all topics, stays unique and targets unseen questions within a topic',()=>{
 const s=fullState();const q=questions.find(q=>q.topic==='signs');delete s.attempts[q.id];
 const chosen=engine.smartQuestions(s,questions,10,undefined,now,()=>.5);assert.equal(new Set(chosen.map(q=>q.id)).size,10);assert.equal(new Set(chosen.map(q=>q.topic)).size,6);
 assert.equal(engine.smartQuestions(s,questions,10,'signs',now,()=>.5)[0].id,q.id);
});
test('Legacy storage migrates without erasing valid answers and malformed sessions are rejected',()=>{
 const old={attempts:{[questions[0].id]:{total:2,correct:2,last:true},bad:{total:1,correct:9,last:true}},xp:20,saved:[questions[0].id,'bad'],days:null,history:[{}],session:{items:[],index:900}};
 const s=engine.normalize(old,questions);assert.equal(s.xp,20);assert.equal(s.attempts[questions[0].id].correct,2);assert.equal(s.saved.length,1);assert.deepEqual(s.days,[]);assert.equal(s.session,null);assert.equal(s.history.length,0);assert.equal(engine.readiness(s,questions,now).retention,0);
});
test('Normalize recomputes history scores from actual answers',()=>{
 const q=questions[0];const s=engine.normalize({history:[{mode:'timed',date:new Date(now).toISOString(),correct:20,total:20,items:[{id:q.id,order:[0,1,2,3]}],answers:[{id:q.id,selected:(q.answer+1)%4,correct:true}]}]},questions);
 assert.equal(s.history[0].correct,0);assert.equal(s.history[0].total,1);
});
test('Exam countdown uses calendar days and validates dates',()=>{
 assert.equal(engine.daysUntil('2026-09-12',new Date(2026,8,11,23,59)),1);assert.equal(engine.daysUntil('2026-09-11',new Date(2026,8,11)),0);assert.equal(engine.daysUntil('2026-09-10',new Date(2026,8,11)),-1);assert.equal(engine.validDate('2026-02-31'),false);assert.equal(engine.daysUntil(''),null);
});
