export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">My Store</h2>

        <p className="text-gray-400 mb-2">Швидка доставка по всій Україні</p>

        <p className="text-gray-400 mb-6">Накладений платіж Новою Поштою</p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
