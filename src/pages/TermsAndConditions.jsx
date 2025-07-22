import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-[#0C0C0D] text-zinc-200 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#FFD700]">
        Terms and Conditions
      </h2>
      <div className="max-w-4xl mx-auto text-sm">
        <p className="mb-4">
          By accessing or using our services, you agree to comply with the
          following terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Usage of our services is subject to applicable laws.</li>
          <li>Unauthorized use of our website may result in legal action.</li>
          <li>We reserve the right to modify these terms at any time.</li>
          <li>All intellectual property belongs to us unless stated otherwise.</li>
        </ul>
        <p className="mb-4">
          For more details, contact us at{" "}
          <span className="text-[#1E90FF]">support@example.com</span>.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;