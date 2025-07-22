import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-gradient-to-b from-[#0C0C0D] to-[#1A1A1D] text-zinc-200 min-h-screen flex items-center justify-center py-16 px-8">
      <div className="w-[80%] max-w-4xl mx-auto bg-[#121212] rounded-lg shadow-2xl p-8 text-base text-gray-300">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-[#FFD700] tracking-wide">
          Terms & Conditions
        </h2>
        <p className="text-center text-gray-400 mb-6 text-lg">
          <strong>Effective From:</strong>  25 July 2025
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          Hi there! By using this website or any payment page I provide, you agree to these terms. These terms apply when you hire me, make a payment, or use any of my services.
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">1. What This Is For</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Showing the freelance services I offer (like design, writing, coding, etc.)</li>
          <li>Sharing details about my personal projects</li>
          <li>Collecting payments from different websites and clients for my freelance work</li>
        </ul>

        {/* Section 2 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">2. Who Can Use It</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>You’re 18 or older</li>
          <li>You’re paying for work I’ve done or will do</li>
          <li>You’re using a legal and safe payment method (like UPI, card, bank transfer, etc.)</li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">3. What You’re Paying For</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>You are paying for services we’ve agreed on (like a logo, website, article, etc.)</li>
          <li>You must pay the full amount unless we discuss a different arrangement</li>
          <li>All prices and payments are clearly mentioned before you pay</li>
        </ul>

        {/* Section 4 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">4. Your Info & Privacy</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Deliver your project</li>
          <li>Contact you if needed</li>
          <li>Process payments safely</li>
        </ul>
        <p className="mb-6 text-gray-300 leading-relaxed">
          I do not share your info unless required by law or for fraud checks.
        </p>

        {/* Section 5 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">5. Refund Policy</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Refunds may be given only if:</li>
          <ul className="list-disc list-inside pl-6">
            <li>You accidentally paid twice</li>
            <li>I was unable to deliver the service</li>
          </ul>
          <li>No refund if:</li>
          <ul className="list-disc list-inside pl-6">
            <li>You change your mind after work has started</li>
            <li>The project is complete and you already accepted it</li>
          </ul>
        </ul>
        <p className="mb-6 text-gray-300 leading-relaxed">
          If you think a refund is needed, message me first and I’ll do my best to help.
        </p>

        {/* Section 6 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">6. Don’ts (What You Shouldn’t Do)</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Use fake names or payment info</li>
          <li>Try to hack, copy, or break my website</li>
          <li>Spam or send abusive messages</li>
          <li>Misuse the platform for any illegal or dishonest reason</li>
        </ul>

        {/* Section 7 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">7. I’m Not Responsible For...</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Tech problems on your side (slow internet, browser issues, etc.)</li>
          <li>Mistakes you make while paying</li>
          <li>Third-party service errors (like Instamojo, Razorpay, etc.)</li>
          <li>Loss caused by a hacked card or stolen info (please use safe devices!)</li>
        </ul>

        {/* Section 8 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">8. Feedback & Reviews</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Don’t post fake or offensive reviews</li>
          <li>Don’t lie or spread false information</li>
          <li>Don’t post reviews just to hurt or promote someone</li>
        </ul>
        <p className="mb-6 text-gray-300 leading-relaxed">
          I may share your review on my portfolio or social media (unless you ask me not to).
        </p>

        {/* Section 9 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">9. Legal Stuff</h3>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>These terms follow Indian laws.</li>
          <li>If we have a problem:</li>
          <ul className="list-disc list-inside pl-6">
            <li>We’ll first try to solve it by talking</li>
            <li>If needed, we’ll go for arbitration in Bengaluru, India</li>
            <li>The final decision will be made by an arbitrator (a neutral third party)</li>
            <li>You agree not to take legal action before trying this method</li>
          </ul>
        </ul>

        {/* Section 10 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">10. Questions or Help</h3>
        <p className="mb-6 text-gray-300 leading-relaxed">
          If you need help with anything (like payment issues, refunds, or project questions), please contact me:
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          📧 <span className="text-[#1E90FF]">abhishek.nexgen.dev@gmail.com</span>
        </p>
        <p className="mb-6 text-gray-300 leading-relaxed">
          🌐 <span className="text-[#1E90FF]">https://abhishekmern.netlify.app/</span>
        </p>

        {/* Section 11 */}
        <h3 className="text-2xl font-semibold text-[#32CD32] mb-4">11. Final Note</h3>
        <p className="mb-6 text-gray-300 leading-relaxed">
          When you make a payment or use my services:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>You’re agreeing to these terms</li>
          <li>You’re entering a simple, honest agreement with me</li>
          <li>These terms apply across all the websites and platforms I use to offer my freelance work or personal projects</li>
        </ul>
      </div>
    </section>
  );
};

export default TermsAndConditions;