import { type NextPage } from "next";
import Head from "next/head";
// components
import Hero from "@/components/home/hero";
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
        <Hero/>
        {/* <Ripple/> */}
      </main>
    </>
  );
}

export default Home;