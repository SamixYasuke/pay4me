import React from "react";

const Partnerships: React.FC = () => {
  return (
    <section className="my-20 md:my-36">
      <div className="flex justify-center items-center">
        <h2 className="text-[32px] md:text-[40px] leading-14 font-normal text-center">
          In partnership with
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-10 md:px-20 lg:px-36 mt-14">
          <img
            src="/images/mpower.png"
            alt="Mpower logo, a partner financial services company, displayed alongside other partner logos in a row on a clean white background"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/prodigyfinance.png"
            alt="Prodigy Finance logo, representing an international student loan provider, shown with other partner logos in a collaborative setting"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/techstars-2.png"
            alt="Techstars logo, indicating a global startup accelerator, presented among other financial and technology partner logos"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/stripe.png"
            alt="Stripe logo, a payment processing platform, featured with other financial technology partner logos in a neutral environment"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/paystack.png"
            alt="Paystack logo, a digital payments company, displayed with other partner logos in a professional and collaborative context"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/providusbank.png"
            alt="Providus Bank logo, a banking partner, shown with other financial institution logos in a supportive partnership display"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/monnify.png"
            alt="Monnify logo, a payment solutions provider, presented with other partner logos in a unified and business-focused environment"
            className="w-[160px] object-contain pointer-events-none"
          />
          <img
            src="/images/across.png"
            alt="Across logo, representing a partner organization, displayed with other company logos in a collaborative and inclusive setting"
            className="w-[160px] object-contain pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
