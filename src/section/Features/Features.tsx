export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why choose this product?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">
              Made from durable materials for long-term use.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple design that anyone can use instantly.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick shipping with cash on delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
