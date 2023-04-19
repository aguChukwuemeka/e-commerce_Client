// import * as React from "react";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise: any;

// const getStripe = (): void => {
//   if (!stripePromise)
//     stripePromise = loadStripe(
//       process.env.REACT_PUBLISHABLE_STRIPE_KEY as string
//     );
//   else return stripePromise;
// };

// export const Payment: React.FC<{}> = () => {
//   const [stripeError, setStripeError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   const item = {
//     price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
//     quantity: 1,
//   };

//   const checkOutOptions = {
//     lineItems: [item],
//     mode: "payment",
//     successUrl: `${window.location.origin}/success`,
//     cancelUrl: `${window.location.origin}/cancel`
//   };

//   const redirectToCheckout = async () => {
//     setIsLoading(true);
//     console.log("redirectToCheckOut");

//     const stripe = await getStripe();
//     const { error } = await stripe.redirectToCheckout(checkOutOptions);
//     console.log("Stripe checkout error", error);

//     if (error) setStripeError(error.message);
//     setIsLoading(false);
//   }

//   if (stripeError) alert(stripeError);

//   return (
//     <form>
//       <button>Submit</button>
//     </form>
//   );
// };

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../assets/credit-card.svg";
import ProductImage from "../assets/product-image.jpg";
// import { Stripe } from "@stripe/stripe-js/types/stripe-js";

let stripePromise: Promise<any | null>;

const getStripe = (): any => {
  if (!stripePromise)
    stripePromise = loadStripe(
      process.env.REACT_PUBLISHABLE_STRIPE_KEY as string
    );
  else return stripePromise;
};

export const Payment: React.FC<{}> = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: null,
    quantity: 0,
  };

  const checkOutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckOut");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkOutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};
 