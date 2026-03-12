import { Truck, ShieldCheck, Star } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why choose this product
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <Truck className="mx-auto mb-4 text-blue-500" size={40} />
            <h3 className="font-semibold mb-2">Fast delivery</h3>
            <p className="text-gray-500">
              Delivery across Ukraine via Nova Poshta
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <ShieldCheck className="mx-auto mb-4 text-green-500" size={40} />
            <h3 className="font-semibold mb-2">Quality guarantee</h3>
            <p className="text-gray-500">
              Only tested and high quality products
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <Star className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="font-semibold mb-2">Best choice</h3>
            <p className="text-gray-500">Thousands of satisfied customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
