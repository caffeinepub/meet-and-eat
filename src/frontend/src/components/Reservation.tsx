import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const timeSlots: string[] = [];
for (let h = 12; h <= 24; h++) {
  const hh = h === 24 ? 0 : h;
  const label12 = hh === 0 ? "12" : hh > 12 ? String(hh - 12) : String(hh);
  const ampm = hh < 12 ? "AM" : "PM";
  timeSlots.push(`${label12}:00 ${ampm}`);
  if (h < 24) timeSlots.push(`${label12}:30 ${ampm}`);
}

export default function Reservation() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.makeReservation(
        form.name,
        form.phone,
        form.date,
        form.time,
        BigInt(Number.parseInt(form.guests)),
        form.notes,
      );
      toast.success("Reservation confirmed! We'll call you shortly.");
      setForm({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        notes: "",
      });
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-oswald font-semibold text-sm tracking-widest uppercase mb-3">
            Book a Table
          </p>
          <h2
            className="font-oswald font-bold text-[#111827]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Make a <span className="text-[#F97316]">Reservation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-oswald font-bold text-[#111827] text-xl mb-6">
              Table Reservation
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="reservation.modal"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="res-name"
                    className="font-poppins text-sm text-gray-700"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="res-name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                    data-ocid="reservation.input"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="res-phone"
                    className="font-poppins text-sm text-gray-700"
                  >
                    Phone *
                  </Label>
                  <Input
                    id="res-phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    required
                    data-ocid="reservation.input"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="res-date"
                    className="font-poppins text-sm text-gray-700"
                  >
                    Date *
                  </Label>
                  <Input
                    id="res-date"
                    type="date"
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    required
                    data-ocid="reservation.input"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="font-poppins text-sm text-gray-700">
                    Time *
                  </Label>
                  <Select
                    value={form.time}
                    onValueChange={(v) => handleChange("time", v)}
                  >
                    <SelectTrigger
                      data-ocid="reservation.select"
                      className="mt-1"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="font-poppins text-sm text-gray-700">
                  Guests *
                </Label>
                <Select
                  value={form.guests}
                  onValueChange={(v) => handleChange("guests", v)}
                >
                  <SelectTrigger
                    data-ocid="reservation.select"
                    className="mt-1"
                  >
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => String(i + 1)).map(
                      (n) => (
                        <SelectItem key={n} value={n}>
                          {n} {n === "1" ? "Guest" : "Guests"}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="res-notes"
                  className="font-poppins text-sm text-gray-700"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="res-notes"
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Any dietary requirements or special requests..."
                  data-ocid="reservation.textarea"
                  className="mt-1 resize-none"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                data-ocid="reservation.submit_button"
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-oswald font-semibold text-base py-3 rounded-full shadow-orange"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading ? "Confirming..." : "Confirm Reservation"}
              </Button>
            </form>
          </div>

          {/* WhatsApp Order Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0f0a00] rounded-2xl p-8 text-white">
              <h3 className="font-oswald font-bold text-white text-xl mb-4">
                Order via WhatsApp
              </h3>
              <p className="text-white/70 font-poppins text-sm mb-6">
                Prefer to order directly? Chat with us on WhatsApp for quick
                orders and instant confirmation.
              </p>
              <a
                href="https://wa.me/923064168167?text=Hi%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="reservation.primary_button"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-green-600 text-white font-oswald font-bold text-lg py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6"
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

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h4 className="font-oswald font-bold text-[#111827] text-base mb-4">
                Delivery Information
              </h4>
              <ul className="space-y-3 font-poppins text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#F97316]">🚴</span> Free home delivery
                  in 25–35 minutes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F97316]">📞</span> Order:{" "}
                  <a
                    href="tel:+923106507222"
                    className="text-[#F97316] font-medium hover:underline"
                  >
                    0310-6507222
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F97316]">📞</span> Main:{" "}
                  <a
                    href="tel:+923064168167"
                    className="text-[#F97316] font-medium hover:underline"
                  >
                    0306-4168167
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F97316]">🕐</span> Open Daily: 12:00
                  PM – Late Evening
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-xs text-gray-500 font-poppins font-medium mb-2">
                  PAYMENT METHODS
                </p>
                <div className="flex flex-wrap gap-2">
                  {["EasyPaisa", "JazzCash", "Nayapay", "Cash"].map((p) => (
                    <span
                      key={p}
                      className="bg-white border border-orange-200 text-[#F97316] font-poppins font-medium text-xs px-3 py-1 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
