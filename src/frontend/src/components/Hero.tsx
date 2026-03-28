import { Bike, ChevronDown, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt="Meet and Eat Restaurant"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Badge */}
        <div className="animate-fadeInUp mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-6 h-6 rounded-full bg-[#1a0800] border border-[#F97316] flex items-center justify-center">
              <svg viewBox="0 0 20 20" className="w-4 h-4" aria-hidden="true">
                <text
                  x="10"
                  y="14"
                  textAnchor="middle"
                  fill="#F97316"
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="Oswald,sans-serif"
                >
                  M&E
                </text>
              </svg>
            </div>
            <span className="text-white/90 text-xs font-poppins tracking-wider">
              FAST FOOD & CAFE · JHANG
            </span>
          </div>
        </div>

        <h1
          className="font-oswald font-bold text-white animate-fadeInUp"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1.1,
            animationDelay: "0.1s",
          }}
        >
          Where Every Bite
          <br />
          <span className="text-[#F97316]">Tells a Story</span>
        </h1>

        <p
          className="mt-5 text-white/80 font-poppins font-light animate-fadeInUp"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            animationDelay: "0.2s",
          }}
        >
          Jhang's #1 Fast Food & Cafe | Free Home Delivery in 25–35 Mins
        </p>

        {/* Rating badges */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-4 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.8/5
            Google Rating
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-sm">
            <Bike className="w-4 h-4 text-[#F97316]" /> Free Delivery
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-sm">
            <Clock className="w-4 h-4 text-[#F97316]" /> Open Daily 12PM–Late
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-oswald font-semibold text-base px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.554 4.1 1.527 5.822L0 24l6.334-1.527A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.894 0-3.667-.5-5.2-1.376L3.4 21.6l.99-3.302A9.951 9.951 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Order on WhatsApp
          </a>
          <a
            href="#menu"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-base px-6 py-3 rounded-full transition-all duration-200 shadow-orange hover:-translate-y-1"
          >
            View Menu
          </a>
          <a
            href="tel:+923064168167"
            data-ocid="hero.secondary_button"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a0800] font-oswald font-semibold text-base px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-chevron">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
