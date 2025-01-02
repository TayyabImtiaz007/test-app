"use client";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar (less than 575px) */}
      <div className="sm:hidden flex pb-4 pt-5 pl-8 pr-8 justify-between items-center p-6 bg-[#14121F] text-white">
        <div className="text-[#AFB5AD] font-inter font-medium">Bike Bliss</div>
        <Button className="bg-[#56468B] pl-7 pr-7 text-[#F9F9F8] transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-[0_5px_15px_rgba(145,92,182,0.4)]">
          Get Started
        </Button>
      </div>

      {/* Desktop Navbar (575px and above) */}
      <div className="hidden sm:flex pb-4 pt-5 pl-8 pr-8 justify-between items-center p-6 bg-[#14121F] text-white">
        <div className="text-[#AFB5AD] font-inter font-medium">Bike Bliss</div>
        <div className="flex gap-9">
          <a
            href="#features"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300 hover:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.3)] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300 hover:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.3)] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Testimonials
          </a>
          <a
            href="#faqs"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300 hover:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.3)] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            FAQs
          </a>
        </div>
        <Button className="bg-[#56468B] pl-7 pr-7 text-[#F9F9F8] transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-[0_5px_15px_rgba(145,92,182,0.4)]">
          Contact
        </Button>
      </div>
      <div className="p-0 border-b-[0.05px] border-gray-800"></div>
    </>
  );
};

export default Navbar;
