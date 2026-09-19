import Link from 'next/link'

const modules = [
  ['01','THE MONEY MINDSET','Learn how value, problems, customers, and opportunity actually connect.'],
  ['02','MASTER AI','Use AI with judgment: prompting, research, verification, multimodal work, and workflows.'],
  ['03','FIND THE BUSINESS','Turn a real customer problem into a validated business opportunity.'],
  ['04','BUILD','Create a service, digital product, or AI-powered software MVP.'],
  ['05','SELL','Position, price, pitch, prospect, close, and learn from rejection.'],
  ['06','BUILD THE MACHINE','Turn repeatable work into systems, SOPs, automations, and processes.'],
  ['07','SCALE','Understand retention, unit economics, delegation, reinvestment, and sustainable growth.'],
  ['08','THE PERSON BEHIND THE BUSINESS','Build the judgment, discipline, reputation, and resilience required to keep going.'],
]

export default function Home(){
  return <main>
    <nav className="nav"><div className="shell navInner"><Link href="/" className="brand">AI BUSINESS BUILDER<span>.</span></Link><div className="navLinks"><Link href="/curriculum">Curriculum</Link><Link href="/dashboard" className="navCta">Enter Course</Link></div></div></nav>
    <section className="hero"><div className="shell heroInner">
      <div className="eyebrow">THE PRACTICAL AI ENTREPRENEURSHIP PROGRAM</div>
      <h1>Build something<br/><em>worth paying for.</em></h1>
      <p className="heroCopy">AI is the tool. Business judgment is the advantage. Learn how to find problems, build solutions, get customers, and create systems that compound.</p>
      <div className="actions"><Link href="/dashboard" className="primary">Start Building →</Link><Link href="/curriculum" className="secondary">Explore the curriculum</Link></div>
      <div className="proof"><span>8 modules</span><i/> <span>Real projects</span><i/> <span>Capstone business</span><i/> <span>No hype</span></div>
    </div></section>
    <section className="manifesto"><div className="shell twoCol"><div><div className="eyebrow">THE RULE</div><h2>We are not teaching you to chase AI.</h2></div><p>We are teaching you to use AI to become more capable. Every module ends with work you can point to: a problem list, a validated opportunity, an offer, a prototype, a sales process, operating systems, and a 90-day plan.</p></div></section>
    <section className="curr"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">THE CURRICULUM</div><h2>From idea to owner.</h2></div><Link href="/curriculum">View all →</Link></div><div className="moduleGrid">{modules.map(([n,t,d])=><Link href={`/curriculum#module-${n}`} className="module" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>Learn → Build → Test</b></Link>)}</div></div></section>
    <section className="quote"><div className="shell"><div className="quoteMark">“</div><blockquote>Price is what you pay. Value is what you get.</blockquote><p>— Warren Buffett</p><small>The lesson: customers do not buy your effort. They buy the outcome they believe your offer can create. Your job is to make that value clear.</small></div></section>
    <footer><div className="shell"><strong>AI BUSINESS BUILDER.</strong><span>Build. Sell. Scale.</span><Link href="/dashboard">Enter the program →</Link></div></footer>
  </main>
}
