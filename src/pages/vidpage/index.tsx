import { useState } from 'react'
//import styles from './library.module.scss'

function Videos() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>VIDEO</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      <iframe 
      style={{margin: '1rem'}}
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
    <iframe 
      style={{margin: '1rem'}}
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
    <iframe 
      style={{margin: '1rem'}}
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
    <iframe 
      style={{margin: '1rem'}}
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
      </div>
    </div>
  )
}

export default Videos
