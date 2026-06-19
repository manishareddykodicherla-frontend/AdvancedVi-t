"use client"
import {useDispatch } from "react-redux";
import {useRouter} from "next/navigation";
import { subscribe } from "../redux/authSlice";
import Styles from "./Chooseplan.module.css"
export default function Chooseplan() {
    const dispatch =useDispatch();
    const router=useRouter();
    const handleSubscribe=()=>{
        dispatch(subscribe());
        router.push("/ForYou");
    };
  return (
<div>
    <main className={Styles.plan}>
        <h1> Get Unlimited access to many amazing books to read</h1>
        <p> Turn ordinary moments in to amazing learning opportunities</p>
        <h1> Choose plan that fits you</h1>
        <div className="">
            <input type="radio" defaultChecked/>
            <div>
    <h2> Premium Plus Yearly</h2>
    <h2>$99.99/ yearly</h2>
    <p> 7-day free trail included</p>   
    </div>
    </div>
    <div className=""> or</div>
    <div className="">
        <input type="radio"/>
        <div>
            <h2>Monthly plan</h2>
            <h2>$9.99/month</h2>
            <p> No trail included</p>
        </div>
    </div>

        <button onClick={()=>router.push("/payment")} className={Styles.button}> Start your free 7-day trial</button>
    </main>
</div>
  )
}
