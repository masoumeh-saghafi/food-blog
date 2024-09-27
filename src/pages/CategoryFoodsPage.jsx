import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardItemApiList from "../components/CardItemApiList";

const CategoryFoodsPage = () => {
  const params = useParams();
  const category_id = params.id;

  return (
    <>
      <Header />
      <CardItemApiList filter_category_id={category_id} />
      <Footer />
    </>
  );
};

export default CategoryFoodsPage;
