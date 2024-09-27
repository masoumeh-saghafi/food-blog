import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const { id, image_url, categoryName, title, createDate, description } = props;

  const maxLength = 50;
  const text = `${description.substring(0, maxLength)}...`;
  return (
    <>
      <div className="card ">
        <img src={image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="text-info">{categoryName}</p>
          <Link className="card-title text-decoration-none  fw-bold  " to={`/post/${id}`}>{title}</Link>
          <p className="card-text">
            <small className="text-muted">{createDate}</small>
          </p>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
