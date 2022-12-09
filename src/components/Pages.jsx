import React, { useState, useEffect } from "react";
import PageComponent from "./PageComponent";

const Pages = () => {
  const [pages, setPages] = useState([]);
  const [pagesLoaded, setpagesLoaded] = useState(false);
  const [spacesCount, setSpacesCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [blogsCount, setBlogsCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const QRK_WIKI_ALL_URL = "http://localhost:8090/rest/api/";
    const QRK_WIKI_PAGES_URL = "http://localhost:7010/rest/api/pages";
    const STATS_URL = "http://localhost:8090/rest/api/stats/";
    fetch(QRK_WIKI_PAGES_URL)
      .then((res) => res.json())
      .then((res) => {
        let pagesData = res.slice(0, 200);
        console.log(pagesData);
        setPages(pagesData);
        setpagesLoaded(true);
      });
    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <div>
      <h2>Wiki system Dashboard</h2>
      <div>
        <h2>Statistics</h2>
        <div>
          <p>Spaces: {spacesCount}</p>
          <p>Pages: {pagesCount}</p>
          <p>Blogs: {blogsCount}</p>
          <p>Comments: {commentCount}</p>
        </div>
      </div>
      <div>
        {pagesLoaded &&
          pages.map((page) => (
            <div className="page" key={page.id}>
              <PageComponent page={page} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pages;
