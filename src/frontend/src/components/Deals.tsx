const deals = [
  {
    image:
      "/assets/uploads/screenshot_20260328-035330-019d32fe-05b7-726d-9691-e8096b838b16-2.jpg",
    name: "Favorite Deal – 5 Zingers",
    price: "Rs. 1,799",
    tag: "POPULAR",
  },
  {
    image:
      "/assets/uploads/screenshot_20260328-035354-019d32fe-09c1-746b-9a23-4baa1cce9e75-4.jpg",
    name: "Zingerest Deal",
    price: "Rs. 1,349",
    tag: "BEST VALUE",
  },
  {
    image:
      "/assets/uploads/screenshot_20260328-035337-019d32fe-0aa2-777c-884c-368a09d0d5a7-6.jpg",
    name: "Weekend Treat",
    price: "Rs. 2,888",
    tag: "SAT–SUN",
  },
  {
    image:
      "/assets/uploads/screenshot_20260328-035347-019d32fe-0d46-754f-9e43-7811af4a8a40-9.jpg",
    name: "Any Time Deal 1",
    price: "Rs. 2,249",
    tag: "ANY TIME",
  },
];

export default function Deals() {
  return (
    <section id="deals" className="py-20 bg-[#0f0a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Limited Offers
          </p>
          <h2
            className="font-oswald font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Today's Best <span className="text-[#F97316]">Deals</span>
          </h2>
          <div className="section-divider mt-4 w-24 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, i) => (
            <div
              key={deal.name}
              data-ocid={`deals.item.${i + 1}`}
              className="deal-card group relative bg-[#1a0800] rounded-2xl overflow-hidden border border-orange-900/30 hover:border-[#F97316]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-lg"
            >
              {/* Tag */}
              <div className="absolute top-3 left-3 z-10 bg-[#F97316] text-white font-oswald font-semibold text-xs px-2 py-1 rounded-full">
                {deal.tag}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="deal-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-oswald font-semibold text-white text-base mb-2 leading-snug">
                  {deal.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-oswald font-bold text-[#F97316] text-lg">
                    {deal.price}
                  </span>
                  <a
                    href={`https://wa.me/923064168167?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(deal.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`deals.primary_button.${i + 1}`}
                    className="bg-[#25D366] hover:bg-green-600 text-white font-poppins font-medium text-xs px-3 py-1.5 rounded-full transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery info */}
        <div className="mt-10 text-center">
          <p className="text-white/60 font-poppins text-sm">
            🚴 Free home delivery in{" "}
            <span className="text-[#F97316] font-medium">25–35 minutes</span> ·
            📞 Order:{" "}
            <a
              href="tel:+923106507222"
              className="text-[#F97316] hover:underline"
            >
              0310-6507222
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
