"use client";

const { useState, useEffect } = require("react");

const usePodcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const cachedPodcasts = localStorage.getItem("podcasts");
        const cachedTimestamp = localStorage.getItem("podcastsTimestamp");
        const now = new Date().getTime();

        if (cachedPodcasts && cachedTimestamp) {
          const age = now - parseInt(cachedTimestamp, 10);
          const oneDay = 24 * 60 * 60 * 1000;

          if (age < oneDay) {
            setPodcasts(JSON.parse(cachedPodcasts));
            return;
          }
        }

        const podcastsData = await fetch(
          `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        );

        if (!podcastsData.ok) {
          throw new Error("Failed to fetch podcasts");
        }

        const data = await podcastsData.json();

        setPodcasts(data);
        localStorage.setItem("podcasts", JSON.stringify(data));
        localStorage.setItem("podcastsTimestamp", now.toString());
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        
      }
    };
    fetchPodcasts();
  }, []);

  return { podcasts, error, isLoading };
};

export default usePodcast;
