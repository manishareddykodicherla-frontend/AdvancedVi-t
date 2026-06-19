"use client"
import { useSelector, useDispatch } from 'react-redux';
import { Rootstate } from "../redux/store";
import { openAuth } from "../redux/authSlice";
import Link from 'next/link';
import Styles from "./Settings.module.css"


export default function settings() {
    const dispatch=useDispatch();
    const isLoggedIn = useSelector((state:Rootstate)=>state.auth.isLoggedIn);
    const email= useSelector((state:any)=>state.auth.email)
 if(!isLoggedIn){
        return(
    <div>
        <main className={Styles.content}>
            <div>
                <figure className="landing__image--mask">
              <img src="/assets/landing.png" alt="landing" className={Styles.imagewrap}/>
            </figure>
                <h2 className={Styles.text}>
                    login in to your account to see your Library
                </h2>
                <button className={Styles.button} onClick={()=>dispatch(openAuth())}>Login</button>
            </div>

        </main>
    </div>
        )
    }
    else {
  return (
    <div className={Styles.settingContainer}>
<h2 className={Styles.title}> Settings</h2>
<div className={Styles.plandetails}>
<h4> Your Subscription plan</h4>
<p>Basic</p>
<Link href="chooseplan">
<button className={Styles.button}>Upgrade to Premium</button>
</Link>
</div>
<div>Emial</div>
<p> {email}</p>
    </div>
  )
}
}