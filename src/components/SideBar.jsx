import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import LinkList from "../components/LinkList/LinkList";
import { listItems } from "../listItems";
import axios from "axios";

const SideBar = () => {
   const [recentPosts, setRecentPosts] = useState([]);
   const [recentComments, setRecentComments] = useState([])
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://thepokerface.pythonanywhere.com/cube_blog/posts/recent")
      .then((response) => {
         const newRecentPosts = response.data.map((post) => {
            return {
               id: post.id,
               title: post.title,
               link: `/post/${post.id}`,
            };
         });
        setRecentPosts(newRecentPosts);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Can't connect to server!");
      });
  }, []);


  useEffect(() => {
    axios
      .get("https://thepokerface.pythonanywhere.com/cube_blog/comments/recent")
      .then((response) => {
        const newRecentComments = response.data.map((comment) => {
          return {
            id: comment.id,
            title: comment.comment,
            link: `/post/${comment.post_id}`,
          };
        });
        setRecentComments(newRecentComments);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Can't connect to server!");
      });
  }, []);


  return (
    <aside className="sticky-top h-25">
      <SearchBox />

      <div className="my-5">
        <LinkList title="Recent Posts" links={recentPosts} />
      </div>
      <LinkList
        title="Recent Comments"
        links={recentComments}
        emptyErrorText="No Comments to show"
      />
    </aside>
  );
};

export default SideBar;
