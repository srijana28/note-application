import React, { useState } from 'react';
import styles from './form.module.scss'
import BrandLogo from '../../../../components/shared/brand';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/atoms/input';
import Button from '../../../../components/atoms/button';

function Form() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
  return (
   <section className={styles['form-container']}>
    <BrandLogo/>
    <div className={styles.form}>
        <Button text="Join with Google" 
             icon="bi:google"
             className={styles.google}/>

        <div className={styles.option}>
            <span>Or Join with email address</span>
        </div>
        <div>
            <article className={styles.details}>
                <Input type="email" placeholder={"Type your EmailId"}
                value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input type="password" placeholder={"Type your Password"}
                value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
            </article>
            <Button text="Join with email"
             icon="material-symbols:login-sharp"
             className={styles.emailbtn}
             handleClick={()=>navigate("/notes")}
             />
        
        </div>
    </div>
   </section>
  )
}

export default Form
