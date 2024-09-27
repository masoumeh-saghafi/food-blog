import axios from "axios";
import React, { useEffect, useState } from "react";

function CommentList(props) {
  const [comments, setComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { postId } = props;

  useEffect(() => {
    axios
      .get(
        `https://thepokerface.pythonanywhere.com/cube_blog/comments?post_id=${postId}`
      )
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("can't connect to server!");
      });
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div className="row justify-content-start">
          <div className="col-1 me-4 ">
          <img
            src="https://secure.gravatar.com/avatar/77054695013569115d715ef4471d2627?s=32&d=mm&r=g"
            className=" pt-2 rounded-5"
            alt="..."
            style={{ width: "55px", height: "55px" }}
          />
          </div>
          <div className="col">
            <p className="mb-1">{comment.name}</p>

            <p>
              <small className="mb-1 text-muted">{comment.create_date}</small>
            </p>
            <p className="mb-1">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
