import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "बळीवंश चळवळ | Balivansh Chalval - Farmer Welfare Movement",
  description:
    "बळीवंश चळवळ - शेतकऱ्यांसाठी लढणारी चळवळ. A grassroots farmer welfare movement in Buldhana, Maharashtra fighting for drought relief, fair crop pricing, and agricultural rights.",
  keywords: [
    "Balivansh Chalval",
    "बळीवंश चळवळ",
    "farmer welfare",
    "Maharashtra",
    "Buldhana",
    "Sindkhed Raja",
    "drought relief",
    "शेतकरी",
  ],
  openGraph: {
    title: "बळीवंश चळवळ | Balivansh Chalval",
    description:
      "शेतकऱ्यांसाठी लढणारी चळवळ - A grassroots farmer welfare movement",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-earth-50 text-earth-800 antialiased">
        <Header />
        <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
