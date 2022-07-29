import React from "react";
import { images } from "../../constant";
const Subheading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="" />
    </div>
  );
};

export default Subheading;
