import { PaginationButtons } from "./PaginationButtons";

/* eslint-disable @next/next/no-img-element */
export default function ImageResults({ results }) {
  const { items } = results;
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {items?.map(({ displayLink, link, title, image: { contextLink } }) => (
          <div key={link} className="mb-8">
            <div className="group">
              <a href={contextLink}>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                  src={link}
                  alt={title}
                />
              </a>
              <a className="group-hover:underline" href={contextLink}>
                <h2 className="truncate text-xl">{title}</h2>
              </a>
              <a className="group-hover:underline" href={contextLink}>
                <p className="text-gray-600">{displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
