import React from "react";

const BannerTitle = ({ mainText, smallText }) => {
  return (
    <div className="my-20 text-center">
      <p className="text-[#D99904] uppercase">---{smallText}---</p>
      <hr className="w-1/3 my-5 mx-auto" />
      <h1 className="text-4xl uppercase">{mainText}</h1>
      <hr className="w-1/3 my-5 mx-auto" />
    </div>
  );
};

export default BannerTitle;
