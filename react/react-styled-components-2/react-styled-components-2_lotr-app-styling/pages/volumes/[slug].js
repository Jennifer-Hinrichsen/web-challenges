import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { volumes } from "../../lib/data";

// Styled components
const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor || "white"};
  padding: 2rem;
  border-radius: 8px;
`;

const NavLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const VolumeTitle = styled.h1`
  color: ${({ theme }) => theme.primaryColor || "black"};
`;

const VolumeDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

// VolumeDetail component
export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, backgroundColor, color } = volume;

  return (
    <Container bgColor={backgroundColor}>
      <NavLink href="/volumes">← All Volumes</NavLink>
      <VolumeTitle>{title}</VolumeTitle>
      <VolumeDescription>{description}</VolumeDescription>
      <ColorBackdrop $color={color}>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ColorBackdrop>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <NavLink href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </NavLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <NavLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </NavLink>
        </div>
      ) : null}
    </Container>
  );
}

const ColorBackdrop = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  color: var(--color-smoke);
  background-color: ${($color) => $color};
`;
