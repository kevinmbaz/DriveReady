'use strict';
function readinessSummary() {
  const r=DriveStudy.readiness(state,QUESTIONS);
  return `<section class="readiness-summary" aria-label="Exam readiness overview">
    <div class="mini-ring" style="--progress:${r.score}%"><strong>${r.score}</strong></div>
    <div><span class="eyebrow">EXAM READINESS · STUDY ESTIMATE</span><h2>${r.status}</h2><p>${r.seen ? `${r.seen} of ${QUESTIONS.length} questions explored · ${r.timed.length} of 3 recent timed rounds` : 'Your first practice is the start of your readiness picture.'}</p></div>
    <a class="button secondary" href="#readiness">View my readiness ${icon('arrow')}</a>
  </section>`;
}

function examDateDescription() {
  const days=DriveStudy.daysUntil(state.examDate);
  if(days===null)return 'Set a date to plan your practice.';
  if(days<0)return 'Your saved date has passed. Update it whenever you need to.';
  if(days===0)return 'Exam day is today. Take a calm look at the topics you want to refresh.';
  return `${days} ${days===1?'day':'days'} to go. A little focused practice each day adds up.`;
}

function readinessPage() {
  const r=DriveStudy.readiness(state,QUESTIONS);
  const nextTopic=r.next.topic?topicBy(r.next.topic):null;
  const nextTitle=nextTopic?`Focus on ${nextTopic.name.toLowerCase()}`:r.next.title;
  const metric=(value,title,detail)=>`<div class="readiness-metric"><span>${title}</span><strong>${value}</strong><p>${detail}</p></div>`;
  return `${heading('KNOW WHERE YOU STAND','Your exam readiness.','See what’s sticking, what needs practice, and what to do next.')}
    <section class="readiness-hero">
      <div class="readiness-score"><div class="progress-ring" role="img" aria-label="Study readiness score: ${r.score} out of 100" style="--progress:${r.score}%"><span><strong>${r.score}</strong>out of 100</span></div><span class="status-pill">${r.status}</span></div>
      <div class="readiness-intro"><span class="eyebrow">YOUR PRACTICE, PUT IN PERSPECTIVE</span><h2>${r.ready?'A strong foundation for exam day.':r.seen?'You’re making progress. Let’s make it count.':'Let’s find your starting point.'}</h2><p>This estimate combines topic coverage, repeat-correct answers, and your last three timed rounds from the past 14 days.</p><p class="estimate-note">A study score, not a probability of passing. It reflects this question bank, not an official exam assessment.</p></div>
    </section>
    <section class="readiness-metrics" aria-label="Readiness score breakdown">
      ${metric(r.coverage+'%','Topic coverage · 30% of score','The average share of questions attempted in each topic.')}
      ${metric(r.retention+'%','Repeat-correct · 30% of score','Correct at least twice, with the latest answer correct in the past 14 days.')}
      ${metric(r.timed.length?r.timedAverage+'%':'—','Timed performance · 40% of score',`${r.timed.length} of 3 recent rounds. Missing rounds contribute zero to the score.`)}
    </section>
    <div class="readiness-columns"><section class="panel next-step"><span class="eyebrow">YOUR NEXT BEST STEP</span><span class="topic-icon ${nextTopic?.color||'green'}">${icon(nextTopic?.icon||'route')}</span><h2>${nextTitle}</h2><p>${r.next.description}</p>${button(r.next.action==='timed'?'Start timed practice '+icon('arrow'):'Start focused practice '+icon('arrow'),r.next.action,r.next.topic?`data-topic="${r.next.topic}"`:'')}<span class="subtle">${r.next.action==='timed'?'20 questions · 20 minutes':'Up to 10 questions · at your own pace'}</span></section>
    <section class="panel readiness-checklist"><span class="eyebrow">AIM FOR CONSISTENCY</span><h2>Your readiness milestones</h2><ul>${r.checks.map(c=>`<li><span class="milestone-check ${c.done?'complete':''}">${icon(c.done?'check':'target')}</span><span>${c.label}<small>${c.id==='retention'?'Latest correct answer within 14 days.':c.id==='timed'?'Unassisted, within 14 days; unanswered questions count as incorrect.':'Each topic counts equally, regardless of its size.'}</small></span><span class="milestone-state">${c.done?'Met':'In progress'}</span></li>`).join('')}</ul><p class="subtle">These are practice benchmarks chosen for this app, not an official pass mark. All three are needed for “Strong practice readiness”.</p></section></div>
    <section class="panel topic-breakdown"><div class="section-heading"><div><h2>Find your focus</h2><p>Build confidence across every part of the book.</p></div><span class="legend"><i></i> Explored <i></i> Repeat-correct</span></div><div class="topic-readiness-list">${r.topics.map(t=>{const topic=topicBy(t.id);return `<div class="topic-readiness-row"><span class="topic-icon ${topic.color}">${icon(topic.icon)}</span><div class="topic-readiness-name"><strong>${topic.name}</strong><span>${t.seen}/${t.total} explored · ${t.secure} repeat-correct${t.missed?' · '+t.missed+' to review':''}</span></div><div class="coverage-bars" role="img" aria-label="${topic.name}: ${Math.round(t.coverage)}% explored, ${Math.round(t.retention)}% repeat-correct"><span style="width:${t.coverage}%"></span><span style="width:${t.retention}%"></span></div>${button('Practise','smart',`data-topic="${t.id}" aria-label="Practise ${topic.name}"`,'secondary small')}</div>`;}).join('')}</div></section>
    <div class="readiness-columns"><section class="panel recent-timed"><div class="section-heading"><div><span class="eyebrow">THE LAST 14 DAYS</span><h2>Your recent timed rounds</h2></div>${icon('timer')}</div>${r.timed.length?`<div class="timed-results">${r.timed.map(h=>`<div class="timed-result"><span>${new Date(h.date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span><strong>${Math.round(h.correct/h.total*100)}%</strong><span>${h.correct}/${h.total} correct</span><span class="score-tag">${h.correct/h.total*100>=85?'Benchmark met':'Keep practising'}</span></div>`).join('')}</div>`:'<div class="inline-empty"><p>No recent timed rounds yet.</p><span>Try one when you’re ready. Your results will appear here.</span></div>'}<a class="text-link" href="#challenge">Try a timed challenge ${icon('arrow')}</a></section>
    <section class="panel exam-planner"><span class="eyebrow">YOUR NEXT MILESTONE</span><h2>Make a date with exam day.</h2><p id="exam-date-description">${examDateDescription()}</p><form id="exam-date-form"><label for="exam-date">My exam date <span>(optional)</span></label><div class="date-form-row"><input id="exam-date" name="exam-date" type="date" value="${esc(state.examDate)}" aria-describedby="exam-date-description"><button class="button primary" type="submit">Save date</button></div></form>${state.examDate?button('Clear date','clear-date','','text-button'):''}<p class="subtle">Your date stays in this browser. It does not change your score.</p></section></div>
    <details class="methodology panel"><summary>How is my readiness calculated?</summary><p>Score = 30% topic coverage + 30% repeat-correct coverage + 40% timed evidence. Coverage and repeat-correct coverage are averaged equally across all six topics so that strong road-sign knowledge cannot hide a gap elsewhere.</p><p>Timed evidence is the sum of the percentage scores in your last three eligible rounds, divided by three. A missing round is zero. Only 20-question timed rounds from the last 14 days count. Opening the book or answer-review pages during a timed round makes it assisted and excludes it from readiness. There are no official exam claims behind the 85% practice benchmark.</p><p>A repeat-correct question has at least two correct attempts in your history, and its most recent answer is correct and no more than 14 days old. Previous progress is preserved; older answers without a date need a fresh correct attempt. As evidence gets older, your estimate can decrease.</p><p>Unanswered timed questions lower that round’s score and go into mistake review. The app cannot tell whether you used help outside this website. Readiness measures practice evidence only.</p></details>`;
}

function developerCard() {
  return `<section class="panel developer-card" aria-labelledby="developer-name"><div class="developer-profile"><span class="developer-avatar" aria-hidden="true">KM</span><div><span class="eyebrow">MEET THE DEVELOPER</span><h2 id="developer-name">Kevin Mbaz</h2><p>Developer of DriveReady</p></div></div><address class="developer-contacts"><a href="https://www.linkedin.com/in/kevin-mwen-48029b183/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>linkedin.com/in/kevin-mwen-48029b183 ${icon('arrow')}</a><a href="https://www.alemdarteknik.com/en" target="_blank" rel="noopener noreferrer"><span>Website</span>alemdarteknik.com ${icon('arrow')}</a><a href="tel:+905428753160"><span>Phone</span>+90 542 875 3160</a><a href="mailto:kevinmbaz12@gmail.com"><span>Email</span>kevinmbaz12@gmail.com</a></address></section>`;
}

function aboutPage() {
  return `${heading('ABOUT DRIVEREADY','Built for a little practice, every day.','Understand the material, track your progress, and come back with confidence.')}${developerCard()}<div class="about-grid"><section class="panel"><h2>Your study material</h2><p>DriveReady includes 129 practice questions based on the supplied English Tuğşan Yazıcı driving-school book. Each explanation points to the matching printed page.</p><p>This is an independent study tool. Questions, the timed format and readiness benchmarks are not an official exam or a guarantee of passing.</p><a href="#book" class="text-link">Explore the source book ${icon('arrow')}</a></section><section class="panel"><h2>Your progress is yours</h2><p>Answers, bookmarks, practice results and your optional exam date are saved in this browser. DriveReady has no account system, analytics, advertising or tracking cookies.</p><p>Clearing browser data removes your progress. A different browser or website address has its own progress. Your hosting provider may keep ordinary request logs.</p>${button('Download my progress','export','','secondary')}<p class="subtle">A JSON backup of your progress, including the exam date if you set one.</p><label class="import-label" for="progress-file">Restore a DriveReady backup</label><input id="progress-file" type="file" accept="application/json,.json"><p class="subtle">You can review the backup before replacing this browser’s progress.</p></section></div>`;
}

let pendingImport=null;
function exportProgress() {
  const blob=new Blob([JSON.stringify({app:'DriveReady',version:1,exportedAt:new Date().toISOString(),state},null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=`driveready-progress-${dateKey()}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast('Your progress backup is ready.');
}
document.addEventListener('submit',event=>{
  if(event.target.id!=='exam-date-form')return;
  event.preventDefault();const value=document.querySelector('#exam-date').value;
  if(value&&!DriveStudy.validDate(value)){toast('Choose a valid exam date.');return;}
  state.examDate=value;save();render(false);toast(value?'Exam date saved.':'Exam date cleared.');
});
document.addEventListener('change',async event=>{
  if(event.target.id!=='progress-file')return;
  const file=event.target.files[0];if(!file)return;
  try {
    if(file.size>2000000)throw Error('This backup is too large. Choose a DriveReady JSON backup under 2 MB.');
    let backup;try{backup=JSON.parse(await file.text());}catch{throw Error('That file is not valid JSON. Choose a DriveReady progress backup.');}
    if(backup.app!=='DriveReady'||backup.version!==1||!backup.state||typeof backup.state.attempts!=='object'||!Array.isArray(backup.state.history))throw Error('This file is not a supported DriveReady backup.');
    pendingImport=DriveStudy.normalize(backup.state,QUESTIONS);
    document.querySelector('#restore-description').textContent=`This backup has ${Object.keys(pendingImport.attempts).length} explored questions and ${pendingImport.history.length} completed rounds. Restoring it replaces progress saved in this browser.`;
    document.querySelector('#restore-dialog').showModal();
  }catch(error){toast(error.message);}finally{event.target.value='';}
});
