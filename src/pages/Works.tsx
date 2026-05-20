import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, ArrowRight, X, Search, FileText, Camera, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import StackSection from '../components/StackSection';
import PageTransition from '../components/PageTransition';
import Particles from '../components/Particles';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const filters = ['All', 'Documentary', 'Short Film', 'Social Issue', 'Corporate'];

  const projects = [
    { title: "Shadows of the City", category: "Documentary", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" },
    { title: "The Blue Room", category: "Short Film", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" },
    { title: "Justice for All", category: "Social Issue", image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=800" },
    { title: "Tech in Lagos", category: "Corporate", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
    { title: "Breaking Silence", category: "Social Issue", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" },
    { title: "Future Roots", category: "Documentary", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
  ];

  const btsImages = [
    "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800",
  ];

  const processSteps = [
    { number: "01", title: "Research", desc: "We dive deep into the story — interviewing experts, communities, and stakeholders to uncover the truth that needs telling.", icon: Search },
    { number: "02", title: "Pre-Production", desc: "Script development, location scouting, ethical clearances, and partnership building with NGOs and subject communities.", icon: FileText },
    { number: "03", title: "Filming", desc: "Mobile-first cinematic capture using lightweight gear to maintain intimacy and authenticity with subjects.", icon: Camera },
    { number: "04", title: "Distribution", desc: "Multi-platform release strategy — from social media to film festivals to policy briefings — to maximize impact.", icon: Megaphone },
  ];

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  const totalSections = 6;
  const showreelVideoId = "dQw4w9WgXcQ";

  return (
    <PageTransition>
      <div className="overflow-x-hidden">
        {/* Hero */}
        <StackSection index={0} total={totalSections} bgColor="gradient-bg-animated grain relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnightViolet/40 to-midnightViolet" />
          <Particles count={40} color="bg-hotRose" />
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
                Our Works
              </motion.p>
              <AnimatedText 
                text="Stories that move."
                highlightWords={['move.']}
                highlightClass="text-hotRose italic"
                delay={0.3}
                className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-6 leading-[1.05]"
              />
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className="text-softWhite/70 text-lg max-w-2xl mx-auto mb-10"
              >
                Stories that move minds, shift culture, and demand action.
              </motion.p>

              {/* ✨ Magnetic Watch Showreel Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
              >
                <MagneticButton 
                  onClick={() => setIsVideoOpen(true)}
                  className="group inline-flex items-center gap-4 bg-hotRose text-softWhite pl-2 pr-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-hotRose/30"
                  strength={0.4}
                >
                  <span className="w-12 h-12 bg-softWhite rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-hotRose ml-0.5" fill="currentColor" />
                  </span>
                  Watch Our Showreel
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </StackSection>

        {/* Projects Grid */}
        <StackSection index={1} total={totalSections} bgColor="bg-pitchBlack">
          <div className="container mx-auto px-6 py-24 min-h-screen">
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {filters.map((filter, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-hotRose text-softWhite shadow-lg shadow-hotRose/30'
                      : 'glass-card text-softWhite/70 hover:text-softWhite'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer card-hover"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 gradient-card" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-cerulean text-xs tracking-[0.2em] font-semibold mb-2 uppercase">{project.category}</p>
                    <h3 className="text-2xl font-syne font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-hotRose rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </StackSection>

        {/* Process — How We Work */}
        <StackSection index={2} total={totalSections} bgColor="bg-frostedBlue">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center text-pitchBlack">
            <div className="text-center mb-20">
              <p className="text-cerulean uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our Process</p>
              <AnimatedText 
                text="How we bring stories to life."
                highlightWords={['life.']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold"
              />
              <p className="text-pitchBlack/60 text-lg mt-6 max-w-2xl mx-auto">
                Every documentary follows the same rigorous four-step process — from initial research to global distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="absolute -top-6 -right-2 text-7xl font-syne font-bold text-hotRose/10 select-none">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-hotRose rounded-full flex items-center justify-center mb-6 text-softWhite shadow-lg shadow-hotRose/30 group-hover:scale-110 transition-transform">
                    <step.icon size={24} />
                  </div>
                  <p className="text-cerulean text-xs tracking-[0.2em] font-semibold mb-2">STEP {step.number}</p>
                  <h3 className="text-2xl font-syne font-bold mb-3">{step.title}</h3>
                  <p className="text-pitchBlack/70 leading-relaxed text-sm">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-hotRose/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </StackSection>

        {/* Featured Spotlight */}
        <StackSection index={3} total={totalSections} bgColor="bg-midnightViolet">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="relative aspect-video rounded-3xl overflow-hidden bg-black/40 flex items-center justify-center group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <img src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=1200" alt="Featured" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative z-10 w-20 h-20 bg-hotRose rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-hotRose/40">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="section-label">Major Film</p>
                <AnimatedText 
                  text="The Silent Struggle: Mental Health in Lagos"
                  highlightWords={['Lagos']}
                  highlightClass="text-hotRose italic"
                  className="text-4xl md:text-5xl font-syne font-bold mb-6"
                />
                <p className="text-softWhite/70 text-lg leading-relaxed mb-8">
                  An investigative documentary into the crumbling mental health infrastructure in Nigeria's commercial capital, told through the eyes of those living through it.
                </p>
                <div className="space-y-3 text-sm">
                  <p><span className="text-hotRose font-semibold">Director:</span> <span className="text-softWhite/80">Joy Karenate-Egbuson</span></p>
                  <p><span className="text-hotRose font-semibold">Released:</span> <span className="text-softWhite/80">2024</span></p>
                  <p><span className="text-hotRose font-semibold">Runtime:</span> <span className="text-softWhite/80">42 Minutes</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </StackSection>

        {/* Behind The Scenes */}
        <StackSection index={4} total={totalSections} bgColor="bg-pitchBlack">
          <div className="py-24 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 mb-12">
              <p className="section-label">Behind The Scenes</p>
              <AnimatedText 
                text="The moments between the moments."
                highlightWords={['moments.']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold"
              />
            </div>
                  <div className="flex gap-6 overflow-x-auto px-6 pb-6 scrollbar-hide">
            {btsImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[400px] h-[280px] rounded-3xl overflow-hidden cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`BTS ${i+1}`} 
                  loading="lazy" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700 animate-slow-pan"
                  style={{
                    animationDelay: `${i * -5}s`,
                  }}
                />
              </motion.div>
            ))}
          </div>
          </div>
        </StackSection>

        {/* CTA */}
        <StackSection index={5} total={totalSections} bgColor="bg-hotRose">
          <div className="container mx-auto px-6 py-32 min-h-[50vh] flex flex-col md:flex-row justify-between items-center gap-8 text-softWhite">
            <div>
              <p className="text-softWhite/70 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Collaborate</p>
              <AnimatedText 
                text="Want to collaborate on a project?"
                highlightWords={['project?']}
                highlightClass="italic"
                className="text-4xl md:text-6xl font-syne font-bold leading-tight"
              />
            </div>
            {/* ✨ Magnetic CTA Button */}
            <MagneticButton as="div" strength={0.5}>
              <Link to="/contact" className="bg-pitchBlack text-softWhite px-8 py-4 rounded-full font-semibold hover:bg-midnightViolet transition-all inline-flex items-center gap-2 whitespace-nowrap">
                Let's Talk <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </StackSection>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 z-[9999] bg-pitchBlack/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl aspect-video bg-pitchBlack rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-14 right-0 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-hotRose rounded-full flex items-center justify-center text-softWhite transition-all duration-300 z-10 group"
                  aria-label="Close video"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${showreelVideoId}?autoplay=1&rel=0`}
                  title="IJ Media Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Works;