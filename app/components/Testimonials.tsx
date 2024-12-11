const testimonials = [
  {
    author: "Emily W.",
    content:
      "I absolutely loved the e-advent calendar! Each day felt like a little surprise waiting to brighten my morning.",
  },
  {
    author: "David L.",
    content:
      "The e-advent calendar made the holiday season even more special for our family.  Highly recommend it to anyone looking to add extra cheer to their December!",
  },
  {
    author: "Sarah P.",
    content:
      "As someone with a packed schedule, this e-advent calendar was a game-changer.  Perfect for anyone who loves the holidays but is short on time!",
  },
  {
    author: "Sophie R.",
    content:
      "I gifted the e-advent calendar to my friends and family this year, and everyone loved it. The fact that it was customizable made it even better. It's a thoughtful, modern way to spread holiday cheer!",
  },
];

export default function Testimonials() {
  return (
    <section className="wide">
      <h3>What our users are saying</h3>
      <div className="gap-4 grid md:grid-cols-2 w-full">
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
    <div className="bg-white shadow h-fit text-neutral-800 card">
      <div className="card-body">
        <p className="font-medium card-title hover:scale-105">
          &quot;{content}&quot;
        </p>
        <span className="font-sm text-lg self-end"> - {author}</span>
      </div>
    </div>
  );
}
