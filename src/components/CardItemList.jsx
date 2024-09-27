import React from "react";
import CardItem from "./CardItem";

const CardItemList = (props) => {
  const { dataCardList } = props;

  return (
    <div className="container">
      <div className="row">
        {dataCardList.map((item) => (
          <div key={item.id} className="col-4 my-3">
            <CardItem {...item} />
          </div>
        ))}
      </div>
      <hr />
          </div>
  );
};

export default CardItemList;
