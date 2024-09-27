import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItemList from "./CardItemList";

const CardItemApiList = (props) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalDataCount, setTotalDataCount] = useState(0);

  const { filter_category_id,search } = props;

 
  console.log(pageNumber);
   useEffect(() => {
      var url = `https://thepokerface.pythonanywhere.com/cube_blog/posts?page=${pageNumber}`;
      if (filter_category_id)
       url += `&category_id=${filter_category_id}`;
     if (search)
       url+= `&search=${search}`
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
        setTotalDataCount(response.data.count);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Can't connect to server!");
      });
  }, [pageNumber,filter_category_id]);

  const totalPageCount = Math.ceil(totalDataCount / 9);
  const listPageNumbers = [];
  for (var i = 1; i <= totalPageCount; i++) {
    listPageNumbers.push(i);
  }

  return (
    <>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <CardItemList dataCardList={data} />
      <nav
        aria-label="Page navigation example "
        className="d-flex justify-content-center  align-items-center "
      >
        <ul className="pagination ">
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                if (pageNumber > 1) setPageNumber(pageNumber - 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {listPageNumbers.map((page) => (
            <li className={`page-item ${page === pageNumber && "active"}`}>
              <button className="page-link" onClick={() => setPageNumber(page)}>
                {page}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => {
                if (pageNumber < totalPageCount) setPageNumber(pageNumber + 1);
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CardItemApiList;
