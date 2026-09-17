import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud } from "./Popup";
import { projects } from "../../data";
import Project from "./Project";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Portfolio = () => {

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data?.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      {/* <Detail isOpen4={true} toggleModalFour={toggleModalFour} /> */}
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Projects
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul className="flex justify-around">
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`current font-poppins font-medium transition-all duration-300 ${
                      filterKey === "*" ? "text-black underline" : "text-[#333]"
                    } ${activeBtn("*")}`}
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${
                      filterKey === "inprogress"
                        ? "text-black underline"
                        : "text-[#333]"
                    } ${activeBtn("*")}`}
                    data-filter=".inprogress"
                    onClick={handleFilterKeyChange("inprogress")}
                  >
                    In-Progress
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${
                      filterKey === "ninetymin"
                        ? "text-black underline"
                        : "text-[#333]"
                    } ${activeBtn("*")}`}
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("ninetymin")}
                  >
                    90 Minute Projects
                  </a>
                </li>
                {/* <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Soundcloud
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Image
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Detail
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                {projects &&
                  projects.map((project, idx) => (
                    <Project
                      key={idx.toString()}
                      name={project.name}
                      description={project.description}
                      mainImage={project.mainImage}
                      summaries={project.summaries}
                      stack={project.stack}
                    />
                  ))}
                {/* <li className="inprogress mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center grayscale"
                        data-img-url="assets/img/projects/Brandon.png"
                        onClick={() => setIsOpen2(true)}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Contracted Site
                        </h3>
                        <span className="text-[14px]">
                          Website for a photographer to showcase their work as
                          well as sell videograpy and photography resources.
                          Currently waiting on products and descriptions from
                          client
                        </span>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="#"
                        onClick={() => setIsOpen2(true)}
                      />
                    </div>
                  </div>
                </li>
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center grayscale"
                        data-img-url="assets/img/projects/candyco-homepage.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Candy Co.
                        </h3>
                        <span className="text-[14px]">
                          Mock e-commerce website providing you with any and all
                          of your sweet tooth needs
                        </span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>

                <li className="ninetymin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-left-top grayscale"
                        data-img-url="assets/img/projects/fitness-homepage.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Fitness-TS
                        </h3>
                        <span className="text-[14px]">
                          Mock gym website empowering you to be the very best
                          version of yourself!
                        </span>
                      </div>
                      <a
                        className="cavani_tm_full_link soundcloude_link mfp-iframe audio"
                        href="#"
                        onClick={toggleModalThree}
                      />
                    </div>
                  </div>
                </li>
                <li className="image mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center grayscale"
                        data-img-url="assets/img/projects/flock-app.png"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Flock
                        </h3>
                        <span className="text-[14px]">
                          A progressive web app that aims to be the one stop
                          shop for runners looking for group run events.
                        </span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/4.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="detail mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alice Moon
                        </h3>
                        <span className="text-[14px]">Detail</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification. Building mockups strikes the ideal
                              balance ease of modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt=""
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt=""
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt=""
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
