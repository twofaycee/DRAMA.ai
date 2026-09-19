'use client'
import {useEffect,useState} from 'react'
import Link from 'next/link'

const slugs=['money-follows-value','income-vs-wealth','skills-vs-shortcuts','why-people-pay','finding-expensive-problems','opportunity-vs-hype','the-10-problem-challenge']

export default function LessonClient({lesson}:{lesson:any}){
 const[response,setResponse]=useState('')
 const[answer,setAnswer]=useState('')
 const[done,setDone]=useState(false)
 useEffect(()=>{const x=JSON.parse(localStorage.getItem('abb_completed')||'[]');setDone(x.includes(lesson.slug))},[lesson.slug])
 function complete(){
  const x=JSON.parse(localStorage.getItem('abb_completed')||'[]')
  if(!x.includes(lesson.slug))x.push(lesson.slug)
  localStorage.setItem('abb_completed',JSON.stringify(x))
  localStorage.setItem('abb_done',String(x.length))
  setDone(true)
 }
 const i=slugs.indexOf(lesson.slug)
 const next=i<6?'/lesson/'+slugs[i+1]:'/dashboard'
 return <main className="lessonPage">
  <header className="lessonNav"><Link href="/dashboard" className="brand">AI BUSINESS BUILDER<span>.</span></Link><span>MODULE 01 / THE MONEY MINDSET</span></header>
  <article className="lessonWrap">
   <div className="lessonMeta"><span>{lesson.num}</span><span>{lesson.kicker}</span></div>
   <h1>{lesson.title}</h1>
   <div className="lessonBody">{lesson.body.map((p:string)=><p key={p}>{p}</p>)}</div>
   <section className="principle"><small>THE PRINCIPLE</small><strong>{lesson.principle}</strong></section>
   <section className="lessonSection"><small>REAL-WORLD EXAMPLES</small><div className="exampleGrid">{lesson.examples.map((x:string)=><div className="example" key={x}>{x}</div>)}</div></section>
   <section className="lessonSection action"><small>YOUR MOVE</small><h2>{lesson.exercise}</h2><textarea value={response} onChange={e=>setResponse(e.target.value)} placeholder="Write your response here..." /></section>
   <section className="challenge"><small>BUILD CHALLENGE</small><h2>{lesson.challenge}</h2></section>
   <section className="check"><small>KNOWLEDGE CHECK</small><h2>{lesson.check}</h2><div className="answers"><button onClick={()=>setAnswer('A')}>A</button><button onClick={()=>setAnswer('B')}>B</button></div>{answer&&<p className="feedback">{answer}: {lesson.answer}</p>}</section>
   <section className="milestone"><small>MILESTONE</small><h2>{lesson.milestone}</h2></section>
   <div className="lessonFooter">{done?<span className="complete">✓ Lesson complete</span>:<button className="primary" onClick={complete}>Mark lesson complete →</button>}{done&&<Link href={next} className="secondary">Continue →</Link>}</div>
  </article>
 </main>
}
