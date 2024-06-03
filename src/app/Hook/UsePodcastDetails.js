"use client";

import { useState, useEffect } from "react";

const usePodcastDetails = (id) => {
  const [podcastDetails, setPodcastDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcastDetails = async (id) => {
      try {
        const cachedDetails = localStorage.getItem(`podcastDetailsId-${id}`);
        const cachedTimestamp = localStorage.getItem(
          `podcastDetailsTimestamp-${id}`
        );
        const now = new Date().getTime();

        if (cachedDetails && cachedTimestamp) {
          const age = now - parseInt(cachedTimestamp, 10);
          const oneDay = 24 * 60 * 60 * 1000;

          if (age < oneDay) {
            setPodcastDetails(JSON.parse(cachedDetails));
            return;
          }
        }

        const response = await fetch(
          `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch podcast details");
        }

        const data = await response.json();

        setPodcastDetails(data);
        localStorage.setItem(`podcastDetails-${id}`, JSON.stringify(data));
        localStorage.setItem(`podcastDetailsTimestamp-${id}`, now.toString());
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPodcastDetails(id);
  }, [id]);

  return { podcastDetails, error };
};

export default usePodcastDetails;
