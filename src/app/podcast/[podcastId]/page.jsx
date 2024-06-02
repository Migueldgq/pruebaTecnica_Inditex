"use client";

import usePodcast from "@/app/Hook/UsePodcast";
import usePodcastDetails from "@/app/Hook/UsePodcastDetails";
import PodcastCardExtended from "@/app/components/PodcastCardExtended";

const PodcastDetail = ({ params }) => {
  const { podcastId } = params; // Obtengo el ID del podcast desde params

  if (!podcastId) return <p>Loading...</p>;

  const { podcastDetails } = usePodcastDetails(podcastId);
  console.log("detalles podcast", podcastDetails);

  const { podcasts } = usePodcast();

  if (!podcasts || !podcasts.feed) {
    return <div>Loading...</div>;
  }

  const entrys = podcasts.feed.entry;

  console.log(entrys);

  const filteredPodcastsById = entrys.filter(
    (entry) => entry.id.attributes["im:id"] === podcastId
  );

  if (filteredPodcastsById.length === 0) {
    return <div>No podcast found with ID: {podcastId}</div>;
  }

  const filteredPodcast = filteredPodcastsById[0];
  console.log("Podcast filtrado", filteredPodcast);
  return (
    <div>
      <h1>Podcast ID: {podcastId}</h1>
      <PodcastCardExtended
        title={filteredPodcast.title.label}
        author={filteredPodcast["im:artist"].label}
        imageUrl={filteredPodcast["im:image"][2].label}
        description={filteredPodcast.summary.label}
      />
    </div>
  );
};

export default PodcastDetail;
