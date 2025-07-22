import React from "react";

const ShippingAndDeliveryPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-[#0C0C0D] to-[#1A1A1D] text-zinc-200 min-h-screen flex items-center justify-center py-16 px-8">
      <div className="w-[80%] max-w-4xl mx-auto bg-[#121212] rounded-lg shadow-2xl p-8 text-base text-gray-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#FFD700] tracking-wide">
          Shipping and Delivery Policy
        </h2>
        <p className="mb-6 text-gray-300 leading-relaxed">
          When you book our service, the expected delivery date will be mentioned clearly at the time of your order. If the service involves delivering something through a website or platform, please note that we will provide the delivery after a few days, depending on the nature of the service.
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          However, the delivery times we provide are only estimates and not guaranteed. This means that while we try our best to deliver your service as quickly as possible, we cannot promise that it will be completed within exactly 7 days, 14 days, or any specific timeframe.
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          Various factors like workload, technical issues, or other unforeseen circumstances can sometimes cause delays. If you do not receive your service or delivery within a reasonable time after the estimated delivery date, please feel free to contact us promptly at{" "}
          <span className="text-[#1E90FF]">abhishek.nexgen.dev@gmail.com</span>
        look into the matter and keep you updated.
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          Thank you for your understanding and patience.
        </p>
      </div>
    </section>
  );
};

export default ShippingAndDeliveryPolicy;