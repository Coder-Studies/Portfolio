import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Deepam Makwana",
    username: "@makwanadeepam",
    text: "Really impressed by reactbits.dev. Check it out.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "CY",
    username: "@yyyyyy4ever",
    text: "This UI components library is mind-blowing!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Maurício Pradella",
    username: "@pradella",
    text: "Just fell in love with React Bits.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Fernando",
    username: "@Fernando_Her85",
    text: "Para los que trabajan en React, tírenle un ojo a este recurso!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#0C0C0D] text-zinc-200 py-20 px-10 max-[640px]:px-4 text-center">
      <h2 className="text-4xl font-[bold] shiny-text">
        Here's what others are saying
      </h2>
      <p className="text-zinc-400 mt-2 shiny-text">
        They think React Bits is cool, maybe you will too!
      </p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl w-72 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-lg font-[semibold]">{t.name}</h3>
                <p className="text-sm text-zinc-400">{t.username}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-300">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
