import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const resultFetcher = await fetch(url);
  if (!resultFetcher.ok) {
    throw new Error("Error fetching data");
  }
  return resultFetcher.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: character,
    error,
    isValidating,
  } = useSWR(id ? `https://swapi.py4e.com/api/people/${id}` : null, fetcher);

  if (isValidating) return <div>Loading...please wait..</div>;

  if (error) return <div>Error fetching data!</div>;

  if (!character) return <div>No character data found</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
