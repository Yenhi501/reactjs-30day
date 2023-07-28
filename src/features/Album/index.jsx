import React from "react";
// import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";
import "./style.scss";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumlist = [
    {
      id: 1,
      name: "Nhạc này chill phết",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/c/c/4ccc7780abb5e8e2de84218f721b7ad3.jpg",
      info: "Không ồn ã, không vội vàng",
    },
    {
      id: 2,
      name: "Giai điệu chữa lành",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg",
      info: "Âm nhạc năng lượng dành cho ngày cuối tuần",
    },
    {
      id: 3,
      name: "Lắc lư cho hết buồn",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/2/f/5/62f5e67ff15e3aabd23ea4330927b7ae.jpg",
      info: "Ở đây có những bản hit cực chill",
    },
    {
      id: 4,
      name: "Vui vẻ cuối tuần",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/c/3/f2c342c689f75ebe23bfff34745338b8.jpg",
      info: "Khi bạn cần giai điệu để xoa dịu những tổn thương",
    },
    {
      id: 5,
      name: "Cuối tuần ngọt ngào",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/f/e/32fe988cfd3e6d90b0306017726ee345.jpg",
      info: "Cuối tuần ngọt ngào với những giai điệu",
    },
  ];
  return (
    <div className="album-song">
      <h3 className="album-song__title"> Cuối tuần lên nhạc </h3>
      <AlbumList albumList={albumlist} />
      <AlbumList albumList={albumlist} />
    </div>
  );
}

export default AlbumFeature;
