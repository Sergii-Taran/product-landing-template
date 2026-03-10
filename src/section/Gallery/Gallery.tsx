export default function Gallery() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Product Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />

          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />

          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />

          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />

          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />

          <img
            src="https://via.placeholder.com/400"
            alt="product"
            className="rounded-xl hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
}
