import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center pt-4">
      <div className="text-[9.5vw] leading-[8vw] uppercase flex justify-center">L'étincelle</div>
      <div className="text-[9.5vw] leading-[8vw] uppercase flex justify-center">qui<div className="h-[7vw] w-[16vw]  rounded-full overflow-hidden "><Video /></div>génère</div>
      <div className="text-[9.5vw] leading-[8vw] uppercase flex justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
