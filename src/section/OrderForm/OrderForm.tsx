import { useState } from "react";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      `New order:
Name: ${name}
Phone: ${phone}
City: ${city}
Warehouse: ${warehouse}`,
    );
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Order Now</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 border rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Nova Poshta warehouse"
            className="w-full p-3 border rounded-lg"
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
