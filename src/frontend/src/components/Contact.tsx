import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Name and message are required.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitContact(
        form.name,
        form.phone,
        form.email,
        form.message,
      );
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2
            className="font-oswald font-bold text-[#111827]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Contact <span className="text-[#F97316]">Us</span>
          </h2>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0f0a00] rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-[#F97316]" />
            </div>
            <h4 className="font-oswald font-bold text-white text-base mb-2">
              Our Location
            </h4>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">
              Opposite DHQ Hospital, Rehmat Street, Gojra Road, Sadar, Jhang
            </p>
          </div>
          <div className="bg-[#0f0a00] rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#F97316]" />
            </div>
            <h4 className="font-oswald font-bold text-white text-base mb-2">
              Phone Numbers
            </h4>
            <p className="text-white/60 font-poppins text-sm">
              <a
                href="tel:+923064168167"
                className="hover:text-[#F97316] block"
              >
                0306-4168167
              </a>
              <a
                href="tel:+923106507222"
                className="hover:text-[#F97316] block"
              >
                0310-6507222
              </a>
              <a
                href="tel:+923160900910"
                className="hover:text-[#F97316] block"
              >
                0316-0900910
              </a>
            </p>
          </div>
          <div className="bg-[#0f0a00] rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#F97316]" />
            </div>
            <h4 className="font-oswald font-bold text-white text-base mb-2">
              Opening Hours
            </h4>
            <p className="text-white/60 font-poppins text-sm">
              Daily
              <br />
              <span className="text-[#F97316] font-medium">
                12:00 PM – Late Evening
              </span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs">
            <h3 className="font-oswald font-bold text-[#111827] text-xl mb-6">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.modal"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-name" className="font-poppins text-sm">
                    Name *
                  </Label>
                  <Input
                    id="c-name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                    data-ocid="contact.input"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="c-phone" className="font-poppins text-sm">
                    Phone
                  </Label>
                  <Input
                    id="c-phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    data-ocid="contact.input"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="c-email" className="font-poppins text-sm">
                  Email
                </Label>
                <Input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                  data-ocid="contact.input"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="c-message" className="font-poppins text-sm">
                  Message *
                </Label>
                <Textarea
                  id="c-message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  required
                  data-ocid="contact.textarea"
                  className="mt-1 resize-none"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                data-ocid="contact.submit_button"
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-base py-3 rounded-full shadow-orange"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xs border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.552!2d72.31673!3d31.27807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f7a7d6d7b6b6d%3A0x0!2zMzHCsDE2JzQxLjAiTiA3MsKwMTknMDAuMiJF!5e0!3m2!1sen!2spk!4v1680000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Meet And Eat Location"
            />
            <div className="bg-white p-4 border-t border-gray-100">
              <p className="font-poppins text-sm text-gray-600">
                <MapPin className="w-4 h-4 inline text-[#F97316] mr-1" />
                Opposite DHQ Hospital, Rehmat Street, Gojra Road, Sadar, Jhang,
                Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
