import type { Metadata } from "next";
import "../styles/tokens.css";
import "../styles/globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Background from "../components/Background";
import { siteUrl, withBase } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl("/")),
  title: "Translate PDF & EPUB Books with AI — ReadLynx Free App",
  description:
    "Free desktop app to translate PDF, EPUB and Markdown books with AI — keeps the original layout, local OCR for scans, 77 languages. Windows, macOS & Linux.",
  icons: {
    icon: [
      { url: withBase("/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: withBase("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: withBase("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    shortcut: withBase("/favicon-32.png"),
    apple: withBase("/apple-touch-icon.png"),
  },
  verification: {
    google: "oxin0bp4IQ49Dr7W2iP1QzuWNeLwEvFwRIJvYimTdb4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("readlynx-website-theme");var t=s==="light"||s==="dark"?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Background />
          <div className="site-shell">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
