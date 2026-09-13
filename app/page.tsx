
import Link from 'next/link'
const genres = [
  {name:'Drama', title:'THE HOUSE WE SOLD', color:'#8B0000'},
  {name:'Horror', title:'THE HALLWAY LIGHT', color:'#000'},
  {name:'Thriller', title:'THE LAST CALL', color:'#1e293b'},
  {name:'Sci-Fi', title:'ECHOES OF US', color:'#0e7490'},
  {name:'Romance', title:'LETTERS WE BURN', color:'#881337'},
  {name:'Dark Comedy', title:'AFTER THE DIVORCE', color:'#854d0e'},
]
export default function Landing(){
  return (
    <main style={{background:'#0a0a0a', color:'white', minHeight:'100vh'}}>
      <header style={{position:'fixed', top:0, width:'100%', zIndex:50, display:'flex', justifyContent:'space-between', padding:'16px 24px', background:'rgba(0,0,0,0.8)', backdropFilter:'blur(10px)'}}>
        <h1 style={{color:'#E50914', fontWeight:900, fontSize:'24px', margin:0}}>DRAMA.AI</h1>
        <Link href="/browse" style={{background:'white', color:'black', padding:'8px 20px', borderRadius:'6px', textDecoration:'none', fontWeight:'bold'}}>Sign In</Link>
      </header>
      <section style={{padding:'120px 24px 60px', background:'linear-gradient(135deg,#1a1a2e,#16213e,black)'}}>
        <div style={{display:'inline-flex', gap:'8px', background:'#222', borderRadius:'999px', padding:'6px 12px', fontSize:'12px', marginBottom:'20px'}}>🔴 LIVE: 3 films generating now</div>
        <h1 style={{fontSize:'64px', fontWeight:900, lineHeight:0.9, margin:0}}>Every film<br/>was never<br/>filmed.</h1>
        <p style={{color:'#aaa', maxWidth:'600px', marginTop:'20px'}}>Netflix for AI-generated stories. Drama, Horror, Thriller, Sci-Fi — generated live 24/7. 94% completion rate.</p>
        <div style={{display:'flex', gap:'12px', marginTop:'24px'}}>
          <Link href="/browse" style={{background:'#E50914', color:'white', padding:'12px 24px', borderRadius:'6px', textDecoration:'none', fontWeight:'bold'}}>Start Watching Free</Link>
        </div>
        <p style={{fontSize:'12px', color:'#666', marginTop:'10px'}}>Free with ads • $9.99 Pro no ads</p>
      </section>
      <section style={{padding:'32px 24px'}}>
        <h2 style={{fontSize:'20px'}}>Pick your poison</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:'12px', marginTop:'16px'}}>
          {genres.map(g=> <div key={g.name} style={{height:'200px', background:g.color, borderRadius:'8px', padding:'12px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}><span style={{fontSize:'10px', background:'rgba(0,0,0,0.5)', padding:'2px 6px', borderRadius:'4px', width:'fit-content'}}>{g.name}</span><b>{g.title}</b></div>)}
        </div>
      </section>
      <section style={{padding:'40px 24px', borderTop:'1px solid #222', textAlign:'center'}}>
        <h2 style={{fontSize:'32px', fontWeight:900}}>How you get paid</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'16px', marginTop:'24px', maxWidth:'900px', margin:'24px auto'}}>
          <div style={{border:'1px solid #333', padding:'20px', borderRadius:'12px'}}><h3>Free • Ads</h3><p style={{fontSize:'28px', fontWeight:900}}>$0</p><p style={{fontSize:'12px', color:'#aaa'}}>You earn ~$0.08 per viewer</p></div>
          <div style={{border:'1px solid #E50914', padding:'20px', borderRadius:'12px'}}><h3>Pro • No Ads</h3><p style={{fontSize:'28px', fontWeight:900}}>$9.99/mo</p><p style={{fontSize:'12px', color:'#aaa'}}>No ads, 4K, My List</p></div>
          <div style={{border:'1px solid #333', padding:'20px', borderRadius:'12px'}}><h3>Studio</h3><p style={{fontSize:'28px', fontWeight:900}}>$29/mo</p><p style={{fontSize:'12px', color:'#aaa'}}>Generate your own</p></div>
        </div>
        <Link href="/browse" style={{display:'inline-block', marginTop:'20px', background:'#E50914', color:'white', padding:'12px 32px', borderRadius:'6px', textDecoration:'none', fontWeight:'bold'}}>Enter DRAMA.AI</Link>
      </section>
    </main>
  )
}
