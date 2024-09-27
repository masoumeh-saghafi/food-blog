import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardItemApiList from "../components/CardItemApiList";

const SearchFoodsPage = () => {
  const params = useParams();
  const text = params.text;

  return (
    <>
      <Header />
      <CardItemApiList search={text} />
      <Footer />
    </>
  );
};

export default SearchFoodsPage;
