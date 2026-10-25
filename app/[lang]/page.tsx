import type { Metadata } from "next";
import Header from "../../components/Header";
import { Hero, Download, Features, Modes, Guide, Faq, Donate, Footer } from "../../components/Sections";
import TutorialBanner from "../../components/TutorialBanner";
import { LANGS, type Lang, SITE, siteUrl } from "../../lib/site";
import { getDict } from "../../dictionaries";
import s from "../../components/site.module.css";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDict(lang === "fa" ? "fa" : "en");
  const canonical = siteUrl(`/${lang}/`);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: { en: siteUrl("/en/"), fa: siteUrl("/fa/") },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      siteName: "ReadLynx",
      type: "website",
      images: [siteUrl("/readlynx-total-poster.jpg")],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [siteUrl("/readlynx-total-poster.jpg")],
    },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";
  const dict = getDict(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReadLynx",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows, macOS, Linux",
    description: dict.meta.description,
    url: siteUrl(`/${lang}/`),
    downloadUrl: `${SITE.appRepo}/releases/latest`,
    image: siteUrl("/app-icon.png"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} dict={dict} />
      <main className={`container ${s.main}`}>
        <Hero lang={lang} dict={dict} />
        <Download lang={lang} dict={dict} />
        <TutorialBanner dict={dict} />
        <Features dict={dict} />
        <Modes dict={dict} />
        <Guide dict={dict} />
        <Faq dict={dict} />
        <Donate dict={dict} />
        <Footer dict={dict} />
      </main>
    </>
  );
}
