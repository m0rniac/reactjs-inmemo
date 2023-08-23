import React from "react";
import Script from "next/script";

import "../public/css/bootstrap.css";

import Data from "./data.json";

import Navegation from "./Navegation";
import Footer from "./Footer";

export const metadata = {
  title: "Home | In-Memory",
  description: "Welcome back to In-Memory!",
  keywords: ["memorycards", "memory-cards", "memory cards", "Memory Cards"],
  authors: [{ name: "memorycards" }],
  creator: "m0rniac",
  publisher: "memorycards",
  icons: {
    icon: Data.logo,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navegation />
        {children}
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
