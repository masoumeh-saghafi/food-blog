import React from 'react'

const ItemDetaill = (props) => {
  const { image_url, categoryName, title, create_date, description } = props;

  return (
    <>
      <div  >
        <img src={image_url} className="img-top w-100" alt="..." />
        <div className="card-body">
          <p className="text-info">{categoryName}</p>
          <h5 >{title}</h5>
          <p >
            <small className="text-muted">{create_date}</small>
          </p>
          <p >{description}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetaill