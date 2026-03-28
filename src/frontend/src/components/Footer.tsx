import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0f0a00] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1a0800] border-2 border-[#F97316] flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
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
              <div>
                <p className="font-oswald font-bold text-white text-lg leading-none">
                  Meet <span className="text-[#F97316]">&</span> Eat
                </p>
                <p className="text-[#F97316] text-[9px] tracking-widest font-poppins">
                  FAST FOOD & CAFE
                </p>
              </div>
            </div>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-5">
              Jhang's #1 Fast Food & Cafe serving premium quality burgers,
              pizzas, steaks, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/186w3V1Rdp/"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/meetandeatjhang"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923064168167"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-oswald font-bold text-white text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Menu", "#menu"],
                ["Deals", "#deals"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
                ["Reservation", "#reservation"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    data-ocid="footer.link"
                    className="text-white/60 hover:text-[#F97316] font-poppins text-sm transition-colors"
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div>
            <h4 className="font-oswald font-bold text-white text-base mb-4 tracking-wide">
              Opening Hours
            </h4>
            <ul className="space-y-3 font-poppins text-sm">
              <li className="flex justify-between">
                <span className="text-white/60">Monday – Sunday</span>
                <span className="text-[#F97316] font-medium">12PM – Late</span>
              </li>
            </ul>
            <div className="mt-4 bg-[#F97316]/10 border border-[#F97316]/30 rounded-xl p-4">
              <p className="text-[#F97316] font-oswald font-semibold text-sm">
                🚴 Free Delivery
              </p>
              <p className="text-white/60 font-poppins text-xs mt-1">
                25–35 minutes to your door
              </p>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-oswald font-bold text-white text-base mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 font-poppins text-sm text-white/60">
              <li className="flex gap-2 items-start">
                <span className="text-[#F97316] mt-0.5">📍</span>
                <span>
                  Opposite DHQ Hospital, Rehmat Street, Gojra Road, Sadar, Jhang
                </span>
              </li>
              <li>
                <span className="text-[#F97316]">📞</span>{" "}
                <a href="tel:+923064168167" className="hover:text-[#F97316]">
                  0306-4168167
                </a>
              </li>
              <li>
                <span className="text-[#F97316]">📞</span>{" "}
                <a href="tel:+923106507222" className="hover:text-[#F97316]">
                  0310-6507222
                </a>
              </li>
              <li>
                <span className="text-[#F97316]">⚠️</span> Complaints:{" "}
                <a href="tel:+923160900910" className="hover:text-[#F97316]">
                  0316-0900910
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-white/40 font-poppins text-xs mb-2">
                PAYMENTS
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["EasyPaisa", "JazzCash", "Nayapay", "Cash"].map((p) => (
                  <span
                    key={p}
                    className="bg-white/10 text-white/70 font-poppins text-xs px-2 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 font-poppins text-xs">
            © {year} Meet & Eat. All Rights Reserved.
          </p>
          <p className="text-white/30 font-poppins text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F97316] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
