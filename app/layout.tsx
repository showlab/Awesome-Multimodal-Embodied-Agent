import type { Metadata } from "next";
import "./globals.css";
import { surveyTitle, surveyDescription } from "./survey-content";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/"),
  title: surveyTitle,
  description: surveyDescription,
  icons: { icon: "https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/favicon-showlab-proportional.svg" },
  openGraph: {
    title: surveyTitle,
    description: surveyDescription,
    images: [{ url: "https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/og.png", width: 1728, height: 910, alt: "PAPAV survey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: surveyTitle,
    description: surveyDescription,
    images: ["https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
