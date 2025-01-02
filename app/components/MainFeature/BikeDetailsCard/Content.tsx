// BikeContent.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface BikeContentProps {
  bikeName: string;
  description: string;
}

const BikeContent = ({ bikeName, description }: BikeContentProps) => (
  <div className="w-full lg:w-1/2">
    <div className="flex flex-col gap-2">
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#ECEEEC] truncate">
        {bikeName}
      </h2>
      <Button className="bg-[#56468B] text-[#ECEEEC] w-28 hover:bg-purple-700">
        Buy Now
      </Button>
      <p className="text-sm sm:text-base text-[#AFB5AD] line-clamp-3 sm:line-clamp-none">
        {description}
      </p>
    </div>
  </div>
);

export default BikeContent;
