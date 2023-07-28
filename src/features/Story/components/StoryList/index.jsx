import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Story from "../Story";

StoryList.propTypes = {
  storylist: PropTypes.array.isRequired,
};

function StoryList({ storyList }) {
  return (
    <div>
      <ul className="contain">
        {storyList.map((story) => (
          <li className="contain__item" key={story.id}>
            <Story story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;
