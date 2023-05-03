import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount, email, courseId } = req.body;

  try {
    const response = await fetch(
      'https://api.paystack.co/transaction/initialize',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer sk_live_09230a6a59aa774771702e70ac6edf6093f5bf03`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Paystack accepts amount in kobo (1 NGN = 100 kobo)
          email,
          metadata: {
            courseId,
          },
        }),
      }
    )

    const data = await response.json();

    if (data.status) {
      res.status(200).json({ data });
    } else {
      res.status(500).json({ error: data.message });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while initiating payment." });
  }
}
