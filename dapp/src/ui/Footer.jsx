import instagramLogo from "../assets/instagramLogo.svg";
import linkedinLogo from "../assets/linkedinLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import twitterLogo from "../assets/twitterLogo.svg";

function Footer() {
  return (
    <footer className="bg-black text-white pt-[73px] px-[100px] pb-[230px] grid grid-cols-[534px_1fr] gap-x-[108px]">
      <div>
        <h3 className="text-2xl text-white font-bold mb-5">AnonymizeHub</h3>
        <p className="text-base leading-10 font-normal">
          Comes with a very great service, friendly and of course comfortable at
          a very affordable price by all groups, both bottom and top
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold mb-4">Office</h3>
          <h4 className="text-base">Starknet</h4>
          <h4 className="text-lg font-bold mb-4 mt-[56px]">Follow us</h4>
          <div className="flex gap-x-6">
            <img src={instagramLogo} alt="" />
            <img src={linkedinLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={twitterLogo} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">About us</h3>
          <h4 className="text-base mb-3">Contact us</h4>
          <h4 className="text-base">Testimonial</h4>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Info</h3>
          <h4 className="text-base mb-3">FAQ</h4>
          <h4 className="text-base mb-3">Cookie & help</h4>
          <h4 className="text-base mb-3">Privacy Policy</h4>
          <h4 className="text-base">Terms & Conditions</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
