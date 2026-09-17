import "particles.js/particles";
import { useEffect } from "react";
const Particles = () => {
  useEffect(() => {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", "particlesConfig.json", function () {
      console.log("hi");
    });
  }, []);
  return (
    <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]">
      <div
        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
        data-img-url="assets/img/about/4.jpg"
      />
      <div className="particle_wrapper">
        <div id="particles-js" />
      </div>
    </div>
  );
};
export default Particles;
