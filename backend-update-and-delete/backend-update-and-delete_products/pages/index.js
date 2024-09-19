import useSWR from "swr";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const { data, isLoading, mutate } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  async function handleAddProduct(productData) {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} />
      <hr />
      <ProductList />
    </>
  );
}
