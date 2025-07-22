import React from "react";

const Services = () => {
  const services = [
    {
      title: "🚀 Full-Stack MERN Web Development",
      description:
        "Build powerful, fast, and scalable web applications tailored to your business needs. From sleek frontends to robust backends, I deliver end-to-end solutions with the latest technologies.",
      benefits: [
        "Customized to your brand and goals",
        "Responsive on all devices (mobile, tablet, desktop)",
        "Optimized for speed and SEO",
        "Scalable architecture for future growth",
        "24/7 support and maintenance",
        "Integration with third-party APIs",
        "Advanced security measures to protect your data",
      ],
      price: "Starting from ₹79,999 (Depends on your project)",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp10167050.jpg&f=1&nofb=1&ipt=6751570a960221d6015d503acee6813a1a5aa69ebf266980c0919197deb6778e", // Replace with actual image path
      buttonText: "Book Our Services",
    },
    {
      title: "🔗 API Integration & Backend Solutions",
      description:
        "Connect your app with third-party services or build custom APIs to streamline your business operations. Secure, reliable, and easy to maintain backend infrastructure.",
      benefits: [
        "Secure data handling & storage",
        "Real-time features and smooth app performance",
        "Flexible integration with payment gateways, analytics, and more",
        "Custom API development tailored to your needs",
        "High availability and fault tolerance",
        "Scalable backend architecture for future growth",
        "Detailed documentation for easy maintenance",
      ],
      price: "Starting from ₹59,999 (Depends on your project)",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimages%2Ft_main1%2Cq_auto%2Cf_auto%2Cq_auto%2Cf_auto%2Fgigs%2F295923129%2Foriginal%2Fbebb760718cf5bb01f77d6da2788585f98f3b8b3%2Fdevelop-api-and-backend-services-using-express-or-nestjs.png&f=1&nofb=1&ipt=ebf490b54cafc28f8e270157c806b4921ef58298058d5510295b3d22c483b49a", // Replace with actual image path
      buttonText: "Book Our Services",
    },
    {
      title: "🎨 Modern UI/UX Design & Frontend Development",
      description:
        "Engage your users with intuitive and attractive interfaces built using React.js. Clean design + smooth interactions = happy customers.",
      benefits: [
        "User-friendly layouts that convert visitors to customers",
        "Mobile-first design approach",
        "Accessible & cross-browser compatible",
        "Interactive animations and transitions",
        "Custom branding and design elements",
        "Optimized for performance and speed",
        "SEO-friendly design for better visibility",
      ],
      price: "Starting from ₹49,999 (Depends on your project)",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgraphicsfamily.com%2Fwp-content%2Fuploads%2Fedd%2F2021%2F07%2FFree-Fashion-Website-UI-Design-Template.jpg&f=1&nofb=1&ipt=ad457276f0a3ef525996e5187a666a1f6c831aa8c740b1ae1510ba964d880214", // Replace with actual image path
      buttonText: "Book Our Services",
    },
  ];

  return (
    <section className="bg-[#0C0C0D] text-zinc-200 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[28vh] object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#32CD32]">
              {service.title}
            </h3>
            <p className="text-sm mb-4">{service.description}</p>
            <ul className="list-disc list-inside mb-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="text-sm">
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold text-[#FFD700] mb-4 mr-2">
              Price:- {service.price}
            </p>
            <button className="bg-[#1E90FF] text-white py-2 px-4 rounded hover:bg-[#1C86EE] transition-colors">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;