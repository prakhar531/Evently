//stripe webhook
import stripe from "stripe";
import { NextResponse } from "next/server";

import { createOrder } from "@/lib/actions/order.actions";

export async function POST(req: Request) {
  // const body = await request.text();
  const rawBody = await req.text();

  const sig = req.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET! as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: `Webhook signature verification failed: ${error}`,
      },
      {
        status: 400,
      }
    );
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  //Listening to checkout.session.completed
  if (eventType === "checkout.session.completed") {
    const { id, amount_total, metadata } = event.data.object;

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || "",
      buyerId: metadata?.buyerId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };

    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", order: newOrder });
  }

  return new Response("", { status: 200 });
}
