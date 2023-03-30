import Head from "next/head";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test APP</title>
        <meta
          name="description"
          content="Created using Next JS, Tailwind CSS, ESLint, Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-textwhite">
        <Services />
      </div>
    </>
  );
}
