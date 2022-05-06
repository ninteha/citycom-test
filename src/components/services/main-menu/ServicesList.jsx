import React from "react";
import "../Services.css";
import StarIcon from "@mui/icons-material/Star";

const ServicesList = ({ img, title, category, desc , subcategory }) => {
  return (
    <div className="list-wrapper">
      <div className="services-img">
        <div className="w-[32px] h-[32px]">
          <img src={img} alt="img"></img>
        </div>
      </div>
      <div className="flex mt-[10px]">
        <div className="mr-[12px]  text-[16px]">
          <b>{title}</b>
        </div>
        <span className="inner-span">
          <p>{category}</p>
          <p className="hidden">{subcategory}</p>
        </span>
        <span className="rating">
          <span className="mr-[7px]">
            <StarIcon />
          </span>
          <p className="mr-[7px]">4.5</p>
          <p className="mr-[7px]">(134)</p>
        </span>
      </div>
      <div className="mt-[12px]">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServicesList;
