import Cursor from "@/src/layout/Cursor";
import Preloader from "@/src/layout/Preloader";
import Link from "next/link";
import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      {/* PRELOADER */}
      <Preloader />
      {/* /PRELOADER */}
      {/* WRAPPER ALL */}
      <div
        className="cavani_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInUp"
        data-exit
      >
        <div className="cavani_tm_intro">
          <div className="main_title">
            <img src="assets/img/logo/dark.png" alt />
            <p>CV / Resume / Personal / Portfolio Tailwind CSS Template</p>
          </div>
          <div className="demo_list">
            <ul>
              <li>
                <div className="list_inner">
                  <img src="assets/img/intro/chrisBW.jpg" alt />
                  <h3>Static Demo</h3>
                  <Link legacyBehavior href="/">
                    <a className="cavani_tm_full_link" target="_blank" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/intro/2.jpg" alt />
                  <h3>Glitch Demo</h3>
                  <Link legacyBehavior href="/index-glitch">
                    <a className="cavani_tm_full_link" target="_blank" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/intro/4.jpg" alt />
                  <h3>Particle Demo</h3>
                  <Link legacyBehavior href="/index-particle">
                    <a className="cavani_tm_full_link" target="_blank" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img src="assets/img/intro/3.jpg" alt />
                  <h3>Water Demo</h3>
                  <Link legacyBehavior href="/index-water">
                    <a className="cavani_tm_full_link" target="_blank" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* MAGIC CURSOR */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /MAGIC CURSOR */}
        <div className="intro_copyright">
          <p>Copyright © 2023 by Marketify</p>
        </div>
      </div>
      <Cursor />
    </Fragment>
  );
};
export default Intro;
