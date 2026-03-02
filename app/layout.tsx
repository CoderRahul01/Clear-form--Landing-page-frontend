import "./css/style.css";

import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | Clearform",
    default: "Clearform | Structured Feedback & AI Form Analytics",
  },
  description:
    "Clearform improves response quality at the source, delivering structured, decision-ready feedback for product and HR teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} bg-gray-50 font-poppins tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
