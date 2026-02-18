export const metadata = {
  title: "Home - Clearform",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import DemoNav from "@/components/demoNav";
import Dashboard from "@/components/dashboard";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import PreIncubated from "@/components/pre-incubated";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PreIncubated />
      <Dashboard />
      <DemoNav />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
