import React from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";

interface IFaQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaQItem: React.FC<IFaQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`rounded-2xl p-8 transition-colors duration-300 ${
        isOpen ? "bg-[#F5FDF8] border-b-2 border-[#02D54A]" : "bg-white"
      } cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <h4 className="text-lg leading-6 font-normal">{question}</h4>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <PiStarFourFill size={20} />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

export default FaQItem;
