import type { Metadata } from "next";
import Providers from "@/components/landing/Providers";
import "./globals.css";
export const metadata: Metadata = {
  title: "closecopy — From sources to something remarkable",
  description:
    "Your sources. Your artifacts. One workspace. Explore cited answers and turn what you read into summaries, quizzes, mind maps, and more.",
  openGraph: {
    title: "closecopy — Your knowledge, put to work",
    description: "An AI workspace for cited answers and useful artifacts.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
