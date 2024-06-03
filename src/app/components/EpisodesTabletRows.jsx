import Link from "next/link";

const EpisodesTabletRows = ({
  title,
  date,
  duration,
  podcastId,
  episodeId,
}) => {
  return (
    <tr className="odd:bg-white  even:bg-gray-50  border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hover:underline"
      >
        <Link href={`/podcast/${podcastId}/episode/${episodeId}`}>{title}</Link>
      </th>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{duration}</td>
    </tr>
  );
};

export default EpisodesTabletRows;
