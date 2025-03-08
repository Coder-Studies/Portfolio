import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server:{
    proxy: {
      '/api': 'http://localhost:4000'

    }


  },



  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shine: "shine 3s linear infinite",
      },

 
    },
  },

 

});
