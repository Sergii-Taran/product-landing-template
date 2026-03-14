export default function StickyOrderButton() {
  const handleClick = () => {
    const element = document.getElementById("order");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-center z-50">
      <button
        onClick={handleClick}
        className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
      >
        🛒 Замовити зі знижкою %
      </button>
    </div>
  );
}
