export const metadata = {
  title: "Home - Clearform",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import DemoNav from "@/components/demoNav";
import Dashboard from "@/components/dashboard";
import FeedbackWorkflow from "@/components/feedback-workflow";
import ModernAlternative from "@/components/modern-alternative";
import BusinessCategories from "@/components/business-categories";
import ComparisonTable from "@/components/comparisonTable";
import PreIncubated from "@/components/pre-incubated";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PreIncubated />
      <ModernAlternative />
      <Dashboard />
      <FeedbackWorkflow />
      <DemoNav />
      <BusinessCategories />
      <ComparisonTable />
      <Cta />
    </>
  );
}
