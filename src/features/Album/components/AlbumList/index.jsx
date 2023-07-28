import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div className="album-content">
      <ul className="album-list">
        {albumList.map((album) => (
          <li className="album-item" key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
