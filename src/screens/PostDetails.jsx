import React from "react";
import Container from "../components/Container";
import { NavLink, useLocation } from "react-router-dom";
import Card from "../components/Card";
import Comment from "../assets/icons/comment";
import Share from "../assets/icons/share";
import Heart from "../assets/icons/heart";

const PostDetails = () => {
  const location = useLocation();
  console.log(location.state.comments);
  return (
    <Container>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
      <h1>Post details</h1>
      <Card {...location.state} />
      <h5>Comments</h5>

      <div className="comments">
        {location.state.comments.map((item) => {
          return (
            <div className="card" key={item.commentId}>
              <div className="content-container" style={{ width: "100%" }}>
                <div className="card-title">
                  <div className="card-img">
                    <img src={item.picUrl} alt={item.username} />
                  </div>
                  <div>
                    <p>posted by @{item.username}</p>
                  </div>
                </div>
                <div>
                  <h3>{item.comment}</h3>
                </div>

                <br />
                <hr />
                <br />

                <div className="card-icon-container">
                  <div className="card-icon">
                    <Comment />
                  </div>

                  <div className="card-icon">
                    <Heart />
                  </div>

                  <div className="card-icon">
                    <Share />{" "}
                  </div>

                  {/* <div className="card-icon" onClick={handleBookmark}>
                    <Bookmark backgroundColor={bookmarkedData ? "black" : "inherit"} />
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PostDetails;
