import { DEFAULT_LANG } from "../lib/site";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(`/${DEFAULT_LANG}`);
}
