import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Agustín Avellaneda | AI-Powered Fullstack Developer & Project Manager",
  description:
    "Desarrollador Fullstack especializado en IA y gestión de proyectos. Transformo ideas en productos exitosos usando tecnologías modernas. Portfolio con +20 proyectos entregados. Servicios de desarrollo web, MVP, consultoría tecnológica. Contacto directo desde Argentina.",
  keywords: [
    "Agustín Avellaneda",
    "desarrollador fullstack IA",
    "AI-powered developer",
    "project manager tech",
    "MVP development",
    "React developer Argentina",
    "Next.js specialist",
    "freelance developer",
    "portfolio desarrollador",
    "consultoría tecnológica",
    "desarrollo web moderno",
    "fullstack JavaScript",
    "TypeScript developer",
    "software architecture",
    "tech leadership"
  ],

  authors: {
    name: "Agustín Avellaneda",
  },
  publisher: "Agustín Avellaneda",

  twitter: {
    card: "summary_large_image",
    title: "Agustín Avellaneda | AI-Powered Fullstack Developer & Project Manager",
    description:
      "Desarrollador Fullstack especializado en IA y gestión de proyectos. Transformo ideas en productos exitosos usando tecnologías modernas. Portfolio con +20 proyectos entregados.",
    creator: "Avellaneda Agustín",
    images:
      "https://www.agustin.top/og-image.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.agustin.top",
    title: "Agustín Avellaneda | AI-Powered Fullstack Developer & Project Manager",
    description:
      "Desarrollador Fullstack especializado en IA y gestión de proyectos. Transformo ideas en productos exitosos usando tecnologías modernas. Portfolio con +20 proyectos entregados.",
    siteName: "Agustín Avellaneda Portfolio",
    images: [
      {
        url: "https://www.agustin.top/og-image.png",
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
