import React from "react";
import styles from "./LinkList.module.css";
import { Link } from "react-router-dom";

const LinkList = (props) => {
  const { title, links, emptyErrorText } = props;

  return (
    <>
      <div>
        <p className={styles.title}>{title}</p>
        {links.length === 0 && <p>{emptyErrorText}</p>}
        <ul className="list-group list-group-flush">
          {links.map((item, index) => (
            <li key={index} className="list-group-item">
              <Link to={item.link} className="text-decoration-none text-black " >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LinkList;
