import { useState } from "react";
import ArrowUp from "../assets/icons/arrow-up";
import ArrowDown from "../assets/icons/arrowDown";
import Comment from "../assets/icons/comment";
import Share from "../assets/icons/share";
import Bookmark from "../assets/icons/bookmark";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { postId, username, name, picUrl, post, postDescription, upvotes, downvotes, tags, isBookmarked, comments } =
    props;
  const [upvote, setUpvote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [bookmarkedData, setBookmarkedData] = useState(isBookmarked);
  const [votesCount, setVotesCount] = useState(upvotes - downvotes);

  const handleUpVote = () => {
    setUpvote((p) => !p);
    if (downVote) {
      setDownVote(false);
    }
    // increase the count
    setVotesCount((p) => ++p);
  };

  const handleDownVote = () => {
    setDownVote((p) => !p);
    if (upvote) {
      setUpvote(false);
    }
    // decrease the count
    setVotesCount((p) => --p);
  };

  const handleBookmark = () => {
    setBookmarkedData((p) => !p);
  };

  return (
    <div className="card">
      <div className="vote-container">
        <div className="card-icon" onClick={handleUpVote}>
          <ArrowUp color={upvote ? "blue" : "black"} />
        </div>

        <p>{votesCount}</p>
        <div className="card-icon" onClick={handleDownVote}>
          <ArrowDown color={downVote ? "blue" : "black"} />
        </div>
      </div>
      <div className="content-container">
        <div className="card-title">
          <div className="card-img">
            <img src={picUrl} alt={name} />
          </div>
          <div>
            <p>posted by @{username}</p>
          </div>
        </div>
        <div>
          <h3>{post}</h3>
        </div>
        <div className="card-tags">
          {tags.map((item) => (
            <span className="card-tag" key={item}>
              {item}
            </span>
          ))}
          <span></span>
        </div>
        <div>
          <p>{postDescription}</p>
        </div>
        <br />
        <hr />
        <div className="card-icon-container">
          <div className="card-icon">
            <NavLink to={`/posts/${postId}`} state={props}>
              <Comment />
            </NavLink>
          </div>

          <div className="card-icon">
            <Share />
          </div>

          <div className="card-icon" onClick={handleBookmark}>
            <Bookmark backgroundColor={bookmarkedData ? "black" : "inherit"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
