import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((v) => v.slug === slug);
  const volumeIndex = volumes.findIndex((v) => v.slug === slug);
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return <p>Volume not found</p>;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes/movies">← All Volumes</Link>
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
            <Link href={`/volumes/movies/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        )}
        {nextVolume && (
          <div>
            <Link href={`/volumes/movies/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
