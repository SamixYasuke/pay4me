import { HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const MobileMenuBtn: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="flex lg:hidden items-center shadow-gray-200 shadow-lg rounded-xl bg-white p-2.5 cursor-pointer"
      >
        <div className="bg-black text-white rounded-xl p-2 md:p-3 lg:p-4">
          <HiMenuAlt3 size={27} />
        </div>
      </div>
      <MobileMenu toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
    </>
  );
};

export default MobileMenuBtn;
