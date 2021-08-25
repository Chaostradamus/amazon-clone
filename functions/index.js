const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JSB5IBAhKPWKmgweecNreVCA1qBF1OOlmKchig6i829Y6Q6N7ALQjIxn865wOMxYBWvVVQ095ihWhjHIE8jndeg008HQt0otA"
);
// API

// -App config

const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async  (request, response) => {
const total = requests.query.total

console.log('Payment request recieved boom!!!! for this amount', total)

const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
})

response.status(201).send({
    clientSecret: paymentIntent.client_secret,
})
})

// -Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/clone-e3a68/us-central1/api
