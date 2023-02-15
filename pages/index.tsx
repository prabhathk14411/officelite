import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Office Lite</title>
      </Head>
      <main>
        <div className="relative">
          <Image
            className="absolute -mr-[42px] -mt-[170px]"
            src="/assets/home/bg-pattern-header.svg"
            alt="Logo"
            width={458}
            height={458}
          ></Image>
          <Image
            className="absolute  inset-0 pt-[46px]"
            src="/assets/shared/logo.svg"
            alt="Logo"
            width={155}
            height={32}
          ></Image>
        </div>
      </main>
    </>
  );
}
