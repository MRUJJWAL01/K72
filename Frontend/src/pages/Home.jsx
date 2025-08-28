import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen pb-5">
      <div className="w-full  fixed">
        <Video />
      </div>

     
      <div className=" h-full overflow-hidden  relative flex flex-col justify-between text-center">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
