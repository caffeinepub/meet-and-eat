const galleryImages = [
  {
    src: "/assets/uploads/screenshot_20260328-035341-019d32fd-f901-70ca-a7df-49482977f4e8-1.jpg",
    alt: "Meet and Eat Signature Dish",
    label: "Signature Dish",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035358-019d32fe-080a-7684-ac95-67ede903d6e1-3.jpg",
    alt: "Spicy Fajita Pizza",
    label: "Spicy Fajita Pizza",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035319-019d32fe-0c97-7189-b1c9-31ce73eda23a-8.jpg",
    alt: "Zinger Burger",
    label: "Zinger Burger",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035315-019d32fe-0de1-7219-b2ea-3583430c0042-11.jpg",
    alt: "Grilled Burger",
    label: "Grilled Burger",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035326-019d32fe-0d14-72a9-a2bd-1144955633bf-10.jpg",
    alt: "Seekh Kabab Pizza",
    label: "Seekh Kabab Pizza",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035322-019d32fe-10e6-74a1-9d08-f097abc97a5b-14.jpg",
    alt: "Burgurzz",
    label: "Burgurzz",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035333-019d32fe-0c8c-77db-977e-a979306e2724-7.jpg",
    alt: "Steaks",
    label: "Sizzling Steaks",
  },
  {
    src: "/assets/uploads/screenshot_20260328-035255-019d32fe-10ca-7133-870a-c98c0f670312-15.jpg",
    alt: "Pizza Flavors",
    label: "Pizza Flavors",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#0f0a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Visual Feast
          </p>
          <h2
            className="font-oswald font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Signature <span className="text-[#F97316]">Dishes</span>
          </h2>
          <div className="section-divider mt-4 w-24 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.alt}
              data-ocid={`gallery.item.${i + 1}`}
              className="gallery-item relative overflow-hidden rounded-xl cursor-pointer group"
              style={{ aspectRatio: "1" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white font-oswald font-semibold text-sm">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
