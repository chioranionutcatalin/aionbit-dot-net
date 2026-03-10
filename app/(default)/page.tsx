export const metadata = {
  title: "Aionbit | Web Outsourcing Agency",
  description:
    "Aionbit helps companies scale products with senior frontend delivery, full-stack development, QA automation, and technical leadership.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "../../components/features";
import Testimonials from "../../components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
