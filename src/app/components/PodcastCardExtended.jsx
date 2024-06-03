"use client";

const PodcastCardExtended = ({
  title,
  author,
  imageUrl,
  altText,
  description,
}) => {
  const isLongTitle = title.length > 20;
  return (
    <section className="bg-white drop-shadow-md max-h-[800px] w-64 flex flex-col items-center justify-center p-4">
      <img
        className="rounded-md object-cover w-40 h-40"
        src={imageUrl}
        alt={altText}
      />
      <hr className="h-px w-full my-8 bg-gray-400 border-0 " />
      <article className="flex flex-col justify-center items-start w-full">
        <h2
          className={`text-black text-sm text-left font-semibold min-w-0 max-w-60 ${
            isLongTitle ? "truncate" : ""
          }`}
        >
          {title}
        </h2>
        <p className="text-gray-500 text-xs text-left">Author: {author}</p>
      </article>
      <hr className="h-px w-full my-8 bg-gray-400 border-0 " />
      <article className="flex flex-col justify-center items-start w-full h-auto overflow-y-auto ">
        <h2 className="font-semibold">Description:</h2>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default PodcastCardExtended;
