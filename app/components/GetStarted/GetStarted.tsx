import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import getstartedImg from "../../public/getstartedImg.png"; // Adjust the path according to your project structure

const GetStarted: React.FC = () => {
  return (
    <div className="relative w-full h-[320px]">
      <Image
        src={getstartedImg}
        alt="Get Started Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="pt-20 pb-20 absolute inset-0 flex flex-col items-center justify-center z-10 mt-8 ">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#ECEEEC] text-center pb-2 mb-4 max-w-[90%] sm:max-w-[85%] lg:max-w-[60%]">
          Explore our collection and find the perfect{" "}
          <br className="hidden lg:block" />
          bike for you.
        </h2>
        <Button
          className="relative bg-[#56468B] text-[#ECEEEC] rounded-md px-8 py-2 
             hover:bg-purple-700 after:content-[''] after:absolute after:inset-0 
             after:rounded-md after:border-2 after:border-transparent after:opacity-0 
             hover:after:opacity-70 hover:after:animate-glow animate-gradient transition-all duration-300"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
