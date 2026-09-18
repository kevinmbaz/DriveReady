/* Pure study calculations shared by the website and its tests. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DriveStudy = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAY = 86400000;
  const WINDOW_DAYS = 14;
  const TARGET = 85;
  const dateKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0,10) === value;
  const fresh = (value, now) => Number.isFinite(Date.parse(value)) && now-Date.parse(value) >= 0 && now-Date.parse(value) <= WINDOW_DAYS*DAY;
  const blank = () => ({attempts:{},saved:[],needsReview:[],xp:0,days:[],history:[],daily:[],session:null,examDate:''});
  const modes = new Set(['quick','daily','timed','topic','review','saved-round','single','smart']);

  function normalize(value, questions) {
    const state = blank();
    if (!value || typeof value !== 'object') return state;
    const bank = new Map(questions.map(q => [q.id,q]));
    const list = value => Array.isArray(value) ? value : [];
    const integer = n => Number.isSafeInteger(n) && n >= 0;
    for (const [id,a] of Object.entries(value.attempts || {})) {
      if (!bank.has(id) || !a || !integer(a.total) || a.total === 0 || !integer(a.correct) || a.correct > a.total || typeof a.last !== 'boolean') continue;
      state.attempts[id] = {total:a.total,correct:a.correct,last:a.last};
      if (Number.isFinite(Date.parse(a.lastAt))) state.attempts[id].lastAt = new Date(a.lastAt).toISOString();
    }
    state.saved = [...new Set(list(value.saved).filter(id => bank.has(id)))];
    state.needsReview = [...new Set(list(value.needsReview).filter(id => bank.has(id)))];
    state.days = [...new Set(list(value.days).filter(validDate))].slice(-3650);
    state.daily = [...new Set(list(value.daily).filter(validDate))].slice(-3650);
    state.xp = integer(value.xp) ? value.xp : 0;
    state.examDate = validDate(value.examDate) ? value.examDate : '';

    function items(input) {
      if (!Array.isArray(input) || !input.length || input.length > questions.length) return null;
      const seen = new Set();
      const output = [];
      for (const item of input) {
        if (!item || !bank.has(item.id) || seen.has(item.id) || !Array.isArray(item.order) || item.order.length !== 4 || new Set(item.order).size !== 4 || !item.order.every(n => Number.isInteger(n) && n >= 0 && n < 4)) return null;
        seen.add(item.id); output.push({id:item.id,order:[...item.order]});
      }
      return output;
    }
    function answers(input, orderedItems) {
      if (!Array.isArray(input) || input.length > orderedItems.length) return null;
      const output = [];
      for (let i=0;i<input.length;i++) {
        const a = input[i];
        if (!a || a.id !== orderedItems[i].id || !Number.isInteger(a.selected) || a.selected < 0 || a.selected > 3) return null;
        output.push({id:a.id,selected:a.selected,correct:a.selected === bank.get(a.id).answer});
      }
      return output;
    }
    for (const h of list(value.history)) {
      if (!h || !modes.has(h.mode) || !Number.isFinite(Date.parse(h.date))) continue;
      const qs = items(h.items); if (!qs) continue;
      const as = answers(h.answers,qs); if (!as) continue;
      state.history.push({mode:h.mode,label:typeof h.label === 'string' ? h.label.slice(0,80) : 'Practice',date:new Date(h.date).toISOString(),items:qs,answers:as,total:qs.length,correct:as.filter(a=>a.correct).length,expired:!!h.expired,bonus:h.bonus === 20 ? 20 : 0,assisted:!!h.assisted});
    }
    state.history.sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));
    state.history = state.history.slice(0,30);
    const s = value.session;
    if (s && modes.has(s.mode)) {
      const qs = items(s.items), index = s.index;
      const as = qs && answers(s.answers,qs);
      const selected = s.selected;
      if (qs && as && integer(index) && index < qs.length && (as.length === index || as.length === index+1) && (selected === null || (Number.isInteger(selected) && selected >= 0 && selected < 4)) && (s.mode !== 'timed' || Number.isFinite(s.deadline))) {
        state.session = {mode:s.mode,label:typeof s.label === 'string' ? s.label.slice(0,80) : 'Practice',items:qs,answers:as,index,selected,deadline:s.mode === 'timed' ? s.deadline : null,date:validDate(s.date) ? s.date : dateKey(),assisted:!!s.assisted};
      }
    }
    return state;
  }

  function readiness(state, questions, now = Date.now()) {
    const topicIds = [...new Set(questions.map(q=>q.topic))];
    const topics = topicIds.map(id => {
      const pool = questions.filter(q=>q.topic === id);
      const seen = pool.filter(q=>state.attempts[q.id]?.total > 0).length;
      const secure = pool.filter(q=>{const a=state.attempts[q.id];return a?.last === true && a.correct >= 2 && fresh(a.lastAt,now);}).length;
      const missed = pool.filter(q=>state.attempts[q.id]?.last === false || state.needsReview?.includes(q.id)).length;
      const coverage = seen/pool.length*100, retention = secure/pool.length*100;
      return {id,total:pool.length,seen,secure,missed,coverage,retention,score:Math.round((coverage+retention)/2)};
    });
    // Equal topic weights keep the large road-sign bank from hiding other gaps.
    const coverage = topics.reduce((sum,t)=>sum+t.coverage,0)/topics.length;
    const retention = topics.reduce((sum,t)=>sum+t.retention,0)/topics.length;
    const timed = state.history.filter(h=>h.mode === 'timed' && h.total === 20 && !h.assisted && fresh(h.date,now))
      .sort((a,b)=>Date.parse(b.date)-Date.parse(a.date)).slice(0,3);
    const timedAverage = timed.length ? timed.reduce((sum,h)=>sum+h.correct/h.total*100,0)/timed.length : 0;
    // Missing rounds contribute zero; one lucky result cannot supply full evidence.
    const timedEvidence = timedAverage * timed.length/3;
    const score = Math.round(coverage*.3+retention*.3+timedEvidence*.4);
    const seen = topics.reduce((sum,t)=>sum+t.seen,0);
    const checks = [
      {id:'coverage',label:'Explore at least 90% of every topic',done:topics.every(t=>t.coverage >= 90)},
      {id:'retention',label:'Repeat-correct on at least 80% of every topic',done:topics.every(t=>t.retention >= 80)},
      {id:'timed',label:'Score 85%+ in each of your last 3 timed rounds',done:timed.length === 3 && timed.every(h=>h.correct/h.total*100 >= TARGET)}
    ];
    const ready = checks.every(c=>c.done);
    const status = ready ? 'Strong practice readiness' : seen < 20 ? 'Building your baseline' : score >= 65 ? 'Getting closer' : 'Building confidence';
    const weakest = [...topics].sort((a,b)=>a.score-b.score || b.missed-a.missed)[0];
    const next = seen < 20 ? {action:'smart',title:'Start with a balanced practice',description:'Explore 10 questions across the book to build your baseline.'}
      : !checks[0].done || !checks[1].done ? {action:'smart',topic:weakest.id,title:'Strengthen your weakest topic',description:'Focus on unseen questions, mistakes and answers due for another look.'}
      : {action:'timed',title:ready?'Keep your knowledge fresh':'Test yourself under the clock',description:ready?'Keep practising regularly as your exam approaches.':'Complete a 20-question round without opening the book.'};
    return {score,status,ready,seen,coverage:Math.round(coverage),retention:Math.round(retention),timedAverage:Math.round(timedAverage),timedEvidence:Math.round(timedEvidence),timed,topics,checks,next};
  }

  function smartQuestions(state, questions, limit = 10, topic, now = Date.now(), random = Math.random) {
    function priority(q) {
      const a=state.attempts[q.id];
      if (!a) return 0;
      if (!a.last) return 1;
      if (!fresh(a.lastAt,now)) return 2;
      if (a.correct < 2) return 3;
      return 4;
    }
    const pool = questions.filter(q=>!topic || q.topic === topic).map(q=>({q,tie:random()}))
      .sort((a,b)=>priority(a.q)-priority(b.q) || a.tie-b.tie).map(item=>item.q);
    if (topic) return pool.slice(0,limit);
    const topics = readiness(state,questions,now).topics.sort((a,b)=>a.score-b.score);
    const first = topics.map(t=>pool.find(q=>q.topic === t.id)).filter(Boolean).slice(0,limit);
    return [...first,...pool.filter(q=>!first.includes(q)).slice(0,Math.max(0,limit-first.length))];
  }

  function daysUntil(date, today = new Date()) {
    if (!validDate(date)) return null;
    const [y,m,d] = date.split('-').map(Number);
    return Math.round((Date.UTC(y,m-1,d)-Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()))/DAY);
  }
  return {blank,normalize,readiness,smartQuestions,daysUntil,validDate,WINDOW_DAYS,TARGET};
});
