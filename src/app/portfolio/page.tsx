import { type NextPage } from "next";
import { Metadata } from 'next'
import PortfolioPage from "@/components/portfolio/page";

export const metadata: Metadata = {
    title: 'Portfolio | CrowDevelopment, LLC',
    description: 'Portfolio of CrowDevelopment, LLC.',
  }

const Portfolio: NextPage = () => {
    return (
        <PortfolioPage/>
    );
}

export default Portfolio;
