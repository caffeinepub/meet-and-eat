import { useState } from "react";
import { menuData } from "../data/menuData";
import { useRouter } from "../hooks/useRouter";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("burgers");
  const active = menuData.find((c) => c.id === activeTab)!;
  const { navigate } = useRouter();

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Explore
          </p>
          <h2
            className="font-oswald font-bold text-[#111827]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Full <span className="text-[#F97316]">Menu</span>
          </h2>
          <div className="section-divider mt-4 w-24 mx-auto" />
        </div>

        {/* Tab bar */}
        <div className="overflow-x-auto pb-2 mb-8">
          <div className="flex gap-2 min-w-max">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                data-ocid="menu.tab"
                className={`font-oswald font-semibold text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#F97316] text-white shadow-orange"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#F97316] hover:text-[#F97316]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.items.map((item, i) => (
            <div
              key={item.name}
              data-ocid={`menu.item.${i + 1}`}
              className="flex items-center justify-between bg-white rounded-xl px-5 py-4 shadow-xs border border-gray-100 hover:border-[#F97316]/40 hover:shadow-orange transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span className="font-poppins font-medium text-[#111827] text-sm group-hover:text-[#F97316] transition-colors">
                  {item.name}
                </span>
              </div>
              <span className="font-oswald font-bold text-[#F97316] text-sm ml-4 whitespace-nowrap">
                Rs. {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/menu")}
            data-ocid="menu.primary_button"
            className="inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-oswald font-semibold text-base px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
          >
            View Full Menu →
          </button>
          <a
            href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="menu.secondary_button"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-base px-8 py-3 rounded-full transition-all duration-200 shadow-orange hover:-translate-y-1"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
