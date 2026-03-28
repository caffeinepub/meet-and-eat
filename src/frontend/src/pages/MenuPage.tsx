import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { menuData } from "../data/menuData";
import { useRouter } from "../hooks/useRouter";

export default function MenuPage() {
  const { navigate } = useRouter();
  const [activeId, setActiveId] = useState(menuData[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  // Intersection observer to highlight active category
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const cat of menuData) {
      const el = sectionRefs.current[cat.id];
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(cat.id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  // Scroll active tab into view in sticky nav
  useEffect(() => {
    const nav = navRef.current;
    const btn = nav?.querySelector(
      `[data-catid="${activeId}"]`,
    ) as HTMLElement | null;
    if (nav && btn) {
      const navLeft = nav.scrollLeft;
      const navWidth = nav.offsetWidth;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      if (btnLeft < navLeft || btnLeft + btnWidth > navLeft + navWidth) {
        nav.scrollTo({
          left: btnLeft - navWidth / 2 + btnWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeId]);

  const scrollToCategory = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="font-poppins bg-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a0800] shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
            data-ocid="menu_page.link"
          >
            <div className="w-9 h-9 rounded-full bg-[#1a0800] border-2 border-[#F97316] flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-7 h-7" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="#1a0800" />
                <text
                  x="20"
                  y="15"
                  textAnchor="middle"
                  fill="white"
                  fontSize="7"
                  fontWeight="700"
                  fontFamily="Oswald,sans-serif"
                >
                  MEET
                </text>
                <text
                  x="20"
                  y="22"
                  textAnchor="middle"
                  fill="#F97316"
                  fontSize="7"
                  fontWeight="700"
                  fontFamily="Oswald,sans-serif"
                >
                  &amp;
                </text>
                <text
                  x="20"
                  y="29"
                  textAnchor="middle"
                  fill="white"
                  fontSize="7"
                  fontWeight="700"
                  fontFamily="Oswald,sans-serif"
                >
                  EAT
                </text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="font-oswald font-bold text-white text-lg leading-none">
                Meet <span className="text-[#F97316]">&</span> Eat
              </p>
              <p className="text-[#F97316] text-[9px] tracking-widest font-poppins">
                FAST FOOD & CAFE
              </p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {["/#about", "/#deals", "/#gallery", "/#contact"].map((href) => {
              const label = href
                .replace("/#", "")
                .replace(/^./, (c) => c.toUpperCase());
              return (
                <a
                  key={href}
                  href={href}
                  className="text-white/80 hover:text-[#F97316] font-poppins text-sm transition-colors"
                  data-ocid="menu_page.link"
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-white/70 hover:text-[#F97316] font-poppins text-sm transition-colors flex items-center gap-1"
              data-ocid="menu_page.link"
            >
              ← Home
            </button>
            <a
              href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="menu_page.primary_button"
              className="inline-flex items-center gap-1 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-sm px-4 py-2 rounded-full transition-all"
            >
              Order Now
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center pt-16"
        style={{
          background:
            "linear-gradient(135deg, #1a0800 0%, #2d1200 50%, #1a0800 100%)",
          minHeight: "260px",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F97316 0, #F97316 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-center px-4 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-white/50 hover:text-[#F97316] font-poppins text-sm transition-colors"
              data-ocid="menu_page.link"
            >
              Home
            </button>
            <span className="text-white/30 text-sm">›</span>
            <span className="text-[#F97316] font-poppins text-sm font-medium">
              Full Menu
            </span>
          </div>

          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Explore Everything
          </p>
          <h1
            className="font-oswald font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Our Full <span className="text-[#F97316]">Menu</span>
          </h1>
          <p className="text-white/60 font-poppins text-base max-w-xl mx-auto mb-8">
            From sizzling burgers to creamy pastas — every item made fresh,
            every time.
          </p>
          <a
            href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="menu_page.primary_button"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-base px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-1"
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
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-16 z-40 bg-[#1a0800] border-b border-orange-900/40 shadow-md">
        <div ref={navRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 px-4 py-3 min-w-max">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                data-catid={cat.id}
                data-ocid="menu_page.tab"
                onClick={() => scrollToCategory(cat.id)}
                className={`font-oswald font-semibold text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeId === cat.id
                    ? "bg-[#F97316] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <main>
        {menuData.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className={idx % 2 === 0 ? "bg-white" : "bg-[#fff8f5]"}
          >
            {/* Category Hero Image */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "280px" }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(26,8,0,0.85) 0%, rgba(26,8,0,0.4) 60%, rgba(26,8,0,0.1) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center px-8 sm:px-12">
                <div>
                  <span className="inline-block bg-[#F97316] text-white font-oswald font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                    {idx + 1} of {menuData.length}
                  </span>
                  <h2
                    className="font-oswald font-bold text-white"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
                  >
                    {cat.label}
                  </h2>
                  <p className="text-white/70 font-poppins text-sm mt-1">
                    {cat.items.length} items available
                  </p>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    data-ocid={`menu_page.item.${i + 1}`}
                    className="flex items-center justify-between bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 hover:border-[#F97316]/40 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                      <span className="font-poppins font-medium text-gray-800 text-sm group-hover:text-[#F97316] transition-colors truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-oswald font-bold text-[#F97316] text-sm ml-4 whitespace-nowrap flex-shrink-0">
                      Rs. {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Per-category order CTA */}
              <div className="mt-6 flex justify-end">
                <a
                  href={`https://wa.me/923064168167?text=Hi%20I%20want%20to%20order%20from%20${encodeURIComponent(cat.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="menu_page.primary_button"
                  className="inline-flex items-center gap-2 border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-oswald font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200"
                >
                  Order {cat.label} →
                </a>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Final CTA banner */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #1a0800 0%, #2d1200 100%)",
        }}
      >
        <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
          Ready to Order?
        </p>
        <h2
          className="font-oswald font-bold text-white mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Everything Tastes Better When It's{" "}
          <span className="text-[#F97316]">Delivered Fresh</span>
        </h2>
        <a
          href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="menu_page.primary_button"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-1"
        >
          Order Your Favorites on WhatsApp
        </a>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
