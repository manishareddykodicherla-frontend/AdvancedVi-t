"use client"

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { subscribe } from "../redux/authSlice"
import Styles from "./payment.module.css"


import React from 'react'

export default function Paymentpage() {
    const dispatch= useDispatch();
    const router= useRouter();
    const handleSubscribe=()=>{
        dispatch(subscribe());
        router.push("/ForYou")
    }
  return (
    <main className={Styles.container}>
        <section className={Styles.left}>
            <h2>Summarist </h2>
            <p> Subscribe to summarist premium plan</p>
            <h1>$99.<span>per Year</span></h1>
        </section>
        <section className={Styles.card}>
<h2>PaymentMethod</h2>
<input className={Styles.input} placeholder="email"/>
<input className={Styles.input}  placeholder= "cardnumber"/>
<div className={Styles.row}>
    <input className={Styles.input}  placeholder="MM/YY"/>
    <input className={Styles.input}  placeholder="CVC"/>
</div>
<input className={Styles.input}  placeholder="Full name on card"/>
<input className={Styles.input}  placeholder="Billing address"/>
<button className={Styles.button} onClick={handleSubscribe}> pay</button>
        </section>
    </main>
  )
}
