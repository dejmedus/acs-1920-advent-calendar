const steps = [
  {
    title: "Personalize your Calendar",
    content:
      "Choose from a range of festive templates or create your own design",
  },
  {
    title: "Add Your Special Touch",
    content:
      "Upload your favorite photos, record a heartfelt message, or even link to a fun holiday activity. Each door will hold a new surprise that your recipient will love.",
  },
  {
    title: "Send and Share",
    content:
      "Once your calendar is ready, simply share your calendars unique link and set the start date. Your advent calendar will automatically arrive each day with a new surprise!",
  },
];

export default function How() {
  return (
    <section className="typo">
      <h3>Its Easy to Spread Holiday Cheer</h3>
      <p>
        creating your own custom e-advent calender is quick, fun, and easy.
        Heres how it works:
      </p>

      <ul className="step-numbers">
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            content={step.content}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}

function Step({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  return (
    <li className="flex">
      <span className="mt-5 mr-4 font-bold text-2xl">{index + 1}</span>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </li>
  );
}
