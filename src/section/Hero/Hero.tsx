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
    <section className="py-6 bg-white">
      <div className="px-4 flex flex-col gap-6">
        <img
          src={productImage}
          alt="Product"
          className="rounded-2xl shadow-lg"
        />

        <h1 className="text-2xl font-bold">Amazing Product</h1>

        <p className="text-gray-600">
          A perfect solution for your everyday needs.
        </p>

        <div className="bg-gray-50 p-5 rounded-xl shadow">
          <p className="line-through text-gray-400 text-lg">1199 грн</p>

          <p className="text-3xl font-bold text-red-600">599 грн</p>

          <p className="text-green-600 font-semibold">Discount 50%</p>

          <p className="text-red-500 font-semibold mt-3">
            Offer ends in: {formatTime(time)}
          </p>

          <p className="text-orange-500 mt-3 font-medium">
            Only 7 items left in stock
          </p>

          <button className="mt-5 w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold shadow hover:scale-105 transition">
            🛒 Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
