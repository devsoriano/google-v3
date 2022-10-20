import Parser from "html-react-parser";

export const SearchResults = ({ results }) => {
  const {
    searchInformation: { formattedTotalResults, formattedSearchTime },
    items,
  } = results;

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About: {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>
      {items.map(({ link, formattedUrl, title, htmlSnippet }) => (
        <div key={link} className="max-x-xl mb-8">
          <div className="group truncate">
            <a href={link} className="text-sm">
              {formattedUrl}
            </a>
            <a
              href={link}
              className="group-hover:underline decoration-blue-800"
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};
