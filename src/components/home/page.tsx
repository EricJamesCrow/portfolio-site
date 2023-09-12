import { type NextPage } from "next";
import dynamic from 'next/dynamic'

// components
const Ripple = dynamic(() => import('@/components/ripple'), { ssr: false })
import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";
import About from "@/components/home/about";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";
import Contact from "@/components/home/contact";

const HomePage: NextPage = () =>  {
  return (
    <div className="overflow-x-hidden">
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