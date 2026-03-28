import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "../hooks/useRouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "/menu", isRoute: true },
  { label: "Deals", href: "#deals" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a0800] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" data-ocid="nav.link">
          <div className="w-10 h-10 rounded-full bg-[#1a0800] border-2 border-[#F97316] flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
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
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <button
                  type="button"
                  onClick={() => handleNavClick(link)}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-[#F97316] font-poppins text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-[#F97316] font-poppins text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="hidden sm:inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-orange"
          >
            Order Now
          </a>
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1a0800] border-t border-orange-900/30 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <button
                    type="button"
                    onClick={() => handleNavClick(link)}
                    data-ocid="nav.link"
                    className="block w-full text-left text-white/80 hover:text-[#F97316] font-poppins text-sm py-2 px-3 rounded transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="block text-white/80 hover:text-[#F97316] font-poppins text-sm py-2 px-3 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="block text-center bg-[#F97316] text-white font-oswald font-semibold text-sm py-2 px-4 rounded-full mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
