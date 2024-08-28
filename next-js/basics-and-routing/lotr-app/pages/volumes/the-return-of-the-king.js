import { volumes } from "@/resources/lib/data";
import Link from "next/link";

const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function VolumeDetail() {
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
