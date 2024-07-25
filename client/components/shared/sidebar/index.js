import React from 'react'
import styles from "./sidebar.module.scss"
import {Icon} from '@iconify/react'
import sidebarItems from '../../../data/sidebar.json'
import BrandLogo from '../brand'
import { useNavigate } from 'react-router-dom'
import utils from '../../../utils/localstorage'
import types from "../../../config/types"

function Sidebar() {
  const navigate=useNavigate();
  const handleClick=(item)=>{
    if(item.path==='/notes')
    {
      let data=utils.getFromLocalStorage(types.NOTES_DATA);
      let updatedData=[{id:data.length+1,
        color:"rgb(174, 223, 232,0.4)", 
        text:"", 
        createdAt: new Date().toISOString()}, ...data];
        
      utils.addToLocalStorage(types.NOTES_DATA,updatedData);
    }
  }
  return (
    <aside className={styles.sidebar}>
        <BrandLogo logoOnly={true} type={"dark"} className={styles.logo}/>
        <section>
            {sidebarItems.map((item,index)=>{
                return(
                <article key={index} className={styles.item }onClick={() => handleClick(item)}>
                <Icon icon={item.icon} color={index===1?"var(--light-grey)":"var(--white)"}/>
                </article>
                );
            })}
        </section>
        <article className={styles.logout}>
            <Icon icon={"material-symbols:logout"} onClick={()=>navigate("/")}/>

        </article>
    </aside>
  )
}

export default Sidebar
