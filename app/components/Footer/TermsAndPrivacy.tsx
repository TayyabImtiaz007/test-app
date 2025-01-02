import Link from "next/link";

const TermsAndPrivacy = () => {
  return (
    <div className="flex justify-center space-x-6 py-4 text-[#AFB5AD] text-sm font-normal">
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-of-service">Terms of Service</Link>
      <Link href="/cookies-settings">Cookies Settings</Link>
    </div>
  );
};

export default TermsAndPrivacy;
