import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error!");
  }
  return await response.json();
};

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  return (
    <div>
      <h1>Random Character</h1>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Age:</strong> {data.age}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
    </div>
  );
}
