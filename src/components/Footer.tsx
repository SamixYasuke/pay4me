import React from "react";
import { FaLinkedinIn, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-12 mt-32 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 border-b-[#E5E5E5] border-b-[1px] mb-8 pb-20 gap-10">
        <div className="">
          <img
            className="w-[240px] object-contain"
            src="/images/Pay4Me-App-Logo.png"
            alt="Pay4Me-App-Logo"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium leading-8">Company</h3>
            <ul className="text-[16px] font-normal leading-6  flex flex-col gap-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/faq">FaQ</a>
              </li>
              <li>
                <a href="/support-center">Support Center</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium leading-8">Legal</h3>
            <ul className="text-[16px] font-normal leading-6 flex flex-col gap-4">
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/order-cancellation">Order Cancellation Policy</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/kyc-aml">KYC & AML Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium leading-8">Resources</h3>
            <ul className="text-[16px] font-normal leading-6 flex flex-col gap-4">
              <li>
                <a href="/android-reviews">Android Reviews</a>
              </li>
              <li>
                <a href="/ios-reviews">IOS Reviews</a>
              </li>
              <li>
                <a href="/jobs">Jobs</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/pay4me-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://www.tiktok.com/@pay4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </div>
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://www.facebook.com/pay4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://www.instagram.com/pay4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram />
                </a>
              </div>
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://x.com/pay4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </div>
              <div className="bg-[#FFF4EA] rounded-2xl p-4 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@pay4meapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div>
              <p className="text-[16px] font-medium leading-6">Need help?</p>
              <p className="text-[16px] text-[#02D54A] font-normal leading-6">
                Support@pay4me.app
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[14px] text-[#484141] leading-6 font-normal py-2">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions.
        </p>
        <p className="text-[14px] text-[#484141] leading-6 font-normal py-2">
          All trademarks, logos, and brand names are the property of their
          respective owners. All company, product, and service names used on
          this website are for identification purposes only. Use of these names,
          trademarks and brands do not imply endorsement.
        </p>
        <p className="text-[14px] text-[#02D54A] leading-6 font-normal py-2">
          ©2020 - {new Date().getFullYear()} Pay4Me.Inc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
