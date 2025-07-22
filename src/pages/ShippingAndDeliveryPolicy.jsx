import React from "react";

const ShippingAndDeliveryPolicy = () => {
  return (
    <section className="bg-[#0C0C0D] text-zinc-200 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#FFD700]">
        Shipping and Delivery Policy
      </h2>
      <div className="max-w-4xl mx-auto text-sm">
        <p className="mb-4">
          We ensure timely delivery of services and products. Please review our
          shipping and delivery policy:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Delivery timelines depend on the service or product.</li>
          <li>Tracking details will be shared upon dispatch.</li>
          <li>Contact support for delays or issues.</li>
          <li>Shipping charges may apply based on location.</li>
        </ul>
        <p className="mb-4">
          For more details, email us at{" "}
          <span className="text-[#1E90FF]">shipping@example.com</span>.
        </p>
      </div>
    </section>
  );
};

export default ShippingAndDeliveryPolicy;