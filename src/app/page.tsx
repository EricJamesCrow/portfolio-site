import { type NextPage } from "next";
import Head from "next/head";
// background
import Ripple from "@/components/ripple";

const Home: NextPage = () =>  {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Ripple/>
      </main>
    </>
  );
}

export default Home;