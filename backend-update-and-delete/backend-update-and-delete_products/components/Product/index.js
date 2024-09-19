import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(productData) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel" : "Edit Product"}
      </button>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} heading="Edit Product" />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
