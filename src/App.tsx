/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Plus,
  Stethoscope,
  HeartPulse,
  Award,
  Shield,
  Zap,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Components ---

const WHATSAPP_URL = "https://wa.me/+918209646869";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Dr. Soni', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-deep-navy text-white flex items-center justify-center rounded-xl shadow-lg">
              <span className="font-display font-bold text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-deep-navy font-display text-lg font-bold tracking-tight leading-none">Whites</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-medical-teal font-bold">Dental Care</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-deep-navy/70 hover:text-medical-teal transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2.5 bg-deep-navy text-white rounded-full text-sm font-semibold hover:bg-medical-teal transition-all shadow-lg shadow-deep-navy/10"
            >
              Book Appointment
            </motion.a>
          </div>

          <button 
            className="lg:hidden text-deep-navy"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-deep-navy text-white flex items-center justify-center rounded-xl">
                  <span className="font-display font-bold text-xl">W</span>
                </div>
                <span className="text-deep-navy font-display text-xl font-bold">Whites</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-deep-navy">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-display font-semibold text-deep-navy"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-deep-navy text-white rounded-2xl font-bold text-lg flex items-center justify-center"
              >
                Book Appointment
              </a>
              <div className="flex justify-center gap-6 text-deep-navy/40">
                <Instagram size={24} />
                <Facebook size={24} />
                <Linkedin size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const heroReviews = [
    "The most painless RCT experience I've ever had in my life.",
    "Dr. Preeti is extremely gentle. Highly recommended for kids!",
    "Honest diagnosis and very reasonable pricing. Best in town.",
    "The clinic is super hygienic. Felt very safe during my treatment."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % heroReviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pure-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-ivory/50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-medical-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-medical-teal/10 px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-medical-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-medical-teal">Premium Dental Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-deep-navy leading-[1.1] mb-8">
            Gentle Dentistry. <br />
            <span className="text-medical-teal italic font-medium">Honest Care.</span> <br />
            Beautiful Smiles.
          </h1>
          <p className="text-lg md:text-xl text-deep-navy/60 mb-10 max-w-xl leading-relaxed">
            Painless, hygienic and affordable dental treatments delivered with precision and compassion by Dr. Preeti Soni.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-deep-navy text-white rounded-full font-bold text-lg hover:bg-medical-teal transition-all shadow-xl shadow-deep-navy/20 flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={20} />
            </a>
            <a 
              href="tel:+918209646869"
              onClick={(e) => {
                window.location.href = "tel:+918209646869";
              }}
              className="px-8 py-4 bg-white text-deep-navy border border-deep-navy/10 rounded-full font-bold text-lg hover:bg-soft-ivory transition-all flex items-center justify-center gap-2"
            >
              Call Now <Phone size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle2 size={18} />, text: "Painless" },
              { icon: <ShieldCheck size={18} />, text: "Hygienic" },
              { icon: <Zap size={18} />, text: "Modern Tech" },
              { icon: <Award size={18} />, text: "Honest Pricing" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-deep-navy/40 uppercase tracking-widest">
                <span className="text-medical-teal">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden luxury-shadow border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909608135-ca29ed974bb9?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Dental Clinic" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Trust Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-soft-ivory w-[280px] hidden md:block overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" className={i === 4 ? "text-yellow-400" : ""} />)}
              </div>
              <span className="text-sm font-bold text-deep-navy">4.8 Rating</span>
            </div>
            <div className="h-[60px] relative">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-deep-navy/60 italic leading-relaxed absolute inset-0"
                >
                  "{heroReviews[currentReview]}"
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Painless RCT",
      desc: "Advanced root canal treatments focused on saving your natural teeth with zero discomfort.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "Cleaning & Scaling",
      desc: "Professional hygiene services to keep your smile bright and your gums healthy.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Caps & Crowns",
      desc: "Durable and aesthetic dental restorations that look and feel like natural teeth.",
      icon: <Award size={32} />
    },
    {
      title: "Tooth Extraction",
      desc: "Gentle and safe extractions, ensuring a smooth recovery process for all ages.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance your natural beauty with smile makeovers, whitening, and veneers.",
      icon: <Sparkles size={32} />
    },
    {
      title: "General Checkups",
      desc: "Comprehensive oral health assessments to prevent issues before they start.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="services" className="py-32 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-medical-teal font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-navy mb-6">Premium Dental Services</h2>
          <p className="text-deep-navy/50 max-w-2xl mx-auto text-lg">
            Experience a new standard of dental care where luxury meets medical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="p-10 rounded-[2.5rem] bg-white border border-deep-navy/5 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-8 bg-soft-ivory w-16 h-16 rounded-2xl flex items-center justify-center text-medical-teal group-hover:bg-medical-teal group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-deep-navy">{service.title}</h3>
              <p className="text-deep-navy/60 leading-relaxed mb-8">
                {service.desc}
              </p>
              <button className="text-medical-teal font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-pure-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden luxury-shadow relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Preeti Soni" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 bg-medical-teal text-white p-10 rounded-[3rem] shadow-2xl z-20 hidden lg:block max-w-xs">
            <h4 className="text-2xl font-display font-bold mb-2">Dr. Preeti Soni</h4>
            <p className="text-white/80 text-sm mb-6">Senior Dental Surgeon</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Award size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest">12+ Years Experience</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-champagne-gold/10 rounded-full blur-3xl -z-10" />
        </div>

        <div>
          <span className="text-medical-teal font-bold uppercase tracking-[0.3em] text-xs mb-6 block">The Heart of Whites</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-navy mb-8 leading-tight">
            Meet Dr. Preeti Soni
          </h2>
          <div className="space-y-6 text-deep-navy/70 text-lg leading-relaxed">
            <p className="font-medium text-deep-navy italic">
              "My goal is to make every patient feel safe, heard, and completely comfortable while receiving world-class dental care."
            </p>
            <p>
              Dr. Preeti Soni is a skilled and meticulous dental surgeon known for her gentle touch and patient-centric approach. With a passion for patient comfort, she has built a reputation for delivering painless RCTs and smooth procedures.
            </p>
            <p>
              She believes in honest diagnosis and ethical treatment, focusing on long-term dental health rather than unnecessary procedures. Her warm nature makes her a favorite among kids and elderly patients alike.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-6">
              {[
                "Painless RCT Specialist",
                "Ethical Treatment",
                "Latest Technology",
                "Kid & Elderly Friendly",
                "Advanced Sterilization",
                "Hygienic Clinic"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-deep-navy">
                  <div className="w-6 h-6 rounded-full bg-medical-teal/10 flex items-center justify-center text-medical-teal">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Painless RCT and capping. Smooth experience. Dr. Preeti is very polite and knowledgeable.",
      author: "Rahul Sharma",
      role: "Patient"
    },
    {
      text: "Doctor is honest and doesn't suggest unnecessary treatments. Best dental care at reasonable price.",
      author: "Anjali Gupta",
      role: "Patient"
    },
    {
      text: "Extremely hygienic clinic with modern equipment. My 82-year-old mother didn't even realize tooth extraction happened.",
      author: "Vikram Singh",
      role: "Patient"
    },
    {
      text: "Professional, polite and extremely skilled. The clinic environment is very reassuring.",
      author: "Priya Verma",
      role: "Patient"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-soft-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-medical-teal font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Patient Stories</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-navy">What Our Patients Say</h2>
          </div>
          <div className="flex items-center gap-6 bg-white p-6 rounded-3xl luxury-shadow border border-deep-navy/5">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" className={i === 4 ? "text-yellow-400" : ""} />)}
            </div>
            <div>
              <p className="text-2xl font-bold text-deep-navy">4.8</p>
              <p className="text-xs font-bold text-deep-navy/40 uppercase tracking-widest">Google Rating</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[3rem] bg-white border border-deep-navy/5 relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-medical-teal/10 absolute top-10 right-10 group-hover:text-medical-teal/20 transition-colors">
                <MessageCircle size={80} fill="currentColor" />
              </div>
              <p className="text-xl text-deep-navy/80 italic mb-10 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="relative z-10">
                <p className="font-bold text-deep-navy text-lg">{review.author}</p>
                <p className="text-xs text-deep-navy/40 uppercase tracking-widest font-bold">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-32 bg-deep-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-medical-teal/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-medical-teal font-bold uppercase tracking-[0.3em] text-xs mb-6 block">The Whites Advantage</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Why Patients Trust <br />
              <span className="text-medical-teal italic">Whites Dental Care</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: "Painless Procedures", desc: "Advanced techniques for maximum comfort.", icon: <HeartPulse /> },
                { title: "Ethical Treatment", desc: "Honest plans with no unnecessary upsells.", icon: <Shield /> },
                { title: "Latest Technology", desc: "Modern digital equipment for precision.", icon: <Zap /> },
                { title: "Advanced Sterilization", desc: "Hospital-grade hygiene protocols.", icon: <ShieldCheck /> },
                { title: "Stress-Free Experience", desc: "Calm environment for anxious patients.", icon: <Sparkles /> },
                { title: "Transparent Pricing", desc: "Affordable care with no hidden costs.", icon: <Award /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-medical-teal">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden border-8 border-white/5 luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Clinic Interior" 
                className="w-full aspect-square object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Achievement */}
            <div className="absolute -top-10 -right-10 bg-medical-teal p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">Sterilization Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <section id="contact" className="py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-soft-ivory rounded-[4rem] overflow-hidden grid lg:grid-cols-2 luxury-shadow border border-deep-navy/5">
          <div className="p-12 md:p-20">
            <span className="text-medical-teal font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-deep-navy mb-8">Your Smile Deserves <br />Gentle Care</h2>
            <p className="text-deep-navy/50 mb-12 text-lg">Book your visit today and experience stress-free dentistry.</p>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-deep-navy/40 ml-2">Full Name</label>
                  <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-medical-teal outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-deep-navy/40 ml-2">Phone Number</label>
                  <input type="tel" className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-medical-teal outline-none transition-all shadow-sm" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-deep-navy/40 ml-2">Treatment Needed</label>
                <select className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-medical-teal outline-none transition-all shadow-sm appearance-none">
                  <option>General Checkup</option>
                  <option>Painless RCT</option>
                  <option>Teeth Cleaning</option>
                  <option>Dental Caps</option>
                  <option>Cosmetic Dentistry</option>
                </select>
              </div>
              <button 
                type="button"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="w-full bg-deep-navy text-white py-6 rounded-2xl font-bold text-lg hover:bg-medical-teal transition-all shadow-xl shadow-deep-navy/20"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
          
          <div className="bg-deep-navy p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-medical-teal/5 -z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-12">Contact Information</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-medical-teal">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Call Us</p>
                    <a 
                      href="tel:+918209646869" 
                      onClick={(e) => {
                        window.location.href = "tel:+918209646869";
                      }}
                      className="text-xl font-bold hover:text-medical-teal transition-colors"
                    >
                      +91 82096 46869
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-medical-teal">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Visit Us</p>
                    <p className="text-xl font-bold leading-relaxed">Pocket C1, New Krishna Park, <br />Vikaspuri, New Delhi, 110018</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-medical-teal">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Working Hours</p>
                    <p className="text-xl font-bold">Mon - Sat: 9:30 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/10 relative z-10">
              <div className="flex gap-4">
                <button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-teal transition-all">
                  <MessageCircle size={24} />
                </button>
                <button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-teal transition-all">
                  <Instagram size={24} />
                </button>
                <button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-teal transition-all">
                  <Facebook size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-pure-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-deep-navy text-white flex items-center justify-center rounded-xl">
                <span className="font-display font-bold text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-deep-navy font-display text-xl font-bold tracking-tight leading-none">Whites</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-medical-teal font-bold">Dental Care</span>
              </div>
            </div>
            <p className="text-deep-navy/50 max-w-md text-lg leading-relaxed">
              Redefining dental care with a focus on luxury, hygiene, and painless procedures. Dr. Preeti Soni's commitment to honest dentistry ensures your smile is in the best hands.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-deep-navy mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-deep-navy/60 font-medium">
              <li><a href="#services" className="hover:text-medical-teal transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-medical-teal transition-colors">About Dr. Soni</a></li>
              <li><a href="#why-us" className="hover:text-medical-teal transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-medical-teal transition-colors">Patient Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-deep-navy mb-8 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-deep-navy/60 font-medium">
              <li><a href="#" className="hover:text-medical-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-medical-teal transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-deep-navy/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-deep-navy/30 text-sm font-medium">© 2026 WHITES DENTAL CARE. All rights reserved.</p>
          <div className="flex gap-8 text-deep-navy/30 text-sm font-bold uppercase tracking-widest">
            <span>Designed for Excellence</span>
            <span>Healthcare First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] w-[90%] max-w-md md:hidden">
      <div className="bg-deep-navy text-white p-2 rounded-3xl shadow-2xl flex gap-2">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-medical-teal text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Calendar size={20} /> Book Now
        </a>
        <a 
          href="tel:+918209646869"
          onClick={(e) => {
            window.location.href = "tel:+918209646869";
          }}
          className="w-16 bg-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center"
        >
          <Phone size={20} />
        </a>
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <WhyUs />
      <BookingForm />
      <Footer />
      <StickyCTA />
      
      {/* Desktop Floating WhatsApp */}
      <motion.a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 text-white rounded-full hidden md:flex items-center justify-center shadow-2xl z-50"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
