import { Link } from "@remix-run/react";

const tiers = [
  {
    name: "Single",
    description:
      "No need to worry about packaging or shipping! With our digital format, there’s no waste, and you can send your calendar to anyone, anywhere, with just a click.",
    cost: 5,
    path: "/build",
  },
  {
    name: "Unlimited",
    description:
      "Whether it’s a friend, a family member, a coworker, or a neighbor, our e-advent calendars make for a perfect gift that anyone can enjoy.",
    cost: 20,
    path: "/build",
  },
];

export default function Pricing() {
  return (
    <section className="flex gap-2 wide">
      {tiers.map((tier, index) => {
        const { name, description, cost, path } = tier;
        return (
          <Card
            key={index}
            name={name}
            description={description}
            cost={cost}
            path={path}
          />
        );
      })}
    </section>
  );
}

function Card({
  name,
  description,
  cost,
  path,
}: {
  name: string;
  description: string;
  cost: number;
  path: string;
}) {
  return (
    <div className="bg-base-100 shadow card">
      <div className="items-center text-center card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="my-2 font-extrabold text-4xl">${cost}</h3>
        <p className="my-2 max-w-[50ch]">{description}</p>
        <div className="flex w-full card-actions">
          <Link to={path} className="w-full btn btn-neutral">
            Choose
          </Link>
        </div>
      </div>
    </div>
  );
}
