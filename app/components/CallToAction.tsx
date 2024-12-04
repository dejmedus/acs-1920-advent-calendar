import { Link } from "@remix-run/react";

export default function CallToAction() {
  return (
    <section className="flex justify-between items-center mt-4 wide">
      <h3>Create one today</h3>
      <button className="btn">
        <Link to="/build">Create a Calendar</Link>
      </button>
    </section>
  );
}
