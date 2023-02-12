import * as React from "react";
import StripeCheckout from "react-stripe-checkout";

export const Payment: React.FC<{}> = () => {
  const stripeKey =
    "pk_test_51MaBftK7vmvyxQ8CdVu4zDX4vmKbtqOmPNYDkQPH3mjep0QZ86cHkwzi16BUeJIS1S80tO1qTpUki7R47lKWZkd800UZC6RU57";

  const onToken = (token: any) => {
    console.log(token);
    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };
 
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <StripeCheckout
        name="Accessary shop"
        image="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
        billingAddress
        shippingAddress
        description="Your taotal is $150"
        amount={2000}
        token={onToken}
        stripeKey={stripeKey}
        ComponentClass="div"
        panelLabel="Give Money"
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout> */}
    </div>
  );
};
