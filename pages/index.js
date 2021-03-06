import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spiritmax Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
