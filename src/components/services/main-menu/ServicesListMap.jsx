import React from "react";
import ServicesList from "./ServicesList";
import data from "../data/DefList.js";

const ServicesListMap = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ServicesList
            key={index}
            img={item.img}
            title={item.title}
            category={item.category}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default ServicesListMap;
