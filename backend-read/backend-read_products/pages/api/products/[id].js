import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id);

      if (!product) {
        return response.status(404).json({ message: "Product not found" });
      }

      return response.status(200).json(product);
    } catch (error) {
      return response.status(500).json({ error: "Failed to fetch product" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
