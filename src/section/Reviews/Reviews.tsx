export default function Reviews() {
  const reviews = [
    {
      name: "Олена",
      text: "Чудовий продукт! Дуже мені допоміг. Дуже рекомендую!",
    },
    {
      name: "Андрій",
      text: "Дуже гарна якість і швидка доставка. Я задоволений.",
    },
    {
      name: "Марія",
      text: "Неймовірно! Працює точно так, як описано.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Відгуки клієнтів
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
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
