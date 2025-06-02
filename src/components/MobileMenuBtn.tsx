import { HiMenuAlt3 } from "react-icons/hi";

const MobileMenuBtn: React.FC = () => {
  return (
    <div className="flex lg:hidden items-center shadow-gray-200 shadow-lg rounded-xl bg-white p-2.5 cursor-pointer">
      <div className="bg-black text-white rounded-xl p-2 md:p-3 lg:p-4">
        <HiMenuAlt3 size={27} />
      </div>
    </div>
  );
};

export default MobileMenuBtn;
