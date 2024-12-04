import type { MetaFunction } from "@remix-run/node";

import Testimonials from "~/components/Testimonials";
import CallToAction from "~/components/CallToAction";
import FAQs from "~/components/FAQs";
import { SubPageHeader } from "~/components/Hero";
import Pricing from "~/components/Pricing";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing" },
    { name: "description", content: "Pricing page" },
  ];
};

export default function Index() {
  return (
    <main>
      <SubPageHeader title="Pricing" />
      <Pricing />
      <CallToAction />
      <Testimonials />
      <FAQs />
    </main>
  );
}
