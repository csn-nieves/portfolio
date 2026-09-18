import { Fragment, useEffect } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import { projects } from "../../data";
import Project from "./Project";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
  }, []);

  return (
    <Fragment>
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Projects
              </span>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left mt-[55px]">
              <ul className="gallery_zoom ml-[-50px]">
                {projects.map((project) => (
                  <Project key={project.name} {...project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};

export default Portfolio;
