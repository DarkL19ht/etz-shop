import React from 'react'
import styles from '../style.module.css'
import { Button } from '../../../../components/button'

function TopSection() {
  return (
      <div className={styles.topsection}>
          <div  className='absolute bottom-0 left-0'>
              <Button type='submit' text= 'SHOP NOW' />
          </div>
    </div>
  )
}

export default TopSection