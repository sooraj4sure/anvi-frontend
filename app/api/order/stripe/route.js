import Stripe from 'stripe';
import { connectDB } from "@/lib/db";
import orderModel from "@/lib/models/orderModel";
import { getUserId } from "@/lib/auth";

// GATEWAY INITIALIZE
const currency = 'inr';

// placing order on Stripe — mirrors orderController.placeOrderStripe
export async function POST(request) {
  const { userId, error } = getUserId(request);
  if (error) return error;
  await connectDB();

  try {
    const { items, amount, address } = await request.json();
    const origin = request.headers.get('origin');

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }));

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    });
    return Response.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: error.message });
  }
}
