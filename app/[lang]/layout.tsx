import { LANGS } from "../../lib/site";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "fa" ? "rtl" : "ltr";
  return <div lang={lang} dir={dir} style={{ display: "contents" }}>{children}</div>;
}
