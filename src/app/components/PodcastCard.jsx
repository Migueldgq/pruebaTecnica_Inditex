const PodcastCard = ({ title, author, imageUrl, altText }) => {
  const isLongTitle = title.length > 20;
  return (
    <section className="bg-white drop-shadow-md h-32 w-auto flex flex-col items-center justify-center p-4">
      <img
        className="rounded-full object-cover w-20 h-20"
        src={imageUrl}
        alt={altText}
      />
      <article className="flex flex-col justify-center items-center">
        <h2
          className={`text-black text-sm text-center font-semibold min-w-0 max-w-60 ${
            isLongTitle ? "truncate" : ""
          }`}
           
        >
          {title}
        </h2>
        <p className="text-gray-500 text-xs text-center">Author: {author}</p>
      </article>
    </section>
  );
};

export default PodcastCard;
