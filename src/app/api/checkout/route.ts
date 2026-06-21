import Stripe from "stripe";
import { NextResponse } from "next/server";

console.log("KEY=",process.env.STRIPE_SECRET_KEY);
const stripe= new Stripe(process.env.STRIPE_SECRET_KEY as string
);


export async function POST(){
    const session=await stripe.checkout.sessions.create({
        mode:"subscription",
        payment_method_types:["card"],
        line_items:[{
            price:process.env.STRIPE_PRICE_ID as string,
            quantity:1,
        },],
        success_url:`${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        cancel_url:`${process.env.NEXT_PUBLIC_BASE_URL}/chooseplan`,
    });
  return(
NextResponse.json({url:session.url})
  )
}
