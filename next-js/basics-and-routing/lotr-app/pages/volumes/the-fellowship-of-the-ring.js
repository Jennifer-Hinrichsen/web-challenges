import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

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
      <div style={{ marginTop: "20px" }}>
        <Image
          src={volume.cover}
          alt="Cover"
          width={140}
          height={230}
          layout="fixed"
        />
      </div>
    </div>
  );
}
