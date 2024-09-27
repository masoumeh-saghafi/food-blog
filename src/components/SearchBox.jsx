import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const handleNavigate = () => {
    navigate(`/search/${inputRef.current.value}`)    
  }

  return (
    <>
      <div>
        <label htmlFor="exampleDataList" className="form-label">
          Search
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control me-2  rounded-1"
            id="exampleDataList"
            ref={inputRef}
            placeholder="Type to search..."
          />
          <button
            className="btn btn-danger  rounded-1 "
            type="button"
            id="button-addon2"
            onClick={handleNavigate}
          >
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
