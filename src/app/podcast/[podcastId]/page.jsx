"use client";

import usePodcast from "@/app/Hook/UsePodcast";
import usePodcastDetails from "@/app/Hook/UsePodcastDetails";
import EpisodesTablet from "@/app/components/EpisodesTablet";
import PodcastCardExtended from "@/app/components/PodcastCardExtended";

const PodcastDetail = ({ params }) => {
  const { podcastId } = params; // Obtengo el ID del podcast desde params

  const { podcastDetails } = usePodcastDetails(podcastId);

  //console.log(podcastDetails.results);

  //const filteredPodcastDetails = podcastDetails.slice(1);

  const filteredPodcastDetails =
    podcastDetails && podcastDetails.results
      ? podcastDetails.results.slice(1)
      : [];

  const { podcasts } = usePodcast();

  if (!podcasts || !podcasts.feed) {
    return;
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

  console.log("Total", podcastDetails.resultCount);

  return (
    <div className="h-full w-full">
      <main className="flex flex-row">
        <aside className="w-[20%] h-screen flex justify-center pt-10">
          <PodcastCardExtended
            title={filteredPodcast.title.label}
            author={filteredPodcast["im:artist"].label}
            imageUrl={filteredPodcast["im:image"][2].label}
            description={filteredPodcast.summary.label}
          />
        </aside>

        <section className="w-[80%] flex flex-col pb-10">
          
          <article className="flex items-center justify-center">
            <EpisodesTablet data={podcastDetails} />
          </article>
        </section>
      </main>
    </div>
  );
};

export default PodcastDetail;
