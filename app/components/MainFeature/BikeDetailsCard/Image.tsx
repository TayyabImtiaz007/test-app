import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BikeImageProps {
  imageUrl: StaticImport;
  bikeName: string;
}

const BikeImage = ({ imageUrl, bikeName }: BikeImageProps) => (
  <div className="w-full lg:w-1/2">
    <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
      <Image
        src={imageUrl}
        alt={bikeName}
        fill
        priority
        className="object-contain object-left"
        sizes="100vw"
      />
    </div>
  </div>
);

export default BikeImage;
