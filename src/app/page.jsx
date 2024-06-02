"use client";

import Image from "next/image";
import usePodcast from "./Hook/UsePodcast";
import PodcastCard from "./components/PodcastCard";
import Link from "next/link";

export default function Home() {
  const { podcasts } = usePodcast();

  console.log(podcasts);

  if (!podcasts || !podcasts.feed) {
    return <div>Loading...</div>;
  }

  const entrys = podcasts.feed.entry;

  console.log(entrys);
  console.log(entrys[0].id.attributes["im:id"]);

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-24 bg-white">
      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10 mb-6 mx-5 md:mb-10">
        {entrys.map((podcast) => {
          return (
            <Link href={`/podcast/${podcast.id.attributes["im:id"]}`} key={podcast.id.label}>
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
  );
}
