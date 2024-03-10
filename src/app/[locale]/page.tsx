// import { Button } from "flowbite-react";
import Image from "next/image";
// import { Blockquote } from "flowbite-react";
import Link from "next/link";
import { Fragment } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");
  const locale = useLocale();
  return (
    <Fragment>
      <main className="container mx-auto px-3 py-10 min-h-[85vh] flex flex-col justify-center z-40">
        kkk
      </main>
    </Fragment>
  );
}
