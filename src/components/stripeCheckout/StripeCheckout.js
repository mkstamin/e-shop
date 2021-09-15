/* eslint-disable camelcase */
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { formatPrice } from '../../utils/helpers';
import Wrapper from './StripeCheckout.style';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckoutForm = () => {
    const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
    const { myUser } = useUserContext();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    const srtipe = useStripe();
    const elements = useElements();

    const cardStyle = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#32325d',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    const createPaymentIntent = useCallback(async () => {
        try {
            const { data } = await axios.post(
                '/.netlify/functions/create-payment',
                JSON.stringify({
                    cart,
                    shipping_fee,
                    total_amount,
                })
            );
            setClientSecret(data.clientSecret);
        } catch (err) {
            // console.log(err.response);
        }
    }, [cart, shipping_fee, total_amount]);

    useEffect(() => {
        createPaymentIntent();
    }, [createPaymentIntent]);

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        console.log('Hello');
        const payload = await srtipe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);

            setTimeout(() => {
                clearCart();
                history.push('/');
            }, 5000);
        }
    };

    return (
        <div>
            {succeeded ? (
                <article className="text-center">
                    <h4>Thank you</h4>
                    <p>
                        Your payment was successfull ! <br />
                        Redirecting to home page shortly.
                    </p>
                </article>
            ) : (
                <article>
                    <h4>Hello, {myUser && myUser.name}</h4>
                    <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
                    <p>Test Card Number: 4242 4242 4242 4242</p>
                </article>
            )}
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />

                <button type="submit" disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinner" /> : 'Pay'}
                    </span>
                </button>
                {/* show error messege */}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {/* show success message */}
                <p className={succeeded ? 'result-message' : 'result-message hidden'}>
                    Payment succedded, seee the result in your
                    <a href="https://dashboard.stripe.com/test/payments"> Stripe deshbord </a>
                    Refresh the page to pay again
                </p>
            </form>
        </div>
    );
};

const StripeCheckout = () => (
    <Wrapper className="section">
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </Wrapper>
);

export default StripeCheckout;
