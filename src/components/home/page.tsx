import { type NextPage } from "next";
import Head from "next/head";

// components
import Ripple from "@/components/ripple";
import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";
import About from "@/components/home/about";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";
import Contact from "@/components/home/contact";

const HomePage: NextPage = () =>  {
  return (
    <div className="overflow-x-hidden">
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
        <About/>
        <Portfolio/>
        <Services/>
        <Contact/>
    </div>
  );
}

export default HomePage;