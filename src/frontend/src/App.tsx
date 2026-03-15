import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Baby,
  Building2,
  CalendarCheck,
  ChevronRight,
  FlaskConical,
  Heart,
  MapPin,
  Menu,
  Package,
  Phone,
  Scissors,
  Sparkles,
  Star,
  Stethoscope,
  TestTube,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Doctors", href: "#doctors", ocid: "nav.doctors.link" },
  { label: "Services", href: "#services", ocid: "nav.services.link" },
  { label: "Laboratory", href: "#laboratory", ocid: "nav.laboratory.link" },
  {
    label: "Medical Store",
    href: "#medical-store",
    ocid: "nav.medical-store.link",
  },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

const DOCTORS = [
  {
    name: "DR RUBINA SOEKARNO",
    credentials: "M.B.B.S D.G.O",
    specialty: "Consultant Gynecologist",
    photo: "/assets/generated/doctor-rubina-new.dim_300x300.jpg",
  },
  {
    name: "DR RAMLA SOEKARNO PUTRI",
    credentials: "M.B.B.S",
    specialty: "General Practitioner",
    photo: "/assets/generated/doctor-ramla.dim_300x300.jpg",
  },
  {
    name: "DR AMEER HAMZA",
    credentials: "",
    specialty: "Consultant Child Specialist",
    photo: "/assets/generated/doctor-ameer.dim_300x300.jpg",
  },
  {
    name: "DR SIDRA AMEER HAMZA",
    credentials: "",
    specialty: "Laser Specialist & Cosmetologist",
    photo: "/assets/generated/doctor-sidra.dim_300x300.jpg",
  },
  {
    name: "DR ABUBAKAR KHALID CH",
    credentials: "",
    specialty: "Physician and Surgeon",
    photo: "/assets/generated/doctor-abubakar.dim_300x300.jpg",
  },
  {
    name: "DR SOBIA ABUBAKAR",
    credentials: "",
    specialty: "Consultant Gynecologist",
    photo: "/assets/generated/doctor-sobia.dim_300x300.jpg",
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Gynecology",
    desc: "Comprehensive women's health including prenatal & postnatal care, family planning, and reproductive health services.",
    badge: "Women's Health",
  },
  {
    icon: Baby,
    title: "Child Care",
    desc: "Expert pediatric consultations, growth monitoring, vaccinations, and newborn care by our dedicated child specialist.",
    badge: "Pediatrics",
  },
  {
    icon: Sparkles,
    title: "Laser & Cosmetology",
    desc: "Professional laser treatments, skin care, and cosmetic procedures for healthy, radiant skin.",
    badge: "Cosmetology",
  },
  {
    icon: Scissors,
    title: "General Surgery",
    desc: "Safe and modern surgical procedures by an experienced physician surgeon in a fully equipped facility.",
    badge: "Surgery",
  },
];

const HIGHLIGHTS = [
  {
    icon: Stethoscope,
    title: "Expert Specialists",
    desc: "A team of board-certified specialists across multiple disciplines.",
  },
  {
    icon: Users,
    title: "Family-Centered Care",
    desc: "Personalized, compassionate care that treats every patient like family.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    desc: "State-of-the-art medical equipment and a clean, safe environment.",
  },
];

const LAB_TESTS = [
  "Complete Blood Count (CBC)",
  "Blood Sugar (Fasting & Random)",
  "Liver Function Tests (LFTs)",
  "Kidney Function Tests (KFTs)",
  "Urine Complete Examination",
  "Thyroid Profile (T3, T4, TSH)",
  "Hepatitis B & C Screening",
  "Pregnancy Test (Urine/Blood)",
  "ESR & CRP",
  "Culture & Sensitivity",
];

const PHARMACY_ITEMS = [
  "Prescription Medicines",
  "Over-the-Counter Drugs",
  "Gynecology & Obstetric Medicines",
  "Pediatric Medicines & Syrups",
  "Vitamins & Supplements",
  "Skin Care & Cosmetic Products",
  "Surgical Supplies & Dressings",
  "Injections & IV Fluids",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Sticky Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <div>
                <p
                  className={`font-display font-bold text-sm leading-tight ${scrolled ? "text-foreground" : "text-white"}`}
                >
                  Soekarno Hospital
                </p>
                <p
                  className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}
                >
                  Mananwala
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  data-ocid={link.ocid}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    scrolled
                      ? "text-foreground hover:text-teal hover:bg-accent"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              className={`md:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-border shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col py-2">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    data-ocid={link.ocid}
                    onClick={() => handleNavClick(link.href)}
                    className="px-6 py-3 text-left text-sm font-medium text-foreground hover:text-teal hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hospital-hero-named.dim_1400x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/85 via-teal/75 to-sky-deep/70" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sky blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs tracking-widest uppercase font-body">
                Mananwala District, Sheikhupura
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
            >
              Soekarno Hospital
              <span className="block text-sky-300 text-2xl sm:text-3xl md:text-4xl mt-1 font-normal tracking-wide">
                Mananwala
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/90 text-2xl sm:text-3xl font-bold mb-4"
              dir="rtl"
              lang="ur"
              style={{
                fontFamily:
                  "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif",
              }}
            >
              سوئیکارنو ہسپتال ماناوالا
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/90 text-xl sm:text-2xl font-display italic mb-3"
            >
              Compassionate Care for Every Family
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body"
            >
              Serving Mananwala District, Sheikhupura with expert medical
              specialists in gynecology, pediatrics, dermatology, and surgery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                data-ocid="hero.appointment.primary_button"
                onClick={() => handleNavClick("#appointment")}
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#0a1f44] font-semibold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book Your Appointment
              </Button>
              <Button
                data-ocid="hero.contact.primary_button"
                onClick={() => handleNavClick("#contact")}
                size="lg"
                className="bg-sky-100 hover:bg-sky-200 text-[#0a1f44] font-semibold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Contact Us
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                onClick={() => handleNavClick("#doctors")}
                size="lg"
                variant="outline"
                className="border-white text-[#0a1f44] bg-white/90 hover:bg-white font-semibold px-8 py-3 text-base"
              >
                Meet Our Doctors
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="oklch(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Our Hospital
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Soekarno Hospital Mananwala is a welcoming multi-specialty
                hospital dedicated to providing quality healthcare to families
                across Mananwala District. Our team of experienced specialists
                covers gynecology, pediatrics, cosmetology, and general surgery
                — all under one roof, delivering compassionate, patient-centered
                care you can trust.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HIGHLIGHTS.map((h) => (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent mx-auto mb-5 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                    <h.icon className="w-7 h-7 text-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {h.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Our Team
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 inline-block bg-red-600 text-white px-6 py-2 rounded-xl">
                Meet Our Doctors
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">
                Dedicated specialists committed to your health and well-being.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOCTORS.map((doctor, i) => (
                <motion.div
                  key={doctor.name}
                  data-ocid={`doctors.item.${i + 1}`}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border text-center group hover:-translate-y-1"
                >
                  <div className="relative mx-auto mb-5 w-24 h-24">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-accent group-hover:border-teal transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-teal flex items-center justify-center border-2 border-white">
                      <Heart className="w-3 h-3 text-white" fill="white" />
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1 leading-tight">
                    {doctor.name}
                  </h3>
                  {doctor.credentials ? (
                    <p className="text-muted-foreground text-xs mb-2">
                      {doctor.credentials}
                    </p>
                  ) : null}
                  <Badge className="bg-accent text-teal border-none text-xs font-semibold">
                    {doctor.specialty}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                What We Offer
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive healthcare services tailored for you and your
                family.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  data-ocid={`services.item.${i + 1}`}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent mb-5 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <Badge className="bg-sky text-teal border-none text-xs font-semibold mb-4">
                    {service.badge}
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infertility & Ultrasound Section */}
      <section id="specialties" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Advanced Care
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Specialized Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert care in fertility treatment and diagnostic imaging under
                one roof.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Infertility Card */}
              <motion.div
                variants={fadeUp}
                data-ocid="specialties.infertility.card"
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-white" fill="white" />
                  </div>
                  <div>
                    <Badge className="bg-white/20 text-white border-none text-xs mb-1">
                      Fertility
                    </Badge>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Infertility Treatment
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    We provide compassionate, evidence-based infertility care
                    for couples facing challenges in conceiving. Our specialist
                    team offers complete evaluation and treatment plans tailored
                    to each patient's needs.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Male & female infertility evaluation",
                      "Hormonal assessment and treatment",
                      "Ovulation induction therapy",
                      "Polycystic Ovary Syndrome (PCOS) management",
                      "Lifestyle counseling for fertility improvement",
                      "Referral for IVF when needed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 w-4 h-4 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-600 block" />
                        </span>
                        <span className="text-pink-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    data-ocid="infertility.appointment.button"
                    onClick={() => handleNavClick("#appointment")}
                    className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold"
                  >
                    <CalendarCheck className="w-4 h-4 mr-2" />
                    Book Fertility Consultation
                  </Button>
                </div>
              </motion.div>

              {/* Ultrasound Card */}
              <motion.div
                variants={fadeUp}
                data-ocid="specialties.ultrasound.card"
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                {/* Red Title Banner at top */}
                <div className="bg-red-600 px-6 py-4 text-center">
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                    Ultrasound Services
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-teal to-sky-deep p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-white/20 text-white border-none text-xs mb-1">
                      Imaging
                    </Badge>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Ultrasound Services
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Our hospital is equipped with modern ultrasound technology
                    for accurate and safe diagnostic imaging. Quick results to
                    support fast clinical decisions for you and your family.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Obstetric ultrasound (pregnancy scans)",
                      "Fetal anomaly & growth scans",
                      "Pelvic & abdominal ultrasound",
                      "Thyroid & neck ultrasound",
                      "Follicular monitoring for fertility",
                      "Same-day reporting available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 w-4 h-4 rounded-full bg-sky-200 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-700 block" />
                        </span>
                        <span className="text-sky-800 font-semibold">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    data-ocid="ultrasound.appointment.button"
                    onClick={() => handleNavClick("#appointment")}
                    className="mt-6 w-full bg-teal hover:bg-teal-dark text-white font-semibold"
                  >
                    <CalendarCheck className="w-4 h-4 mr-2" />
                    Book Ultrasound Scan
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laboratory Facility Section */}
      <section id="laboratory" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-3">
                On-Site Diagnostics
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Laboratory Facility
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Accurate Diagnostics, Fast Results
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              data-ocid="laboratory.card"
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Badge className="bg-white/20 text-white border-none text-xs mb-1">
                    Diagnostics
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-white">
                    In-House Laboratory
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Our state-of-the-art on-site laboratory provides fast and
                  reliable diagnostic testing to support your doctor's clinical
                  decisions. We use modern equipment and follow strict quality
                  standards to ensure precise results, often on the same day. No
                  need to visit a separate lab — everything you need is
                  available right here at Soekarno Hospital.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {LAB_TESTS.map((test) => (
                    <div key={test} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <TestTube className="w-3 h-3 text-indigo-600" />
                      </span>
                      <span className="text-indigo-800 font-medium">
                        {test}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Book Lab Test Call Button */}
                <a
                  href="tel:03040101234"
                  data-ocid="laboratory.call.button"
                  className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md shadow transition-all duration-200 text-base"
                >
                  <Phone className="w-4 h-4" />
                  Book Your Lab Test: 0304-0101234
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internal Medical Store Section */}
      <section id="medical-store" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-3">
                In-House Pharmacy
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Internal Medical Store
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Medicines Available On-Site
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              data-ocid="medical-store.card"
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Badge className="bg-white/20 text-white border-none text-xs mb-1">
                    Pharmacy
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Medical Store
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  For your convenience, Soekarno Hospital has a fully stocked
                  in-house medical store located within the hospital premises.
                  All medicines prescribed by our doctors are readily available
                  on-site, saving you time and ensuring you receive the correct
                  medications without delay. Our pharmacy is staffed by trained
                  professionals who can guide you on proper usage and dosage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {PHARMACY_ITEMS.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 block" />
                      </span>
                      <span className="text-emerald-800 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:03006316378"
                  data-ocid="medical-store.call.button"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-md shadow transition-all duration-200 text-base"
                >
                  <Phone className="w-4 h-4" />
                  Visit Our Pharmacy: 0300-6316378
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Book Appointment CTA Section */}
      <section
        id="appointment"
        className="py-20 md:py-28 bg-gradient-to-br from-teal-dark via-teal to-sky-deep"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp}>
              <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center">
                <CalendarCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Visit Hospital &amp; Book Your Appointment
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Walk in or call us directly to schedule your consultation with
                any of our specialist doctors. We are here to serve you every
                day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:03074131333"
                  data-ocid="appointment.call.button"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal hover:bg-sky font-semibold px-8 py-3 text-base rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call: 0307-4131333
                </a>
                <a
                  href="https://maps.app.goo.gl/P3c9ACEL68mBTFHi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="appointment.location.button"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/15 font-semibold px-8 py-3 text-base rounded-md transition-all duration-200"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {[
                  { label: "OPD Hours", value: "9 AM – 9 PM", sub: "Daily" },
                  {
                    label: "Emergency",
                    value: "24/7",
                    sub: "Always Available",
                  },
                  {
                    label: "Location",
                    value: "Mananwala",
                    sub: "Sheikhupura, Punjab",
                  },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="bg-white/10 rounded-xl px-4 py-5"
                  >
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-display font-bold text-xl">
                      {info.value}
                    </p>
                    <p className="text-white/70 text-sm">{info.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Reach Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                We're here for you. Reach out anytime to schedule a consultation
                or ask any questions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 mb-6 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                  <Phone className="w-8 h-8 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Call Us
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our team is ready to assist you
                </p>
                <a
                  href="tel:03074131333"
                  data-ocid="contact.phone.link"
                  className="text-2xl font-bold text-teal hover:text-teal-dark transition-colors font-body tracking-wide"
                >
                  0307-4131333
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 mb-6 flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Our Location
                </h3>
                <p className="text-muted-foreground text-sm mb-4">Find us at</p>
                <div className="text-center">
                  <p className="text-foreground font-semibold text-lg leading-snug">
                    Mananwala District
                  </p>
                  <p className="text-muted-foreground">
                    Sheikhupura, Punjab, Pakistan
                  </p>
                </div>
                <div className="mt-6 w-full rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://maps.google.com/maps?q=Mananwala,+Sheikhupura,+Punjab,+Pakistan&output=embed"
                    className="w-full h-48 rounded-xl border-0"
                    loading="lazy"
                    allowFullScreen
                    title="Soekarno Hospital Mananwala location map"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/P3c9ACEL68mBTFHi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-teal hover:text-teal-dark text-sm font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">
                  Soekarno Hospital
                </p>
                <p className="text-white/70 text-sm">Mananwala</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Soekarno Hospital Mananwala. All
                rights reserved.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-xs">
                Built with{" "}
                <Heart
                  className="w-3 h-3 inline text-red-300"
                  fill="currentColor"
                />{" "}
                using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>

          {/* Management Credit — Enhanced */}
          <div className="mt-10 pt-8 border-t border-red-400 bg-red-600 rounded-2xl px-6 py-8">
            <div className="flex flex-col items-center gap-4">
              {/* Decorative stars row */}
              <div className="flex items-center gap-3">
                <span className="block w-16 h-px bg-red-200" />
                <Star className="w-4 h-4 text-white" fill="currentColor" />
                <Star className="w-5 h-5 text-white" fill="currentColor" />
                <Star className="w-4 h-4 text-white" fill="currentColor" />
                <span className="block w-16 h-px bg-red-200" />
              </div>

              {/* Label */}
              <p className="text-red-100 text-xs tracking-[0.3em] uppercase font-semibold">
                Management By
              </p>

              {/* Name badge */}
              <div className="relative inline-flex items-center gap-3 bg-red-700 border border-red-400 rounded-2xl px-8 py-4 backdrop-blur-sm shadow-lg">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" fill="currentColor" />
                </div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide">
                  KHALID ZUBAIR AHMED SOEKARNO
                </p>
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" fill="currentColor" />
                </div>
              </div>

              {/* Bottom decorative line */}
              <div className="flex items-center gap-3">
                <span className="block w-24 h-px bg-red-400" />
                <span className="block w-2 h-2 rounded-full bg-red-300" />
                <span className="block w-24 h-px bg-red-400" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        {/* Tooltip label */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
          Call Us: 0307-4131333
        </span>
        {/* Pulse ring */}
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-green-400 opacity-40 animate-ping" />
        {/* Call button */}
        <a
          href="tel:03074131333"
          data-ocid="floating.call.button"
          aria-label="Call Soekarno Hospital"
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 active:scale-95 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200"
        >
          <Phone className="w-6 h-6 text-white" fill="white" />
        </a>
      </div>
    </div>
  );
}
