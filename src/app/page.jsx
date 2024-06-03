"use client";

import usePodcast from "./Hook/UsePodcast";
import PodcastCard from "./components/PodcastCard";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const { podcasts, isLoading } = usePodcast();
  const [searchValue, setSearchValue] = useState("");
  const [filteredEntrys, setFilteredEntrys] = useState([]);

  useEffect(() => {
    if (podcasts && podcasts.feed) {
      const entrys = podcasts.feed.entry;
      setFilteredEntrys(
        entrys.filter(
          (podcast) =>
            podcast.title.label
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            podcast["im:artist"].label
              .toLowerCase()
              .includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, podcasts]);


 

  // if (!podcasts || !podcasts.feed) {
  //   return <div>No se encontraron resultados</div>;
  // }

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <nav className="flex justify-center gap-5">
        <p className="bg-blue-600 text-center text-white flex items-center rounded-md font-bold p-2">
          {filteredEntrys.length}
        </p>
        <form className="max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar podcasts"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </nav>
      <main className="flex min-h-screen min-w-full flex-col items-center p-24 bg-white">
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10 mb-6 mx-5 md:mb-10">
          {filteredEntrys.map((podcast) => {
            return (
              <Link
                href={`/podcast/${podcast.id.attributes["im:id"]}`}
                key={podcast.id.label}
              >
                <li>
                  <PodcastCard
                    title={podcast.title.label}
                    author={podcast["im:artist"].label}
                    imageUrl={podcast["im:image"][2].label}
                  />
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
