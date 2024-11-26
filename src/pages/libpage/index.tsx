import { useState } from 'react'
import styles from './library.module.scss'

function Library() {
  const [count, setCount] = useState(0)

  const libri = [
    {name: 'Libro1', author: 'Author1'},
    {name: 'Libro2', author: 'Author2'},
    {name: 'Libro3', author: 'Author3'},
    {name: 'Libro4', author: 'Author4'},
    {name: 'Libro5', author: 'Author5'},
    {name: 'Libro6', author: 'Author6'},
    {name: 'Libro7', author: 'Author7'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
    {name: 'Libro8', author: 'Author8'},
]
  return (
    <div>
      <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>LIBRI</h1>
      <div style={{padding: '1rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      {libri.map(el => {
        return <div style={{display: 'flex', flexDirection: 'column', width: '10%'}}>
            <div style={{backgroundColor: 'black', height: '200px', width: '100px'}}></div>
            <div style={{color: 'black', padding: '0.5rem', fontSize: '14pt', fontWeight: 'bold'}}>{el.name}</div>
            <div style={{color: 'black', padding: '0.5rem'}}>{el.author}</div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Library
