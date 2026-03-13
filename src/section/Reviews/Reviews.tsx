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
    <section className="py-10 bg-white">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Відгуки клієнтів
        </h2>

        <div className="flex flex-col gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-5 bg-gray-50 rounded-xl shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-yellow-500">★★★★★</span>
              </div>

              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
