import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/Hero";
import How from "~/components/How";
import Testimonials from "~/components/Testimonials";
import CallToAction from "~/components/CallToAction";
import FAQs from "~/components/FAQs";

export const meta: MetaFunction = () => {
  return [
    { title: "E-Advent Calendars" },
    { name: "description", content: "Create an E-Advent Calendar" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
      <How />
      <Testimonials />
      <CallToAction />
      <FAQs />
    </main>
  );
}
