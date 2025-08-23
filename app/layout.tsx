import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Avellaneda Agustín | AI-Powered Fullstack Developer & PM",
  description:
    "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
  keywords: [
    "desarrollador web freelancer",
    "desarrollo web freelance",
    "desarrollador web Fullstack",
    "desarrollo de aplicaciones web",
    "desarrollo de sitios web",
    "servicios de desarrollo web freelance",
    "servicios de gestión de e-commerce",
    "programacion freelance",
    "programador web en Argentina",
    "programador web en Latinoamérica",
    "programador freelance en España",
    "programacion web",
    "desarrollador web en Catamarca",
    "freelance en Argentina",
    "especialista en desarrollo Front-end",
    "especialista en desarrollo Back-end",
    "experto en testing de aplicaciones web",
  ],

  authors: {
    name: "Agustín Avellaneda",
  },
  publisher: "Agustín Avellaneda",

  twitter: {
    card: "summary_large_image",
    title: "Avellaneda Agustín | AI-Powered Fullstack Developer & PM ",
    description:
      "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
    creator: "Avellaneda Agustín",
    images:
      "https://res.cloudinary.com/draig/image/upload/v1752024767/portolio-personal/imagen_2025-07-08_223240667_sq2fab.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.agustin.top",
    title: "Avellaneda Agustín | AI-Powered Fullstack Developer & PM ",
    description:
      "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
    siteName: "Avellaneda Agustín | AI-Powered Fullstack Developer & PM",
    images: [
      {
        url: "https://res.cloudinary.com/draig/image/upload/v1752024767/portolio-personal/imagen_2025-07-08_223240667_sq2fab.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
