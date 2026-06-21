"use client"
import {useDispatch } from "react-redux";
import {useRouter} from "next/navigation";
import { subscribe } from "../redux/authSlice";
import Styles from "./Chooseplan.module.css"
import { FaFileAlt } from "react-icons/fa";
import { PiFlowerLotusFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import {useState} from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaCopyrightSolid } from "react-icons/lia";

import { RiArrowDropUpFill } from "react-icons/ri";

export default function Chooseplan() {
    const dispatch =useDispatch();
    const router=useRouter();
    const handleSubscribe=()=>{
        dispatch(subscribe());
        router.push("/ForYou");
    };
    const [showAnswer,setShowAnswer]=useState(true);
  return (
<div>
    <main className={Styles.plan}>
        <section className={Styles.hero}>
        <h1> Get Unlimited access to many amazing books to read</h1>
        <p> Turn ordinary moments in to amazing learning opportunities</p>
        <img  src="/assets/pricing-top.png" alt="pricing"/>
        </section>
        <section className={Styles.features}>
            <div className={Styles.feature}> <FaFileAlt  className={Styles.featuring}/>
            <p> key ideas in few min with many books to read</p>
</div>
<div className={Styles.feature}> <PiFlowerLotusFill className={Styles.featuring} /> <p>
    3 million people growing with summarist everyday
</p>
</div>
<div className={Styles.feature}> <FaHandshake className={Styles.featuring} /> <p>Precise recommendations collections curated by experts</p>
</div>
        </section>
        <section className={Styles.planSection}>
        <h1> Choose plan that fits you</h1>
        <div className={Styles.planCard}>
            <input type="radio" defaultChecked/>
            <div>
    <h2> Premium Plus Yearly</h2>
    <h2>$99.99/ yearly</h2>
    <p> 7-day free trail included</p>   
    </div>
    </div>
    <div className={Styles.or}> or</div>
    <div className={Styles.planCard}>
        <input type="radio"/>
        <div>
            <h2>Monthly plan</h2>
            <h2>$9.99/month</h2>
            <p> No trail included</p>
        </div>
    </div>

        <button onClick={()=>router.push("/payment")} className={Styles.button}> Start your free 7-day trial</button>
        <p className={Styles.note}>
            Cancel your trail at any time before it ends, and you won't be charged.
        </p>
        </section>
        <section className={Styles.faq}>
            <div className={Styles.faqItem} onClick={
                ()=>setShowAnswer(!showAnswer)
            }>
            <h2>How does the free 7-day trail work?</h2>
            <span>{showAnswer? <RiArrowDropUpFill />
:<RiArrowDropDownLine />
}</span>
            </div>
            {showAnswer &&(
            <p>Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.
</p>
            )}
            <div className={Styles.faqItem} onClick={
                ()=>setShowAnswer(!showAnswer)
            }>
            <h2> Can I Switch subscription from monthly to yearly, yearly to monthly?
                </h2>
                <span> {showAnswer ?<RiArrowDropUpFill />
:<RiArrowDropDownLine />
}</span>
                </div>
                {showAnswer &&(
                <p>
                    While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.

                </p>
                )}
            <div className={Styles.faqItem} onClick={
                ()=>setShowAnswer(!showAnswer)
            }>
            <h2>What's included in the Premium plan?</h2>
            <span> {showAnswer?<RiArrowDropUpFill />
:<RiArrowDropDownLine />
}</span>
            </div>
            {showAnswer &&(
                <p>Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.
</p>
            
              )}  
              <div className={Styles.faqItem} onClick={
                ()=>setShowAnswer(!showAnswer)}>
              <h2>Can I cancel during my trail orsubscription?</h2>
              <span>{showAnswer ? <RiArrowDropUpFill />
:<RiArrowDropDownLine />
}</span>
              </div>
              {showAnswer&&(
                <p>You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.
</p>
              )}      
        </section>
        <footer className={Styles.footer}>
            <div>
                <h2>Actions</h2>
                <p>Summarist Magazine</p>
                <p>Cancel Subscription</p>
                <p>Help</p>
                <p>Contact us</p>
            </div>
            <div>
                <h2> USeful Links</h2>
                <p>Pricing</p>
                <p>Summarist Business</p>
                <p>Gift Cards</p>
                <p>Authors & Publishers</p>
            </div>
            <div><h2>Company</h2>
            <p>About</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Code of Conduct
</p>
            </div>
            <div><h2>Other</h2>
            <p>Sitemap</p>
            <p>Legal Notice
</p>
<p>Terms of Service
</p>
<p>Privacy Policies
</p>
            </div>
            </footer>
            <div className={Styles.copyright}> copyright <LiaCopyrightSolid />2023 Summarist</div>
        
    </main>
</div>
  )
}
