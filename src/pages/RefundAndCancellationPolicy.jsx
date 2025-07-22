import React from "react";

const RefundAndCancellationPolicy = () => {
  return (
    <section className="bg-[#0C0C0D] text-zinc-200 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#FFD700]">
        Refund and Cancellation Policy
      </h2>
      <div className="max-w-4xl mx-auto text-sm">
        <p className="mb-4">
          We strive to provide the best services. However, if you are not
          satisfied, please review our refund and cancellation policy:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Refunds are processed within 7-10 business days.</li>
          <li>Cancellations must be requested within 24 hours of booking.</li>
          <li>Refunds are not applicable for completed services.</li>
          <li>Contact support for refund or cancellation requests.</li>
        </ul>
        <p className="mb-4">
          For more details, email us at{" "}
          <span className="text-[#1E90FF]">refunds@example.com</span>.
        </p>
      </div>
    </section>
  );
};

export default RefundAndCancellationPolicy;