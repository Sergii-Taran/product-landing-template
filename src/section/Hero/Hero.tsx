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
      <div className=" flex flex-col ">
        <h1 className="text-3xl font-bold bg-red-500 text-white text-center py-3 w-full">
          Зарядка для телефона
        </h1>

        <p className="text-xl text-white bg-gray-400 font-bold text-center py-3">
          Потужна та швидка телефонна зарядка
        </p>

        <img src={productImage} alt="Product" className=" shadow-lg" />

        <div className="bg-black p-5  shadow text-center">
          {/* <p className="line-through text-gray-300 font-bold text-2xl">
            1199 грн
          </p>

          <p className="text-5xl font-bold text-red-600">599 грн</p>

          <p className="text-green-600 font-semibold">Знижка 50%</p> */}

          <div className="text-center space-y-4">
            <div className="grid grid-cols-2">
              {/* Звичайна ціна */}
              <div>
                <p className="text-lg text-white">Звичайна ціна:</p>
                <p className="line-through text-gray-500 font-bold text-4xl">
                  1199 грн
                </p>
              </div>

              {/* Ціна сьогодні */}
              <div>
                <p className="text-lg text-white">Ціна сьогодні:</p>
                <p className="text-4xl font-bold text-red-600">599 грн</p>
              </div>
            </div>

            {/* Економія */}
            <div>
              <p className="text-lg text-white">Ви заощаджуєте:</p>
              <p className="text-4xl font-bold text-green-600">50%</p>
            </div>
          </div>

          <p className="text-red-500 font-semibold mt-3">
            До кінця акції залишилось: {formatTime(time)}
          </p>

          <p className="text-orange-500 mt-3 font-medium">
            Залишилось 7 шт. по акції
          </p>

          <button className="mt-5 w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold shadow hover:scale-105 transition">
            🛒 Замовити зараз
          </button>
        </div>
      </div>
    </section>
  );
}
