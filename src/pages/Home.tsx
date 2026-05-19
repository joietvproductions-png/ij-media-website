import { motion } from 'framer-motion';
import { Play, ArrowRight, GraduationCap, Briefcase, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import StackSection from '../components/StackSection';
import Counter from '../components/Counter';

const Home = () => {
  const featuredProjects = [
    { title: "Voices She Carries", category: "SOCIAL ISSUE", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
    { title: "Between the Silence", category: "MENTAL HEALTH", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800" },
    { title: "Lagos After Dark", category: "DOCUMENTARY", image: "https://images.unsplash.com/photo-1594132049102-3c3066037e96?auto=format&fit=crop&q=80&w=800" },
  ];

  const stats = [
    { label: "DOCUMENTARIES", end: 10, suffix: "+" },
    { label: "VIEWS", end: 500, suffix: "K+" },
    { label: "NGO PARTNERS", end: 5 },
    { label: "STATES COVERED", end: 3 },
  ];

  const services = [
    { title: "Documentary", desc: "Long-form films built on rigorous reporting and cinematic craft.", icon: Film },
    { title: "Corporate", desc: "Brand films, impact reports and campaign videos for partners.", icon: Briefcase },
    { title: "Training", desc: "Workshops for young storytellers across Nigeria.", icon: GraduationCap },
  ];

  const totalSections = 5;

  return (
    <div className="overflow-x-hidden">
      {/* Hero — gradient animated background */}
      <StackSection index={0} total={totalSections} bgColor="gradient-bg-animated grain relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604431696980-07e518647c95?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnightViolet/40 to-midnightViolet" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-6 text-center max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-label">
              Nigerian Documentary Studio
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-8 leading-[1.05]"
            >
              Amplify the Untold <br />
              <span className="text-hotRose italic">Stories of Nigeria.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-softWhite/70 max-w-2xl mx-auto mb-12"
            >
              We craft high-impact documentaries that challenge narratives and drive social change.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="btn-outline">
                <Play size={16} /> Watch Showreel
              </button>
              <Link to="/contact" className="btn-primary">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </StackSection>

      {/* Featured Stories */}
      <StackSection index={1} total={totalSections} bgColor="bg-pitchBlack">
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="section-label">Featured</p>
              <h2 className="text-4xl md:text-5xl font-syne font-bold">Stories that move.</h2>
            </div>
            <Link to="/works" className="text-softWhite/70 hover:text-hotRose flex items-center gap-2 group">
              View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer card-hover"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 gradient-card" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-cerulean text-xs tracking-[0.2em] font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-syne font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackSection>

      {/* Mission */}
      <StackSection index={2} total={totalSections} bgColor="bg-frostedBlue">
        <div className="container mx-auto px-6 py-32 min-h-screen flex flex-col justify-center text-pitchBlack text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <p className="text-cerulean italic text-lg mb-6 font-serif-italic">Our Mission</p>
            <p className="text-4xl md:text-6xl leading-tight mb-10 font-syne font-bold">
              We Don't Just Tell Stories. <br />
              <span className="text-hotRose">We Ignite Change.</span>
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border-b border-pitchBlack/60 pb-1 hover:text-hotRose hover:border-hotRose transition-all text-sm">
              Learn more about us <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </StackSection>

      {/* Stats — with Counter */}
      <StackSection index={3} total={totalSections} bgColor="bg-midnightViolet">
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center text-softWhite">
          <div className="text-center mb-20">
            <p className="section-label">By The Numbers</p>
            <h2 className="text-4xl md:text-5xl font-syne font-bold">Our impact in motion.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-syne font-bold text-hotRose mb-3">
                  <Counter end={stat.end} suffix={stat.suffix || ''} />
                </div>
                <div className="text-xs text-softWhite/50 uppercase tracking-[0.25em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackSection>

      {/* Services — Glassmorphism Cards */}
      <StackSection index={4} total={totalSections} bgColor="bg-pitchBlack">
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
          <div className="mb-16">
            <p className="section-label">What we do</p>
            <h2 className="text-4xl md:text-5xl font-syne font-bold">Built for stories that matter.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-3xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-hotRose/10 rounded-full flex items-center justify-center text-hotRose mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-syne font-bold mb-4">{service.title}</h3>
                <p className="text-softWhite/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </StackSection>
    </div>
  );
};

export default Home;