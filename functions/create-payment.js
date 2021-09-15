/* eslint-disable camelcase */
/* eslint-disable func-names */

// /.netlify/functions/create-payment'
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SK);

exports.handler = async function (event) {
    if (event.body) {
        const { shipping_fee, total_amount } = JSON.parse(event.body);

        const calcutateOrderAmount = () => shipping_fee + total_amount;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calcutateOrderAmount(),
                currency: 'usd',
            });
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    }

    return {
        statusCode: 200,
        body: 'payment',
    };
};
