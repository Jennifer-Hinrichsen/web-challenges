import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../../lib/data.js";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex(
    ({ slug: volumeSlug }) => volumeSlug === slug
  );

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return <p>Volume not found</p>;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`Cover of ${title}`} width={140} height={230} />
      <div style={{ marginTop: "20px" }}>
        {previousVolume && (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        )}
        {nextVolume && (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
