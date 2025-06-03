import React, { useState } from "react";
import FaQItem from "./FaQItem";

const FaqQuestions = [
  {
    question: "What is the Pay4Me App?",
    answer:
      "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad.",
  },
  {
    question: "How does the Pay4Me App work?",
    answer:
      "The Pay4Me App works by connecting users with various payment services that facilitate cross-border transactions. Users can select the service they need, enter the required details, and complete their payments securely.",
  },
  {
    question: "What is the payment processing timeline on the Pay4Me App?",
    answer:
      "The payment processing timeline on the Pay4Me App varies depending on the service used and the destination of the payment. Most transactions are processed quickly, but some may take longer due to regulatory checks or banking processes.",
  },
  {
    question: "How do I get started using the Pay4Me App",
    answer:
      "To get started with the Pay4Me App, download the app from your device's app store, create an account, and follow the prompts to set up your payment methods. Once set up, you can start making payments.",
  },
];

const FaQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="my-11 mx-3">
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-[32px] lg:text-[40px] leading-12 lg:leading-14 font-normal text-center">
          Frequently asked questions
        </h2>
      </div>
      <div className="md:px-20 lg:px-52">
        {FaqQuestions.map((item, index) => (
          <FaQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaQ;
