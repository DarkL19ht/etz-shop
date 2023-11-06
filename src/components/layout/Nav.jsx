import React from 'react'
import { Logo } from '../../assets'
import {NavButton} from '../button'
import styles from './style.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
          <div>
              <img src = {Logo} alt= 'logo'/>
        </div>
          <div className={styles.btn}>
              <NavButton type='submit' text='LOGIN' className={styles.ttno} />
              <NavButton type='submit' text='REGISTER' className={styles.ttno}/>
        </div>
    </nav>
  )
}

export default Nav