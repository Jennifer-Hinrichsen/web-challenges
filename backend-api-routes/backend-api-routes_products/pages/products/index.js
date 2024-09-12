import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error!");
  }
  return response.json();
};
export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
