import { Truck, ShieldCheck, Star } from "lucide-react";

export default function Features() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why choose this product
        </h2>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
            <Truck className="text-blue-500 shrink-0" size={32} />
            <div>
              <h3 className="font-semibold">Fast delivery</h3>
              <p className="text-gray-500 text-sm">
                Delivery across Ukraine via Nova Poshta
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
            <ShieldCheck className="text-green-500 shrink-0" size={32} />
            <div>
              <h3 className="font-semibold">Quality guarantee</h3>
              <p className="text-gray-500 text-sm">
                Only tested and high quality products
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
            <Star className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h3 className="font-semibold">Best choice</h3>
              <p className="text-gray-500 text-sm">
                Thousands of satisfied customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
