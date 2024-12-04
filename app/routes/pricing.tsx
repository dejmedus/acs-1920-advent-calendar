import type { MetaFunction } from "@remix-run/node";

import Testimonials from "~/components/Testimonials";
import CallToAction from "~/components/CallToAction";
import FAQs from "~/components/FAQs";
import { SubPageHeader } from "~/components/Hero";

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
      <CallToAction />
      <Testimonials />
      <FAQs />
    </main>
  );
}
