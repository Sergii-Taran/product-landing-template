export default function FloatingContacts() {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-4 z-50">
      <a
        href="tel:+380000000000"
        className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
      >
        📞
      </a>

      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        💬
      </a>
    </div>
  );
}
