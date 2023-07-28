import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faHeart,
  faCirclePlay,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

Album.propTypes = {
  album: PropTypes.array.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <p className="album__name">
        <FontAwesomeIcon className="album__icon" icon={faMusic} />
        {album.name}
      </p>
      <div className="album__container">
        <img className="album__container__img" src={album.thumbnaiUrl} alt="" />
        <div className="album__container__icon">
          <FontAwesomeIcon className="album__icon__icon-sing" icon={faHeart} />
          <FontAwesomeIcon
            className="album__icon__icon-sing album__icon__icon-sing-active"
            icon={faCirclePlay}
          />
          <FontAwesomeIcon
            className="album__icon__icon-sing"
            icon={faEllipsisH}
          />
        </div>
      </div>
      <br />
      <div className="album__info">{album.info}</div>
    </div>
  );
}

export default Album;
