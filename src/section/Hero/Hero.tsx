import { useState, useEffect } from "react";

import productImage from "../../assets/products/product.jpg";

export default function Hero() {
  const [time, setTime] = useState(7200);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${h}:${m}:${s}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Amazing Product</h1>

          <p className="text-gray-600 mb-6">
            A perfect solution for your everyday needs. High quality and great
            value.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-lg inline-block mt-6">
            <p className="line-through text-gray-400 text-xl">1199 грн</p>

            <p className="text-4xl font-bold text-red-600">599 грн</p>

            <p className="text-green-600 font-semibold mt-2">Discount 50%</p>

            <p className="text-red-500 font-semibold mt-4">
              Offer ends in: {formatTime(time)}
            </p>

            <p className="text-orange-500 mt-4 font-medium">
              Only 7 items left in stock
            </p>

            <button className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
              🛒 Order Now
            </button>
          </div>
        </div>

        <div>
          <img
            src={productImage}
            alt="Product"
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
