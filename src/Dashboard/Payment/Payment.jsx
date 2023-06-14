import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import useChangeTitle from "../../Hooks/useChangeTitle";




const Payment = () => {
  useChangeTitle('CheckOut | Rhythm-Retreat')
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const {id} = useParams();
  // console.log(id);

  const [myClass,setMyClass] = useState([])
  useEffect(() => {
    fetch(`https://rhythm-retreat-server.vercel.app/classes/${id}`)
    .then(res => res.json())
    .then(data => setMyClass(data))
  }, [id])
  
  const price = myClass?.price;
  const totalPrice = parseFloat(price);
  console.log(totalPrice);

  return <div className="w-full px-10">
    <h1 className="mb-20 text-center text-3xl font-semibold underline">Check Out Here!!!</h1>
    <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} id={id} myClass={myClass}></CheckoutForm>
    </Elements>
  </div>;
};

export default Payment;
