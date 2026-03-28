import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Raza",
    initials: "AR",
    stars: 5,
    date: "2 weeks ago",
    text: "Best food in Jhang! The Spicy Fajita Pizza is incredible. Quick delivery and always hot. My family's favorite restaurant — we order at least twice a week!",
  },
  {
    name: "Fatima Malik",
    initials: "FM",
    stars: 5,
    date: "1 month ago",
    text: "Amazing burgers and unbeatable deals. The Zingerest Deal is perfect for family gatherings. Highly recommend Meet & Eat to everyone in Jhang!",
  },
  {
    name: "Usman Sheikh",
    initials: "US",
    stars: 5,
    date: "3 weeks ago",
    text: "Outstanding quality. The Malai Boti Platter and Seekh Kabab Pizza are absolute must-try dishes. The 4.8 stars rating is well deserved. Keep it up!",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {STAR_KEYS.slice(0, count).map((key) => (
      <Star key={key} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#1a0800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2
            className="font-oswald font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Our Customers <span className="text-[#F97316]">Say</span>
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <StarRating count={5} />
            <span className="text-white font-poppins text-sm">
              4.8/5 on Google · 200+ Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="bg-[#0f0a00] border border-orange-900/30 rounded-2xl p-6 hover:border-[#F97316]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <StarRating count={r.stars} />
              <p className="text-white/80 font-poppins text-sm leading-relaxed my-4">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center">
                  <span className="font-oswald font-bold text-white text-xs">
                    {r.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">
                    {r.name}
                  </p>
                  <p className="text-white/40 font-poppins text-xs">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
