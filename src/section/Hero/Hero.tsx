export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Amazing Product</h1>

          <p className="text-gray-600 mb-6">
            This product will make your life easier and more comfortable.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">
            Order now
          </button>
        </div>

        <div>
          <img
            src="https://via.placeholder.com/500"
            alt="product"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
