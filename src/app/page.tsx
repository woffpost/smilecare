"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Calendar,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    title: "Teeth Whitening",
    description: "Professional in-office whitening — up to 8 shades brighter in one session.",
    price: "from €199",
    img: "https://images.unsplash.com/photo-1588776814546-1ffbb79c485c?w=600&q=80",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking implants that restore full function and confidence.",
    price: "from €899",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    title: "Orthodontics",
    description: "Clear aligners and modern braces for teens and adults. Discreet and effective.",
    price: "from €1,499",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    title: "Preventive Care",
    description: "Routine check-ups and professional cleaning to keep your smile healthy for life.",
    price: "from €79",
    img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
  },
  {
    title: "Porcelain Veneers",
    description: "Ultra-thin veneers crafted to perfection for a flawless, natural appearance.",
    price: "from €350",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  },
  {
    title: "Emergency Care",
    description: "Same-day emergency appointments. We are here when you need us most.",
    price: "from €89",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
];

const team = [
  {
    name: "Dr. Michael Weber",
    role: "Lead Dentist & Implantologist",
    experience: "15 years",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dr. Sarah Klein",
    role: "Orthodontist",
    experience: "10 years",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dr. Jonas Bauer",
    role: "Cosmetic Dentist",
    experience: "8 years",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
];

const testimonials = [
  {
    name: "Maria S.",
    location: "Munich",
    text: "I was terrified of dentists, but the team here changed everything. My implants look completely natural. I finally smile with confidence.",
    rating: 5,
    treatment: "Dental Implants",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Thomas K.",
    location: "Stuttgart",
    text: "Professional, modern, and completely painless. The whitening results exceeded all my expectations. Highly recommended to everyone.",
    rating: 5,
    treatment: "Teeth Whitening",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Anna L.",
    location: "Munich",
    text: "My daughter loves coming here. The team is patient, kind, and she no longer fears the dentist. We found our clinic for life.",
    rating: 5,
    treatment: "Preventive Care",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
];

const timeSlots = ["9:00", "9:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "15:30", "16:00"];

export default function DentalDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingDone, setBookingDone] = useState(false);

  function openBooking(docIndex?: number) {
    setSelectedDoc(docIndex ?? null);
    setSelectedTime(null);
    setBookingDone(false);
    setBookingOpen(true);
  }

  function submitBooking() {
    setBookingDone(true);
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Booking modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setBookingOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">Book an Appointment</h3>
                {selectedDoc !== null && (
                  <p className="text-sm text-[#1B4F72]">with {team[selectedDoc].name}</p>
                )}
              </div>
              <button onClick={() => setBookingOpen(false)} className="text-gray-400 hover:text-gray-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingDone ? (
              <div className="px-6 py-12 text-center">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Appointment confirmed!</h4>
                <p className="text-gray-400 text-sm mb-6">
                  We've sent a confirmation to your email. Our team will call you 24h before your visit.
                </p>
                <Button className="bg-[#1B4F72] text-white" onClick={() => setBookingOpen(false)}>
                  Close
                </Button>
              </div>
            ) : (
              <div className="px-6 py-5 space-y-4">
                {selectedDoc === null && (
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Select a doctor</label>
                    <select
                      className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-800 outline-none focus:border-[#1B4F72]"
                      onChange={(e) => setSelectedDoc(e.target.value ? Number(e.target.value) : null)}
                      defaultValue=""
                    >
                      <option value="">Any available doctor</option>
                      {team.map((d, i) => <option key={i} value={i}>{d.name} — {d.role}</option>)}
                    </select>
                  </div>
                )}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Treatment</label>
                  <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-800 outline-none focus:border-[#1B4F72]">
                    <option>Free Consultation</option>
                    {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Your name</label>
                    <input placeholder="Anna Müller" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-[#1B4F72]" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Phone</label>
                    <input placeholder="+49 89..." className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-[#1B4F72]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Preferred date</label>
                  <input type="date" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-800 outline-none focus:border-[#1B4F72]" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">Available times</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className="text-xs font-semibold h-9 px-4 rounded-lg border transition-all"
                        style={selectedTime === t
                          ? { backgroundColor: "#1B4F72", color: "white", borderColor: "#1B4F72" }
                          : { backgroundColor: "white", color: "#374151", borderColor: "#E5E7EB" }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full bg-[#1B4F72] hover:bg-[#154360] text-white h-11 font-semibold mt-2"
                  onClick={submitBooking}
                >
                  <Calendar className="mr-2 w-4 h-4" /> Confirm Appointment
                </Button>
                <p className="text-xs text-gray-400 text-center">Free cancellation up to 24h before your appointment.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 bg-[#1B4F72] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">SC</span>
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900 tracking-tight">SmileCare</span>
              <span className="text-gray-400 text-sm ml-1">Clinic</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#team" className="hover:text-gray-900 transition-colors">Team</a>
            <a href="#testimonials" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+498912345678" className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Phone className="w-4 h-4" />
              +49 89 123 456 78
            </a>
            <Button className="bg-[#1B4F72] hover:bg-[#154360] text-white text-sm px-5 py-2 h-9 hidden md:inline-flex" onClick={() => openBooking()}>
              Book Appointment
            </Button>
            <button className="md:hidden p-1 text-gray-700" onClick={() => setMobileOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="font-bold text-lg text-gray-900">SmileCare Clinic</span>
            <button onClick={() => setMobileOpen(false)} className="text-gray-500"><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6 gap-0">
            {["Services", "Team", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-gray-900 py-4 border-b border-gray-100 hover:text-[#1B4F72] transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <Button className="w-full bg-[#1B4F72] text-white font-bold h-12" onClick={() => { setMobileOpen(false); openBooking(); }}>Book Appointment</Button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-24 min-h-screen flex items-center bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-6 w-full py-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EBF5FB] text-[#1B4F72] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
              <span className="w-2 h-2 bg-[#1B4F72] rounded-full" />
              Premium Dental Care · Munich, Germany
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              The smile you{" "}
              <span className="text-[#1B4F72]">deserve</span>{" "}
              starts here.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
              Modern dentistry with a gentle touch. We combine the latest technology
              with compassionate care — because your comfort matters as much as your smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button size="lg" className="bg-[#1B4F72] hover:bg-[#154360] text-white h-13 px-8 text-base font-semibold rounded-xl" onClick={() => openBooking()}>
                <Calendar className="mr-2 w-4 h-4" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                View Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              {[
                { value: "12+", label: "Years experience" },
                { value: "8,400+", label: "Happy patients" },
                { value: "4.9★", label: "Google rating" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[580px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=85"
                alt="SmileCare Dental Clinic"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F72]/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t, i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white relative">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">Trusted by <strong className="text-gray-900">8,400+</strong> patients</div>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute top-6 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
              <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <div className="text-xs font-semibold text-gray-900 text-center">Certified</div>
              <div className="text-xs text-gray-400 text-center">Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[#1B4F72] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl font-bold text-gray-900 max-w-sm leading-tight">
                Comprehensive dental services
              </h2>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                From your first check-up to advanced cosmetic procedures — all the care your smile needs, in one place.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group cursor-pointer hover:shadow-md transition-shadow rounded-2xl p-1">
                <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1B4F72]/20 group-hover:bg-[#1B4F72]/10 transition-colors" />
                  <div className="absolute bottom-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-semibold text-[#1B4F72]">
                    {service.price}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-[#1B4F72] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-4">Why SmileCare</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Dentistry that puts you first
            </h2>
            <p className="text-blue-100 leading-relaxed mb-10">
              We know dental visits can feel stressful. That is why every detail of our clinic — from the technology we use to the way we communicate — is designed around your comfort and confidence.
            </p>
            <div className="space-y-4">
              {[
                "State-of-the-art digital X-ray and 3D scanning",
                "Sedation options for anxious patients",
                "Transparent pricing — no hidden fees",
                "5-year guarantee on all major treatments",
                "Same-day emergency appointments available",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle className="w-5 h-5 text-sky-300 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[440px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85"
              alt="Modern dental clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1B4F72] text-sm font-semibold uppercase tracking-widest mb-3">Our Specialists</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet your dental team</h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm">Experienced, caring professionals dedicated to your long-term dental health.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#1B4F72] text-sm">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-1 mb-4">{member.experience} of experience</p>
                  <button
                    onClick={() => openBooking(i)}
                    className="w-full h-9 rounded-xl text-xs font-semibold border border-[#1B4F72] text-[#1B4F72] hover:bg-[#1B4F72] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book with {member.name.split(" ")[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1B4F72] text-sm font-semibold uppercase tracking-widest mb-3">Patient Reviews</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">What our patients say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-gray-500 text-sm">4.9 out of 5 · 340+ Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.treatment} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready for your best smile?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 20-minute consultation. No pressure, just an honest conversation about your dental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#1B4F72] hover:bg-[#154360] text-white h-12 px-8 font-semibold rounded-xl" onClick={() => openBooking()}>
              <Calendar className="mr-2 w-4 h-4" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-gray-200 rounded-xl">
              <Phone className="mr-2 w-4 h-4" />
              +49 89 123 456 78
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#1B4F72] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">SC</span>
              </div>
              <span className="font-bold text-gray-900">SmileCare Clinic</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium dental care in the heart of Munich. Your health, your smile, our passion.
            </p>
          </div>
          {[
            {
              icon: <MapPin className="w-4 h-4 text-[#1B4F72]" />,
              title: "Address",
              lines: ["Maximilianstraße 42", "80539 Munich, Germany"],
            },
            {
              icon: <Clock className="w-4 h-4 text-[#1B4F72]" />,
              title: "Hours",
              lines: ["Mon–Fri: 8:00 – 19:00", "Sat: 9:00 – 14:00"],
            },
            {
              icon: <Mail className="w-4 h-4 text-[#1B4F72]" />,
              title: "Contact",
              lines: ["+49 89 123 456 78", "hello@smilecare.de"],
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="font-semibold text-gray-900 text-sm">{item.title}</span>
              </div>
              {item.lines.map((line, j) => (
                <p key={j} className="text-gray-400 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <span>© 2026 SmileCare Clinic Munich. All rights reserved.</span>
          <span>
            Demo site —{" "}
            <a href="/" className="text-gray-400 hover:text-white transition-colors">
              built by Vladimir Rusacov
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
