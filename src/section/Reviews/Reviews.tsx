export default function Reviews() {
  const reviews = [
    {
      name: "Olena",
      text: "Great product! Really helped me a lot. Highly recommend.",
    },
    {
      name: "Andrii",
      text: "Very good quality and fast delivery. I am satisfied.",
    },
    {
      name: "Maria",
      text: "Amazing! Works exactly as described.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{review.name}</h3>

              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
