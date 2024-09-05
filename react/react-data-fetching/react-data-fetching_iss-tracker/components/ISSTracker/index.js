import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const resultURL = await fetch(url);
  if (!resultURL.ok) {
    const error = new Error("Error while fetching!");
    error.info = await resultURL.json();
    error.status = resultURL.status;
    throw error;
  }

  return resultURL.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading || !coords) {
    return <h1>Loading...please wait</h1>;
  }

  if (error) {
    return <h1>Error: {error?.message}</h1>;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        latitude={coords.latitude}
        longitude={coords.longitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
