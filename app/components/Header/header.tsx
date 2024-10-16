import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import { BeakerIcon } from '@heroicons/react/24/solid'

const header = () => {
  return (
    
    <header className={styles.header}>
    
      <BeakerIcon style={{ height: '24px', width: '24px', color: 'blue', alignItems: 'right' }} />
      

      <h1 className={styles.title}>Apnaa-Web</h1>
      <nav>
        <ul className={styles.navList}>
          
          <li><Link href="./home">Home</Link>
         <span></span> <Link href="about" target="_blank">About</Link>
        <span></span> <Link href="contact" target="_blank">Contact</Link> </li>

        </ul>
      </nav>
    </header>

  )
}

export default header
