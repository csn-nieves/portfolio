import React, { useState } from "react";
import { Detail } from "./Popup";

const Project = ({
  name,
  description,
  mainImage,
  summaries,
  stack,
  img1,
  img2,
  img3,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => {
    setModalOpen(!modalOpen);
  };
  console.log("🚀summaries🚀", summaries);

  return (
    <li
      className="image mb-[50px] w-1/2 float-left pl-[50px] item__"
      onClick={toggle}
    >
      <Detail
        isOpen={modalOpen}
        toggleModal={setModalOpen}
        name={name}
        summaries={summaries}
        mainImage={mainImage}
        stack={stack}
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
        <div className="image relative">
          <img
            className="relative opacity-0 min-w-full"
            src="assets/img/thumbs/1-1.jpg"
            alt
          />
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center grayscale"
            data-img-url={mainImage}
          />
          <div className="details">
            <h3 className="text-[16px] mb-[2px] font-semibold">{name}</h3>
            <span className="text-[14px]">{description}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
