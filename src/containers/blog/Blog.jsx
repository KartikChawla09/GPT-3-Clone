import React from "react";
import "./blog.css";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="blog-box">
      <h1 className="gradient__text main-text">
        A lot is happening,<br></br> We are blogging about it.
      </h1>
      <div className="blog-grid">
        <div className="blog-grid-part1">
          <img src={blog1} alt="blog1"></img>
          <div className="blog-article">
            <p>Sep 26, 2021</p>
            <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="blog-grid-part2">
          <div className="blog-grid-part2-left">
            <div>
              <img src={blog2} alt="blog1"></img>
              <div className="blog-article">
                <p>Sep 26, 2021</p>
                <h1>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h1>
                <p>Read Full Article</p>
              </div>
            </div>
            <div>
              <img src={blog3} alt="blog1"></img>
              <div className="blog-article">
                <p>Sep 26, 2021</p>
                <h1>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h1>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="blog-grid-part2-right">
            <div>
              <img src={blog4} alt="blog1"></img>
              <div className="blog-article">
                <p>Sep 26, 2021</p>
                <h1>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h1>
                <p>Read Full Article</p>
              </div>
            </div>
            <div>
              <img src={blog5} alt="blog1"></img>
              <div className="blog-article">
                <p>Sep 26, 2021</p>
                <h1>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h1>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
