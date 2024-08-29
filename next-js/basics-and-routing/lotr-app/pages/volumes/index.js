import Link from "next/link";
import { introduction, volumes } from "@/resources/lib/data";

export default function IndexVolumes() {
  return (
    <>
      <div>
        <h1>Lord of the Rings</h1>
        <h2>All Volumes</h2>
      </div>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
