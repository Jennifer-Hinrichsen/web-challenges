import Link from "next/link";
import { volumes } from "../../lib/data";

export default function VolumesOverview() {
  return (
    <div>
      <h1>Lord of the Rings Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/movies/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
