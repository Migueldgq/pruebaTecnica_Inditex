import EpisodesTabletRows from "./EpisodesTabletRows";

import { LoadingContext } from "../providers/LoadingContext";
import { useContext, useEffect } from "react";

const EpisodesTablet = ({ data }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  

  const episodes = data;
  const filteredResults =
    episodes && episodes.results ? episodes.results.slice(1) : [];

  

  //Este condicional no logré modificarlo para que mientras cargue la data el isLoading sea true y a la vez si al cargar la data no tiene episodios pues sea false

  useEffect(() => {
    if (filteredResults.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [filteredResults, setIsLoading]);

  ////////////////////////////////////////

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${day}/${month}`;
  };

  const formatDuration = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col gap-6 ">
      <article className="flex items-center h-10 bg-gray-50 shadow-lg">
        <p className="font-semibold flex items-center justify-center ">
          Episodes : {filteredResults.length}
        </p>
      </article>
      {filteredResults.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-500">This podcast has no episodes.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-10 relative overflow-hidden shadow-lg sm:rounded-lg">
          <table className="text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((episode) => (
                <EpisodesTabletRows
                  key={episode.trackId}
                  title={episode.trackName}
                  date={formatDate(episode.releaseDate)}
                  duration={formatDuration(episode.trackTimeMillis)}
                  episodeId={episode.trackId}
                  podcastId={episode.collectionId}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EpisodesTablet;
