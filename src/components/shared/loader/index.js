import React from 'react'
import styles from './loader.module.scss'
import Brandlogo from '../brand'
import ProgressBar from '../../atoms/progress-bar'

function Loader() {
  
  return (
    <article className={styles.container}>
        <Brandlogo/>
        <ProgressBar/>
    </article>
  )
}

export default Loader
