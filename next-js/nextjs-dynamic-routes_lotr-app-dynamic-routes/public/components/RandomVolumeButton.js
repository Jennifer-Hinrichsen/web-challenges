import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function RandomVolumeButton() {
  const router = useRouter();

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return <button onClick={handleRandomVolume}>Go to Random Volume</button>;
}
