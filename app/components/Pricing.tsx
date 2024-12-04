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
    <section>
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
    <div className="">
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{cost}</p>
      <a href={path}>Choose</a>
    </div>
  );
}
