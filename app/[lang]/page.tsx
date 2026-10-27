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
      languages: {
        en: siteUrl("/en/"),
        fa: siteUrl("/fa/"),
        "x-default": siteUrl("/en/"),
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      siteName: "ReadLynx",
      type: "website",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      alternateLocale: lang === "fa" ? "en_US" : "fa_IR",
      images: [
        {
          url: siteUrl("/readlynx-total-poster.jpg"),
          alt: lang === "fa" ? "ریدلینکس در حال ترجمه یک کتاب PDF" : "ReadLynx translating a PDF book",
        },
      ],
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
  const fa = lang === "fa";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl("/")}#website`,
        name: "ReadLynx",
        alternateName: fa ? "ریدلینکس" : undefined,
        url: siteUrl("/"),
        inLanguage: lang,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl(`/${lang}/`)}#app`,
        name: "ReadLynx",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Windows 10+, macOS 12+, Linux",
        description: dict.meta.description,
        url: siteUrl(`/${lang}/`),
        downloadUrl: `${SITE.appRepo}/releases/latest`,
        image: [siteUrl("/app-icon.png"), siteUrl("/readlynx-total-poster.jpg")],
        screenshot: siteUrl("/readlynx-total-poster.jpg"),
        featureList: dict.features.cards.map((c) => c.title),
        keywords: fa
          ? "ترجمه کتاب، ترجمه PDF، ترجمه EPUB، ترجمه کتاب با هوش مصنوعی، ترجمه کتاب اسکن‌شده، ترجمه رایگان کتاب"
          : "translate PDF book, EPUB translator, book translation app, AI book translation, translate scanned PDF, keep layout",
        isAccessibleForFree: true,
        inLanguage: lang,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
        inLanguage: lang,
      },
    ],
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
