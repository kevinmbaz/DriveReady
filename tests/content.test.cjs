const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const questions = require('../questions.js');
test('Every question has four distinct options, a valid answer, an explanation and an existing source page',()=>{
  assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
  for(const q of questions){
    assert.equal(q.options.length,4,q.id);
    assert.equal(new Set(q.options).size,4,q.id);
    assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);
    assert.ok(q.explanation.length>30,q.id);
    assert.ok(q.page>=1&&q.page<=20,q.id);
    assert.ok(fs.existsSync(path.join(__dirname,'..','assets','book',`page-${String(q.page+1).padStart(2,'0')}.jpg`)),q.id);
    if(q.image)assert.ok(fs.existsSync(path.join(__dirname,'..',q.image)),q.id);
  }
});
test('All six study topics have enough content for a practice round',()=>{
  for(const topic of ['basics','signs','rules','markings','manoeuvres','distances'])assert.ok(questions.filter(q=>q.topic===topic).length>=8,topic);
});
