import React from "react";
// import PropTypes from "prop-types";
import StoryList from "./components/StoryList";
import "./style.scss";
import { DiYii, DiYeoman } from "react-icons/di";

StoryFeature.propTypes = {};

function StoryFeature(props) {
  const storyList = [
    {
      id: 1,
      name: "Cao Năng Lai",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/116/i-tried-asking-in-dogeza.jpg",
      author: "Maji Manji | Parabola",
    },
    {
      id: 2,
      name: "Biệt đội Shinobi",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/38/ender-geister.jpg",
      author: "Nagaoka Taichi",
    },
    {
      id: 3,
      name: "Sống Với Đại Tỷ",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/157/em-phai-chiu-trach-nhiem-voi-ta.jpg",
      author: "Himitsu",
    },
    {
      id: 4,
      name: "Mairimashita!",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/113/mairimashita-iruma-kun.jpg",
      author: "Chilt Asn",
    },
    {
      id: 5,
      name: "Majime Succubus",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/108/3-kiep-xui-xeo-kiep-nay-cung-ta-than-kin-3382.jpg",
      author: "Ohmori Aoi",
    },
    {
      id: 6,
      name: "Siêu phàm sát thần",
      thumbnailUrl:
        "https://st.nettruyenmax.com/data/comics/124/sieu-pham-sat-than.jpg",
      author: "Gondaira Hutyji",
    },
  ];
  return (
    <div className="story-feature__contain">
      <h3 className="story-feature__title">
        {" "}
        <DiYii className="story-feature__icon" />
        Recently Comics
      </h3>{" "}
      <br />
      <StoryList storyList={storyList} />
      <h3 className="story-feature__title">
        {" "}
        <DiYeoman className="story-feature__icon" />
        Boy Comics
      </h3>{" "}
      <br />
      <StoryList storyList={storyList} />
    </div>
  );
}

export default StoryFeature;
