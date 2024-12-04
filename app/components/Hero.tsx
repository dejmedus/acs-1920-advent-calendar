import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <div className="mb-24 hero">
      <div className="mb-20 text-center text-white hero-content">
        <div className="max-w-md">
          <h2 className="font-bold text-4xl">
            Create & Share Magical E-Advent Calendars with Loved Ones
          </h2>
          <h3 className="py-6 text-xl">
            Bring holiday joy with personalized, interactive e-advent calendars.
          </h3>
          <button className="mr-4 btn">Learn More</button>
          <button className="btn btn-neutral">
            <Link to="build">Create your own</Link>
          </button>
        </div>
      </div>
      <img
        src="/images/green.jpg"
        alt="Hero"
        className="w-full h-[600px] hero-image object-cover"
      />
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
