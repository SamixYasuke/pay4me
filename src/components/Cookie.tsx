import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";

interface CookieProps {
  children?: React.ReactNode;
}

const Cookie: React.FC<CookieProps> = ({ children }) => {
  const [showCookie, setShowCookie] = useState<boolean>(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowCookie(true);
    }
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowCookie(false);
  };

  const handleDeclineCookie = () => {
    localStorage.setItem("cookieAccepted", "false");
    setShowCookie(false);
  };

  return (
    <>
      {showCookie && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-5xl justify-self-center mx-4 grid md:grid-cols-10 bg-[#171717] text-white fixed bottom-10 left-0 right-0 p-4 justify-items-center py-4 px-8 rounded-2xl z-50"
        >
          <div className="md:col-span-7 text-center">
            <h3 className="text-2xl leading-12 font-medium">
              Cookie Notification
            </h3>
            <p className="text-[16px] font-medium leading-6">
              This website uses cookies to optimize your experience and to
              provide us insight on how to interact with the site. All
              information shared with us through cookies are secure and covered
              by our data privacy obligations. You can access our Privacy Policy{" "}
              <span>
                <a className="underline" href="/privacy-policy">
                  here
                </a>
              </span>
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center gap-2.5 mt-4 md:mt-0">
            <button
              onClick={handleDeclineCookie}
              className="py-3 px-8 cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAcceptCookie}
              className="bg-white text-[#171717] py-3 px-8 rounded-4xl cursor-pointer hover:bg-gray-200 transition-colors duration-300"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
      {children}
    </>
  );
};

export default Cookie;
