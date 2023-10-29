import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export async function POST(req, res) {
  const { items, email } = await req.json();
  console.log(items);

  const modifiedItems = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        image: [item.images],
        description: item.description,
      },
    },
  }));
  const sesssion = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // shipping_address_collection: {
    //   allowed_countries: ["IN"],
    // },
    line_items: modifiedItems,
    mode: "payment",
    success_url: "/sucess",
    cancel_url: "/cart",
  });

  return NextResponse.json({ id: sesssion.id }, { status: 200 });
}
