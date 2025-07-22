import React from "react";

const RefundAndCancellationPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-[#0C0C0D] to-[#1A1A1D] text-zinc-200 min-h-screen flex items-center justify-center py-16 px-8">
      <div className="w-[80%] max-w-4xl mx-auto bg-[#121212] rounded-lg shadow-2xl p-8 text-base text-gray-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#FFD700] tracking-wide">
          Refund and Cancellation Policy
        </h2>
        <p className="mb-6 text-gray-300 leading-relaxed">
          When you make a payment to me, you agree to receive the product or service we discussed. Here’s how cancellations and refunds work:
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">1. Can I Cancel After Payment?</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>In most cases, no.</li>
          <li>
            Once payment is made, it cannot be cancelled, unless I clearly allow it on the payment page.
          </li>
          <li>If cancellation is allowed, it will follow the terms mentioned.</li>
          <li>I may ask you for more info before accepting a cancellation.</li>
        </ul>

        {/* Section 2 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">2. When Can I Get a Refund?</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>The service or product is not as described.</li>
          <li>You were charged twice by mistake.</li>
          <li>I couldn’t deliver the service due to my own issue.</li>
        </ul>
        <p className="mb-6 text-gray-300 leading-relaxed">
          <span className="text-[#FF4500] font-bold">❌ Refunds will not be given for:</span>
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Changing your mind.</li>
          <li>Being unhappy after the work was delivered as agreed.</li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">3. How to Request a Refund</h3>
        <p className="mb-6 text-gray-300 leading-relaxed">
          To request a refund:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Email me at 📧 <span className="text-[#1E90FF]">abhishek.nexgen.dev@gmail.com</span></li>
          <li>Include:</li>
          <ul className="list-disc list-inside pl-6">
            <li>Your name</li>
            <li>Payment date and amount</li>
            <li>Reason for the refund</li>
            <li>Any screenshot or proof (if needed)</li>
          </ul>
        </ul>
        <p className="mb-6 text-gray-300 leading-relaxed">
          🕒 You must request a refund within <strong>3 days</strong> of your payment.
        </p>

        {/* Section 4 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">4. What Happens Next?</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>I’ll review your request and may ask for more details.</li>
          <li>I’ll let you know if the refund is approved or not.</li>
          <li>
            The final decision is up to me, but I’ll always try to be fair and helpful.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RefundAndCancellationPolicy;