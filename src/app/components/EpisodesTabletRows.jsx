import Link from "next/link";

const EpisodesTabletRows = ({ title, date, duration }) => {
  return (
    <tr class="odd:bg-white  even:bg-gray-50  border-b">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Link href={"/"}>{title}</Link>
      </th>
      <td class="px-6 py-4">{date}</td>
      <td class="px-6 py-4">{duration}</td>
    </tr>
  );
};

export default EpisodesTabletRows;
