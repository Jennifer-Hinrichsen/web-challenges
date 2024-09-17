import dbConnect from "../../../db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();

      response.status(200).json(products);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
