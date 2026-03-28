import { Award, Star, Truck, UtensilsCrossed } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Customers", icon: "🙂" },
  { value: "50+", label: "Menu Items", icon: "🍽️" },
  { value: "4.8★", label: "Google Rating", icon: "⭐" },
  { value: "Free", label: "Home Delivery", icon: "🚴" },
];

const badges = [
  { icon: <Award className="w-5 h-5" />, label: "Premium Quality" },
  { icon: <Truck className="w-5 h-5" />, label: "Free Delivery" },
  { icon: <Star className="w-5 h-5" />, label: "4.8 Rated" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2
              className="font-oswald font-bold text-[#111827] mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              A Taste of Excellence
              <br />
              <span className="text-[#F97316]">in Jhang</span>
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed mb-5">
              Meet & Eat is Jhang's most beloved fast food destination, proudly
              serving our community from Gojra Road, Sadar. We believe that
              great food is more than sustenance — it's an experience that
              brings people together, sparks joy, and creates memories.
            </p>
            <p className="text-gray-600 font-poppins leading-relaxed mb-8">
              From our signature sizzling steaks to crispy burgers and
              wood-fired style pizzas, every dish is crafted with premium
              ingredients and served with passion. With a Google rating of 4.8/5
              and free home delivery in 25-35 minutes, we make quality fast food
              accessible to everyone.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#F97316] font-poppins font-medium text-sm px-4 py-2 rounded-full"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-[#0f0a00] rounded-xl p-4"
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-oswald font-bold text-[#F97316] text-xl">
                    {s.value}
                  </div>
                  <div className="text-white/70 font-poppins text-xs mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#F97316] rounded-2xl" />
            <img
              src="/assets/uploads/screenshot_20260328-035333-019d32fe-0c8c-77db-977e-a979306e2724-7.jpg"
              alt="Meet and Eat Steaks"
              className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 -right-4 z-20 bg-[#F97316] text-white font-oswald font-bold px-5 py-3 rounded-xl shadow-orange-lg">
              <UtensilsCrossed className="w-5 h-5 inline mr-1" />
              Since 2020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
