
'use client'
import { useState } from 'react'
import Link from 'next/link'

const FILMS = [
  {id:'1', t:'THE HOUSE WE SOLD', g:'Drama'},
  {id:'2', t:'THE HALLWAY LIGHT', g:'Horror'},
  {id:'3', t:'THE LAST CALL', g:'Thriller'},
  {id:'4', t:'ECHOES OF US', g:'Sci-Fi'},
]

export default function Browse(){
  const [selected, setSelected] = useState<any>(null)
  const [adDone, setAdDone] = useState(false)
  return (
    <main style={{background:'#0a0a0a', color:'white', minHeight:'100vh'}}>
      <header style={{position:'fixed', top:0, width:'100%', display:'flex', justifyContent:'space-between', padding:'16px 24px', background:'rgba(0,0,0,0.9)', zIndex:50}}>
        <Link href="/" style={{color:'#E50914', fontWeight:900, fontSize:'20px', textDecoration:'none'}}>DRAMA.AI</Link>
        <div style={{fontSize:'12px', color:'#aaa'}}>Free: Ads pay you $0.042/view</div>
      </header>
      <div style={{padding:'80px 24px'}}>
        <h2>Continue Watching • Ad model active</h2>
        <div style={{display:'flex', gap:'12px', overflowX:'auto', marginTop:'16px'}}>
          {FILMS.map(f=> <div key={f.id} onClick={()=> {setSelected(f); setAdDone(false); setTimeout(()=> setAdDone(true), 4000)}} style={{minWidth:'180px', height:'250px', background:'#222', borderRadius:'8px', padding:'12px', cursor:'pointer'}}><div style={{fontSize:'10px', background:'#333', width:'fit-content', padding:'2px 6px', borderRadius:'4px'}}>{f.g}</div><div style={{marginTop:'80px', fontWeight:'bold'}}>{f.t}</div><div style={{marginTop:'8px', fontSize:'12px', color:'#E50914'}}>▶ Play</div></div>)}
        </div>
      </div>
      {selected && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', zIndex:100, padding:'24px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{background:'#181818', borderRadius:'12px', maxWidth:'600px', width:'100%', overflow:'hidden'}}>
            {!adDone ? (
              <div style={{aspectRatio:'16/9', background:'black', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px'}}>
                <div style={{fontSize:'10px', background:'#facc15', color:'black', padding:'2px 8px', borderRadius:'4px', fontWeight:'bold', marginBottom:'12px'}}>AD • You earn $0.042</div>
                <h3>Blue Bottle Coffee — Demo Ad</h3>
                <p style={{fontSize:'12px', color:'#666', marginTop:'8px'}}>Replace with Google Ad Manager ad</p>
                <div style={{width:'200px', height:'4px', background:'#333', marginTop:'16px', borderRadius:'2px'}}><div style={{width:'60%', height:'100%', background:'white'}}></div></div>
                <p style={{fontSize:'10px', color:'#666', marginTop:'8px'}}>Ad ends in 3s — then film plays</p>
              </div>
            ) : (
              <div style={{aspectRatio:'16/9', background:'#1a1a2e', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <p style={{fontStyle:'italic'}}>“{selected.t} — Film playing”</p>
              </div>
            )}
            <div style={{padding:'16px'}}>
              <h2>{selected.t}</h2>
              <p style={{fontSize:'12px', color:'#aaa'}}>{selected.g} • AI Generated • 8m</p>
              {adDone && <div style={{marginTop:'8px', fontSize:'10px', background:'#16a34a', width:'fit-content', padding:'2px 8px', borderRadius:'4px'}}>+ $0.042 earned</div>}
              <div style={{display:'flex', gap:'8px', marginTop:'16px'}}>
                <button onClick={()=> setSelected(null)} style={{background:'white', color:'black', border:'none', padding:'8px 16px', borderRadius:'6px', fontWeight:'bold', cursor:'pointer'}}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
