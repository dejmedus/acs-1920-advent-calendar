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

      <ol>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} content={step.content} />
        ))}
      </ol>
    </section>
  );
}

function Step({ title, content }: { title: string; content: string }) {
  return (
    <li>
      <h4>{title}</h4>
      <p>{content}</p>
    </li>
  );
}
