import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemDetaill from "../components/ItemDetaill";
import AddComment from "../components/AddComment";
// import { data } from "../data";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";

const FoodDetailPage = () => {
  const params = useParams()
  const post_id = params.id;
  
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://thepokerface.pythonanywhere.com/cube_blog/posts/${post_id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setErrorMessage("Can't connect to server!");
      });
  }, [post_id]);

  return (
    <>
      <Header />

      <div className="container mt-5 ">
        <div className="row">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {!errorMessage && (
            <div className="col-8">
              <div className="mb-5">
                <ItemDetaill {...product} />
              </div>
              <hr />
              <AddComment postId={post_id} />
              <hr />
              <CommentList postId={post_id}/>
            </div>
          )}
          <div className="col-4">
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetailPage;
