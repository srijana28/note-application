import React,{useState} from 'react'
import styles from './note.module.scss'
import {formatDate} from '../../../utils/formatDate';

function Note(props) {
  const{text,date,color}=props;
  const [expand,setExpand]=useState(false);
  const [noteText,setNoteText]=useState("");

  return (
    <article className={styles.container} style={{backgroundColor:color}}>
        <div className={styles.content}>
          {
            !text.length?(
            <textarea value={noteText} 
            onChange={(e) =>setNoteText(e.target.value) }
            className={styles.textarea}/>
          ):(
            <>
            <p className={expand?styles.expanded:""}>{text.substring(0,154)}</p>
            {text.length>154?
            <button onClick={()=>setExpand((prev)=>!prev)}>
              read {expand?"less":"more"}</button>:null}</>
              )
          }
           
            </div>
        <footer className={styles.footer}>
            {formatDate(date)}
        </footer>

    </article>
  )
}

export default Note
