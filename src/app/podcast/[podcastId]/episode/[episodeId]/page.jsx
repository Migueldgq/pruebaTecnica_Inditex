"use client";

import usePodcast from "@/app/Hook/UsePodcast";
import usePodcastDetails from "@/app/Hook/UsePodcastDetails";
import PodcastCardExtended from "@/app/components/PodcastCardExtended";

const EpisodeDetail = ({ params }) => {
  const { podcastId, episodeId } = params; // Obtener ID del podcast y del episodio desde params

  const { podcastDetails } = usePodcastDetails(podcastId);

  const filteredPodcastDetails =
    podcastDetails && podcastDetails.results
      ? podcastDetails.results.slice(1)
      : [];

  const episodeDetails = filteredPodcastDetails.find(
    (episode) => episode.trackId.toString() === episodeId
  );


  const { podcasts } = usePodcast();

  if (!podcasts || !podcasts.feed) {
    return;
  }

  const entrys = podcasts.feed.entry;

  const filteredPodcastsById = entrys.filter(
    (entry) => entry.id.attributes["im:id"] === podcastId
  );

  if (filteredPodcastsById.length === 0) {
    return;
  }

  const filteredPodcast = filteredPodcastsById[0];

  if (!episodeDetails) {
    return;
  }

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

        <section className="w-[80%] h-screen flex flex-col pt-10 pb-10 items-center">
          <article className="flex  justify-center flex-col w-[53rem] gap-10 shadow-lg">
            <p className="font-bold text-left text-xl pt-5 px-5">
              {episodeDetails.trackName}
            </p>
            <p className="px-5">{episodeDetails.description}</p>
            <audio className="w-full px-5 my-5" controls>
              <source src={episodeDetails.previewUrl} type="audio/mpeg" />
            </audio>
          </article>
        </section>
      </main>
    </div>
  );
};

export default EpisodeDetail;
