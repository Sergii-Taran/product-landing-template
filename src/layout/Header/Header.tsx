export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My Store</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Замовити зараз
        </button>
      </div>
    </header>
  );
}
