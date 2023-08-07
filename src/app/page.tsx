import { type NextPage } from "next";
import Head from "next/head";
// components
import Ripple from "@/components/ripple";
import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";

const Home: NextPage = () =>  {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="fixed inset-0 z-0">
        <Ripple/>
      </div>
        <Hero/>
        <Tools/>
      </main>
    </>
  );
}

export default Home;