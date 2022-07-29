import React from "react";
import { Subheading } from "../../components/";
import { images } from "../../constant";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <Subheading title="Chase the new flavour"></Subheading>
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__text" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
      <div className="app__header-hashtag">
        <span>#Gericht</span>
        <span>#Bar</span>
      </div>
      <div className="app__header-slider">
        <img src={images.slider} alt="" />
      </div>
    </div>
  );
};

export default Header;
