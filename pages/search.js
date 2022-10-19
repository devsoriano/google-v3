import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import response from "../response";

export default function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />

      {/*Search Result*/}
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;

  const data = mockData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
