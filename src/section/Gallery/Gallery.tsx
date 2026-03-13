import img1 from "../../assets/products/product-1 (1).jpg";
import img2 from "../../assets/products/product-2.jpg";
import img3 from "../../assets/products/product-3.jpg";

export default function Gallery() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Фото товару</h2>

        <div className="flex flex-col gap-4">
          <img
            src={img1}
            alt="product"
            className="w-full rounded-xl shadow hover:scale-[1.02] transition"
          />

          <img
            src={img2}
            alt="product"
            className="w-full rounded-xl shadow hover:scale-[1.02] transition"
          />

          <img
            src={img3}
            alt="product"
            className="w-full rounded-xl shadow hover:scale-[1.02] transition"
          />
        </div>
      </div>
    </section>
  );
}
