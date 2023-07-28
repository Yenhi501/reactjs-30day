import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { BiBadgeCheck } from "react-icons/bi";

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

function Story({ story }) {
  return (
    <div className="story-contain">
      <img className="story-contain__img" src={story.thumbnailUrl} alt=" " />
      <div className="story-contain__info">
        <h5 className="story-contain__info__name">{story.name}</h5>
        <p className="story-contain__info__dash"></p>
        <p className="story-contain__info__author">
          <BiBadgeCheck className="story-contain__info__icon" />
          {story.author}
        </p>
      </div>
    </div>
  );
}

export default Story;
