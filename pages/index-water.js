import { CavaniContext } from "@/src/Context";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
// import News from "@/src/components/News";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";

const Portfolio = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
});
const AuthorWater = dynamic(() => import("@/src/components/author/Water"), {
  ssr: false,
});
const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const IndexWater = () => {
  const { animationChnage } = useContext(CavaniContext);
  useEffect(() => {
    animationChnage("bounceIn");
  }, []);
  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <AuthorWater />
        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%]">
          {/* HOME */}
          <Home />
          {/* HOME */}
          {/* ABOUT */}
          <About />
          {/* ABOUT */}
          {/* PORTFOLIO */}
          <Portfolio />
          {/* /PORTFOLIO */}
          {/* SERVICE */}
          <Service />
          {/* SERVICE */}
          {/* NEWS */}
          <News />
          {/* NEWS */}
          {/* CONTACT */}
          <Contact />
          {/* CONTACT */}
        </div>
      </div>
    </Layout>
  );
};
export default IndexWater;
