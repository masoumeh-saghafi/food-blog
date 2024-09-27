import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://thepokerface.pythonanywhere.com/cube_blog/categories/")
      .then((response) => {
        // handle success
        setCategories(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        setErrorMessage("Can't connect to server!");
      })
      .finally(() => {
        // always executed
      });
  }, []);

  return (
    <>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container align-items-center justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center "
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <Link to='/' className="nav-link " aria-current="page">
                  HOME
                </Link>
              </li>

              {categories.map((c) => (
                <li className="nav-item " key={c.id}>
                  <Link to={`/category/${c.id}`} className="nav-link " aria-current="page" >
                    {c.title.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
