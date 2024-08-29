import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Hello from Next.js</h1>
      </div>
      <ul>
        <li>
          <Link href="/volumes">Volume Overview</Link>
        </li>
      </ul>
    </>
  );
}
