import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "CAI - Core AI Solutions",
  description: "Bringing AI to the core of your business systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}

        {/* Iframe detection script */}
        <Script id="iframe-detection" strategy="afterInteractive">
          {`
            (function() {
              function detectIframe() {
                if (window !== window.top) {
                  // We're in an iframe
                  document.documentElement.classList.add('iframe-embedded');
                  document.body.classList.add('iframe-embedded');
                  
                  // Remove default scroll from parent and let content handle it
                  document.body.style.overflow = 'hidden';
                  document.documentElement.style.overflow = 'hidden';
                  
                  // Set height to exactly fit viewport
                  document.body.style.height = '100vh';
                  document.documentElement.style.height = '100vh';
                }
              }
              
              // Run on load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', detectIframe);
              } else {
                detectIframe();
              }
            })();
          `}
        </Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
