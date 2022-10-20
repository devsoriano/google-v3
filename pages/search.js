import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import { SearchResults } from "../components/SearchResults";
import response from "../response";

export default function Search({ results }) {
  const router = useRouter();

  const {
    query: { term, searchType },
  } = router;

  return (
    <div>
      <Head>
        <title>{term} - Search Page</title>
      </Head>

      <SearchHeader />

      {searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { term, searchType, start },
  } = context;

  const startIndex = start || "1";
  const mockData = false;

  const data = mockData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${term}${
          searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
