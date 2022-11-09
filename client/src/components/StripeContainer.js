import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm.js";

const PUBLIC_KEY =
  "pk_test_51M24ySDRndjoKiP4FJZpaQgKtP25zC9D7U934li9f1sUQ6pUSpwezrvrDHgTknTOGylZQ4qdgzQnHQ6V3eyZ324200flUrCkOn";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
