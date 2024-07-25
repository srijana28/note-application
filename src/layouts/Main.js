import React, { Suspense } from 'react'
import {Outlet } from 'react-router-dom';
import Loader from '../components/shared/loader'
import styles from './layout.module.scss'
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar'

function Main() {
  return (
    <Suspense fallback={<Loader/>}>
        <main className={styles.container}>
        {/*SideBar*/}
        <Sidebar/>
        <div className={styles.main}>
            {/* NavBar */}
            <Navbar/>
            <section className={styles.content}>
                <Outlet/>

            </section>
        </div>

        </main>

    </Suspense>
  )
}

export default Main
