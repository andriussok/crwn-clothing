import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // stripe requires price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_DIAFv84rgFVs606IWThKrzgJ00HNqEwEhe';

  // with a token you would pass this to your backend which then creates the charge. But we're not processing the payment - so we just alert "Payment Successful"
  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  }

  // see more options at https://github.com/azmenak/react-stripe-checkout
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;