import type { MetaFunction } from "@remix-run/node";

import { SubPageHeader } from "~/components/Hero";
import Form from "~/components/Form";

export const meta: MetaFunction = () => {
  return [
    { title: "Build" },
    { name: "description", content: "Build a Calender" },
  ];
};

export default function Index() {
  return (
    <main className="bg-lime-800 text-white">
      <SubPageHeader title="Create your Calendar" />
      <Form />
    </main>
  );
}
