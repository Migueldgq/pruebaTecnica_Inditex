const { useState, useEffect } = require("react");

const usePodcastDetails = (id) => {
  const [podcastDetails, setPodcastDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async (id) => {
      try {
        const response = await fetch(
          `https://itunes.apple.com/lookup?id=${id}&media=podcast
          &entity=podcastEpisode&limit=20
          `
        );

        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }

        const data = await response.json();

        setPodcastDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPodcasts(id);
  }, []);

  return { podcastDetails, error };
};

export default usePodcastDetails;
