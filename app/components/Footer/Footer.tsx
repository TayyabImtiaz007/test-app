// components/Footer/Footer.tsx
import FooterNavbar from "./Footernavbar";
import TermsAndPrivacy from "./TermsAndPrivacy";

const Footer = () => {
  return (
    <footer className="bg-inherit p-8">
      <div className="container mx-auto px-4">
        <FooterNavbar />
        <div className="border-t border-gray-700 my-4"></div>
        <TermsAndPrivacy />
      </div>
    </footer>
  );
};

export default Footer;
