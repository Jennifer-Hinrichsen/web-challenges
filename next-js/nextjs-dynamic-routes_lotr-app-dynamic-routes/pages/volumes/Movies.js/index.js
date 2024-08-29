import Link from "next/link";
import { volumes } from "@/lib/data";
import { RandomVolumeButton } from "@/public/components/RandomVolumeButton";

export default function VolumesOverview() {
  return (
    <div>
      <h1>Lord of the Rings Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <RandomVolumeButton />
    </div>
  );
}
