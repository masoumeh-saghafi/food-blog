import axios from "axios";
import React, { useState } from "react";
import validator from "validator";

const AddComment = ({ postId }) => {
  const defaultForm = {
    comment: "",
    name: "",
    email: "",
    website: "",
    saveFormData: false,
    post: postId,
  };
  const [form, setForm] = useState(defaultForm);
  const [commentErrorMessage, setCommentErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMEssage, setEmailErrorMEssage] = useState("");
  const [websiteErrorMEssage, setWebsiteErrorMEssage] = useState("");

  const handleCommentChange = (event) => {
    const newComment = {
      ...form,
      comment: event.target.value,
    };
    setForm(newComment);
    if (event.target.value.length < 3 || event.target.value.length > 250) {
      setCommentErrorMessage(
        "String must cotain a mininmum of 3 and maximum of 250 character(s)"
      );
    } else {
      setCommentErrorMessage("");
    }
  };

  const handleNameChange = (event) => {
    const newName = {
      ...form,
      name: event.target.value,
    };
    setForm(newName);
    if (event.target.value.length < 3 || event.target.value.length > 50) {
      setNameErrorMessage(
        "String must cotain a mininmum of 3 and maximum of 50 character(s)"
      );
    } else {
      setNameErrorMessage("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = {
      ...form,
      email: event.target.value,
    };
    setForm(newEmail);
    if (!validator.isEmail(event.target.value)) {
      setEmailErrorMEssage(`${event.target.value}is not valid email`);
    } else {
      setEmailErrorMEssage("");
    }
  };

  const handlWebsiteChange = (event) => {
    const newWebsite = {
      ...form,
      website: event.target.value,
    };
    setForm(newWebsite);
    if (!validator.isURL(event.target.value)) {
      setWebsiteErrorMEssage(`${event.target.value}is not url`);
    } else {
      setWebsiteErrorMEssage("");
    }
  };

  var isFormValid = true;
  if (
    commentErrorMessage &&
    nameErrorMessage &&
    emailErrorMEssage &&
    websiteErrorMEssage
  ) {
    isFormValid = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      axios
        .post(
          "https://thepokerface.pythonanywhere.com/cube_blog/comments/",
          form
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Data Submited");
      console.log(form);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className=" mt-5">
          <h4 className=" fw-bold  ">Leave a Reply</h4>
          <p className="my-4">
            Yor email address will not be published. Required fields are marked
            *
          </p>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment *
            </label>
            <textarea
              className="form-control"
              id="comment"
              rows="5"
              value={form.comment}
              onChange={handleCommentChange}
            ></textarea>
            {commentErrorMessage && (
              <p className="text-danger">{commentErrorMessage}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label ">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control "
              value={form.name}
              onChange={handleNameChange}
            />
            {nameErrorMessage && (
              <p className="text-danger">{nameErrorMessage}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={handleEmailChange}
            />
            {emailErrorMEssage && (
              <p className="text-danger">{emailErrorMEssage}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="website" className="form-label ">
              Website
            </label>
            <input
              type="text"
              id="website"
              className="form-control "
              onChange={handlWebsiteChange}
            />
            {websiteErrorMEssage && (
              <p className="text-danger">{websiteErrorMEssage}</p>
            )}
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="saveFormData"
              onChange={(e) =>
                setForm({ ...form, saveFormData: e.target.checked })
              }
            />
            <label className="form-check-label" htmlFor="saveFormData">
              Save my name, emali,and website in browser for the next time i
              comment.
            </label>
          </div>

          <input
            disabled={!isFormValid}
            type="submit"
            className="btn btn-danger "
            value="POST COMMENT"
          />
        </div>
      </form>
    </>
  );
};

export default AddComment;
