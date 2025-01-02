import React from "react";
import { Button } from "@/components/ui/button";

const StillHaveQuestions: React.FC = () => {
  return (
    <div className="text-center pt-16">
      <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-2 pb-4 text-[#ECEEEC]">
        Still have questions?
      </h3>
      <p className="text-[16px] sm:text-[18px] font-medium text-[#AFB5AD] pb-8">
        Support details to capture customers that might be on the fence.
      </p>
      <Button
        className="relative border-2 border-transparent text-[#ECEEEC] bg-transparent rounded-xl px-14 py-2 
                   hover:text-[#ECEEEC] after:content-[''] after:absolute after:inset-0 
                   after:rounded-xl after:border-2 after:border-transparent after:opacity-0 
                   hover:after:opacity-70 hover:after:animate-glow animate-gradient"
      >
        Contact
      </Button>
    </div>
  );
};

export default StillHaveQuestions;
