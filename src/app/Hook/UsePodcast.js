const { useState, useEffect } = require("react");

const usePodcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const podcastsData = await fetch(
          `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        );

        if (!podcastsData.ok) {
          throw new Error("Failed to fetch podcasts");
        }

        const data = await podcastsData.json();

        setPodcasts(data);
        
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPodcasts();
  }, []);

  return { podcasts, error };
};

export default usePodcast;
