import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <div className="my-24 hero">
      <div className="text-center hero-content">
        <div className="max-w-lg min-h-80">
          <h2 className="font-bold text-5xl">
            Create & Share Magical E-Advent Calendars with Loved Ones
          </h2>
          <h3 className="py-6 text-2xl">
            Bring holiday joy with personalized, interactive e-advent calendars.
          </h3>
          <button className="mr-4 btn">Learn More</button>
          <button className="btn btn-neutral">
            <Link to="build">Create your own</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export function SubPageHeader({ title }: { title: string }) {
  return (
    <div className="my-12 hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h2 className="font-bold text-4xl">{title}</h2>
        </div>
      </div>
    </div>
  );
}
