import { useState } from 'react'
import { Logo } from '../../assets'
import {NavButton} from '../button'
import styles from './style.module.css'
import MyModal from '../ui/Modal'

function Nav() {
  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  
  return (
    <nav className={styles.nav}>
          <div>
              <img src = {Logo} alt= 'logo'/>
        </div>
          <div className={styles.btn}>
              <NavButton type='submit' text='LOGIN' className={styles.ttno}
              onClick={openModal}
              />
              <NavButton type='submit' text='REGISTER' className={styles.ttno}/>
        </div>
{
isOpen &&
<MyModal 
isOpen = {isOpen}
setIsOpen = {setIsOpen}
openModal={openModal}

/>
}

    </nav>
  )
}

export default Nav



