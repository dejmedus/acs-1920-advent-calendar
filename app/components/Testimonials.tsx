const testimonials = [
  {
    author: "Emily W.",
    content:
      "I absolutely loved the e-advent calendar! Each day felt like a little surprise waiting to brighten my morning. The variety of content—recipes, quizzes, and even small gifts—was incredible. I can't wait to use it again next year!",
  },
  {
    author: "David L.",
    content:
      "The e-advent calendar made the holiday season even more special for our family. The digital format was so convenient, and the daily surprises were unique and fun. Highly recommend it to anyone looking to add extra cheer to their December!",
  },
  {
    author: "Sarah P.",
    content:
      "As someone with a packed schedule, this e-advent calendar was a game-changer. It brought a bit of joy and relaxation to my day without needing to carve out extra time. Perfect for anyone who loves the holidays but is short on time!",
  },
  {
    author: "Michael T.",
    content:
      "Who knew an online advent calendar could be so engaging? I loved the mix of interactive content and festive surprises. It's a fresh take on a classic tradition—brilliant idea!",
  },
  {
    author: "Sophie R.",
    content:
      "I gifted the e-advent calendar to my friends and family this year, and everyone loved it. The fact that it was customizable made it even better. It's a thoughtful, modern way to spread holiday cheer!",
  },
];

export default function Testimonials() {
  return (
    <section className="my-8 typo wide">
      <h3>What our users are saying</h3>
      <div className="gap-4 grid grid-cols-2 w-full">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            author={testimonial.author}
            content={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
}

function Testimonial({ author, content }: { author: string; content: string }) {
  return (
    <div className="shadow-xl h-fit card">
      <div className="card-body">
        <p className="card-title">&quot;{content}&quot;</p>
        <p className="self-end">-{author}</p>
      </div>
    </div>
  );
}
