import React from "react";

const PublicContactDetails = () => {
  return (
    <section className="bg-[#0C0C0D] text-zinc-200 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#FFD700]">
        Public Contact Details
      </h2>
      <div className="max-w-4xl mx-auto text-sm">
        <p className="mb-4">You can reach us at:</p>
        <ul className="list-none mb-4">
          <li>
            <strong>Email:</strong>{" "}
            <span className="text-[#1E90FF]">contact@example.com</span>
          </li>
          <li>
            <strong>Phone:</strong> +91-9876543210
          </li>
          <li>
            <strong>Address:</strong> 123, Business Street, City, State, India
          </li>
        </ul>
        <p className="mb-4">
          Feel free to contact us for any queries or support.
        </p>
      </div>
    </section>
  );
};

export default PublicContactDetails;