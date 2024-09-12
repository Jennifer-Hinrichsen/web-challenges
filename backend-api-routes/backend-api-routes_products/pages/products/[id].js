import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error!");
  }
  return await response.json();
};
export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed </div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </div>
  );
}
