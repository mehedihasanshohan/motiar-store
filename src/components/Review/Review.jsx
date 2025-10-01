import React from "react";
import c1 from '/c1.png'
import c2 from '/c2.png'
import c3 from '/c3.jfif'
import c4 from '/c4.jfif'

const reviews = [
  {
    id: 1,
    name: "Rahim Uddin",
    title: "স্থায়ী গ্রাহক",
    avatar: c1,
    rating: 5,
    text: "মালামাল তাজা, দামও ঠিকঠাক এবং সার্ভিস খুবই চমৎকার।"
  },
  {
    id: 2,
    name: "Shohan Molla",
    title: "গ্রাহক",
    avatar: c2,
    rating: 4,
    text: "মুদিখানার সব কিছুই এক ঠাইয়ে মেলে — দ্রুত সার্ভিস আর হাসিমুখে সহায়তা পাই।"
  },
  {
    id: 3,
    name: "Karim Mia",
    title: "প্রতিবেশী গ্রাহক",
    avatar: c3,
    rating: 5,
    text: "দোকানটা খুব পরিচ্ছন্ন ও সুসংগঠিত। দরকারি জিনিসগুলো সবসময় রেডি মেলে।"
  },
  {
    id: 4,
    name: "Ashim Guho",
    title: "গ্রাহক",
    avatar: c4,
    rating: 5,
    text: "প্রতিবার আসলেই ঝামেলাহীন কেনাকাটার অভিজ্ঞতা পাই।"
  }
];

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-5 h-5 inline-block ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

export default function Review() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">গ্রাহক প্রতিক্রিয়া</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center text-center"
              aria-label={`Review by ${r.name}`}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img src={r.avatar} alt={`${r.name} avatar`} className="w-full h-full object-cover" />
              </div>

              {/* Name & Title */}
              <h3 className="font-semibold text-lg">{r.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{r.title}</p>

              {/* Rating */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < r.rating} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-cyan-400 leading-6 mb-4">{r.text}</p>

              <div className="text-sm text-green-400">✔ Verified buyer</div>
            </article>
          ))}
        </div>

        {/* Helper Text */}
        <p className="mt-10 text-center text-lime-400 text-sm">আমরা সবসময় আপনার প্রতিক্রিয়াকে স্বাগত জানাই।</p>
      </div>
    </section>
  );
}