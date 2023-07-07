import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
const CheckoutForm = ({ price, id, myClass }) => {
  const { className, email, name, image } = myClass;
  const [error, setError] = useState("");
  const axios = useAxiosSecure();
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [clintSecret, setClintSecret] = useState("");
  // console.log(clintSecret);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      axios.post("/create-payment-intent", { price }).then((res) => {
        // setClintSecret(res.data.clintSecret);
        // console.log(res.data.clientSecret);
        setClintSecret(res.data.clientSecret);
      });
    }
  }, [price, axios]);
  // console.log(clintSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log(card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      // console.log(paymentMethod);
      setError("");
    }
    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clintSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }
    );
    if (cardError) {
      // setError(cardError)
      console.log(cardError);
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      fetch(`https://rhythm-retreat-backend.vercel.app/updatecount/${id}`, {
        method: "PATCH",
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `$${paymentIntent.amount / 100} Payment Successful`,
        showConfirmButton: false,
        timer: 1500,
      });
      const payment = {
        email: user.email,
        tarnsitionId: paymentIntent.id,
        price: paymentIntent.amount / 100,
        image,
        instructor_name: name,
        instructor_email: email,
        className,
        date: new Date(),
      };
      axios.post(`/payment/${user.email}`, payment).then((res) => {
        console.log(res.data);
      });
    }
  };
  return (
    <div className="text-center">
      {error ? (
        <p className="text-xl text-red-700 font-semibold italic my-10 text-center">
          Error: {error}
        </p>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm bg-amber-700 text-white my-5 hover:bg-amber-600"
          disabled={!stripe || !clintSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
