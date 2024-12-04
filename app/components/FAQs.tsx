const faqs = [
  {
    question: "What is an e-advent calendar?",
    answer:
      "An e-advent calendar is a digital version of the traditional advent calendar, offering daily surprises like games, recipes, videos, or small gifts accessible through a website or app.",
  },

  {
    question: "Can I gift an e-advent calendar to someone else?",
    answer:
      "Yes! Most e-advent calendars allow you to purchase and send them as gifts. You can provide the recipient's email address during checkout to deliver it directly to them.",
  },

  {
    question: "Is the e-advent calendar suitable for kids?",
    answer:
      "Yes, many e-advent calendars offer kid-friendly versions with age-appropriate content. Be sure to check the product description to ensure it matches the intended age group.",
  },
  {
    question: "Do I need to download anything to use it?",
    answer:
      "No downloads are typically required. The e-advent calendar is usually accessible directly through a web browser or app.",
  },
  {
    question: "Can I customize the content in the e-advent calendar?",
    answer:
      "Some e-advent calendars offer customization options, such as adding personal messages or selecting specific types of content to include.",
  },
];

export default function FAQs() {
  return (
    <section className="wide">
      <h3>FAQs</h3>
      <div className="gap-4 grid">
        {faqs.map((faq, index) => (
          <FAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function FAQ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <div
      tabIndex={index}
      className="bg-base-200 border border-base-300 text-neutral-700 collapse collapse-arrow"
    >
      <div className="font-medium text-xl collapse-title">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
