import { Link } from "@remix-run/react";

export default function CallToAction() {
  return (
    <section className="flex justify-between items-center my-8 wide">
      <h3 className="font-semibold text-xl">Create one today</h3>
      <button className="btn">
        <Link to="/build">Create a Calendar</Link>
      </button>
    </section>
  );
}
