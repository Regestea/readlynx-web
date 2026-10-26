import type { Metadata } from "next";
import "../styles/tokens.css";
import "../styles/globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Background from "../components/Background";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl("/")),
  title: "ReadLynx — Read anything. Translate everything.",
  description:
    "ReadLynx is a desktop reading + translation studio for PDF, EPUB and Markdown. Download for Windows, macOS and Linux.",
  icons: { icon: "./app-icon.png" },
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
