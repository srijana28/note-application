import React,{useState} from 'react'
import {Icon} from '@iconify/react'
import styles from './navbar.module.scss'
import Input from '../../atoms/input'

function Navbar() {
    const[searchText,setSerachText]=useState("");
  return (
    <header className={styles.header}>
    <article className={styles['search-bar']}>
        <Icon icon={"material-symbols:search"}/>
        <Input 
        type="text" 
         placeholder="Search Notes"
         value={searchText} 
         className={styles["field"]}
         onChange={e=>setSerachText(e.target.value)}></Input>
    </article>
    <div className={styles.theme}>
        <Icon icon={"vaadin:sun-down"}/>
    </div>

    </header>
  )
}

export default Navbar
