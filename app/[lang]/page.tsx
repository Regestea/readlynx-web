import type { Metadata } from "next";
import Header from "../../components/Header";
import { Hero, Download, Features, Modes, Guide, Faq, Donate, Footer } from "../../components/Sections";
import TutorialBanner from "../../components/TutorialBanner";
import { LANGS, type Lang } from "../../lib/site";
import { getDict } from "../../dictionaries";
import s from "../../components/site.module.css";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDict(lang === "fa" ? "fa" : "en");
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";
  const dict = getDict(lang);
  return (
    <>
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
