import { type NextPage } from "next";
import Head from "next/head";
// components
import Ripple from "@/components/ripple";
import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";
import Testimonials from "@/components/home/testimonials";

const HomePage: NextPage = () =>  {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed inset-0 z-0">
        <Ripple/>
      </div>
        <Hero/>
        <Tools/>
        <Testimonials/>
        <div className="relative bg-custom-color min-h-[264px] p-12 font-light flex justify-between"></div>
    </>
  );
}

export default HomePage;