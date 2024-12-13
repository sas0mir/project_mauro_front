//import { useState } from 'react'
import styles from './home.module.scss'

function Homepage() {

  return (
    <div className={styles.homepage}>
      <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>BENVENUTO MAURO Homepage</h1>
      <p style={{margin: '1rem', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, rem ad necessitatibus voluptate iusto veniam quibusdam cumque qui dolor expedita incidunt fugiat sequi quaerat corporis. Eveniet dolorum necessitatibus corrupti atque!</p>
      {/* <img style={{width: '100%'}} src='https://diocesiluceratroia.it/wp-content/uploads/sites/2/2019/06/Sacro-Cuore-di-Gesù-1-800x437.jpg' /> */}
    </div>
  )
}

export default Homepage
