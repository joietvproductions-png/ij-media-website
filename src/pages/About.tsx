import { motion } from 'framer-motion';
import { Heart, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StackSection from '../components/StackSection';
import PageTransition from '../components/PageTransition';
import Particles from '../components/Particles';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';


const About = () => {
  const values = [
    { title: "Authenticity First", desc: "Real stories, real people, no filters. We prioritize the truth of the experience.", icon: Heart },
    { title: "Mobile Agility", desc: "Production that meets digital culture where it lives — on the screens in our hands.", icon: Zap },
    { title: "Impact Over Viral", desc: "Metrics matter, but policy reform and social change are our true benchmarks.", icon: Globe },
  ];

  const founders = [
    { 
      name: "Joy Karenate-Egbuson", 
      title: "Co-Founder & Creative Lead", 
      bio: "Filmmaker and editor whose work has screened across Africa. Obsessed with the frame, the cut, and the silence between them.", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Ifunanya Nwakwesi", 
      title: "Co-Founder & Strategy Lead", 
      bio: "Journalist-turned-producer connecting our films with the NGOs, agencies and audiences that turn stories into action.", 
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const totalSections = 5;

  return (
    <PageTransition>
      <div className="overflow-x-hidden">
        {/* Hero — Animated gradient */}
        <StackSection index={0} total={totalSections} bgColor="gradient-bg-animated grain relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnightViolet/50 to-midnightViolet" />
          <Particles count={30} color="bg-cerulean" />
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-6 text-center max-w-5xl">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="section-label">
                About Us
              </motion.p>
              <AnimatedText 
                text="We Don't Just Document Nigeria. We Amplify It."
                highlightWords={['Amplify']}
                highlightClass="text-hotRose italic"
                delay={0.3}
                className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-8 leading-[1.05]"
              />
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="text-softWhite/70 text-lg md:text-xl max-w-2xl mx-auto"
              >
                A youth-led production company bridging journalistic integrity with digital culture.
              </motion.p>
            </div>
          </div>
        </StackSection>

        {/* The Mission */}
        <StackSection index={1} total={totalSections} bgColor="bg-pitchBlack">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="section-label">Our Why</p>
                <AnimatedText 
                  text="The reason we tell these stories."
                  highlightWords={['stories.']}
                  highlightClass="text-hotRose italic"
                  className="text-4xl md:text-6xl font-syne font-bold leading-tight"
                />
                <p className="text-softWhite/70 text-lg leading-relaxed">
                  IJ Media was born from a simple observation: Nigeria's most critical stories weren't being told by the people living them. Traditional media often misses the nuance of youth struggle and triumph.
                </p>
                <p className="text-softWhite/70 text-lg leading-relaxed">
                  We believe that by combining cinematic visual standards with deep journalistic research, we can create content that doesn't just entertain, but informs and mobilizes. From gender-based violence to mental health, we are here to ensure that no voice is too quiet to be heard.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" className="w-full h-80 object-cover rounded-3xl" />
                  <img src="https://images.unsplash.com/photo-1604431696980-07e518647c95?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" className="w-full h-48 object-cover rounded-3xl" />
                </div>
                <div className="pt-12">
                  <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=600" alt="" loading="lazy" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </StackSection>

        {/* The Founders */}
        <StackSection index={2} total={totalSections} bgColor="bg-frostedBlue">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center text-pitchBlack">
            <div className="text-center mb-16">
              <p className="text-cerulean uppercase tracking-[0.3em] text-xs font-semibold mb-4">The Team</p>
              <AnimatedText 
                text="The minds behind IJ Media."
                highlightWords={['IJ', 'Media.']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {founders.map((founder, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center hover:shadow-[0_20px_60px_-10px_rgba(188,32,118,0.3)] transition-all duration-500 hover:-translate-y-2"
                >
                  <img src={founder.img} alt={founder.name} loading="lazy" className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-hotRose/20" />
                  <h3 className="text-2xl font-syne font-bold mb-2">{founder.name}</h3>
                  <p className="text-hotRose font-semibold mb-4 text-sm tracking-wide">{founder.title}</p>
                  <p className="text-pitchBlack/70 leading-relaxed">{founder.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </StackSection>

        {/* Our Values — Glassmorphism */}
        <StackSection index={3} total={totalSections} bgColor="bg-midnightViolet">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center text-softWhite">
            <div className="text-center mb-16">
              <p className="section-label">Our Values</p>
              <AnimatedText 
                text="What guides our work."
                highlightWords={['work.']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 rounded-3xl flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-hotRose rounded-full flex items-center justify-center mb-6 text-softWhite shadow-lg shadow-hotRose/30">
                    <val.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-syne font-bold mb-4">{val.title}</h3>
                  <p className="text-softWhite/60 leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </StackSection>

        {/* CTA */}
        <StackSection index={4} total={totalSections} bgColor="bg-cerulean">
          <div className="container mx-auto px-6 py-32 min-h-[50vh] flex flex-col md:flex-row justify-between items-center gap-8 text-softWhite">
            <div>
              <p className="text-softWhite/70 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Let's Collaborate</p>
              <AnimatedText 
                text="Have a story that needs to be told?"
                highlightWords={['told?']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold leading-tight"
              />
            </div>
            {/* ✨ Magnetic Button */}
            <MagneticButton as="div" strength={0.4}>
              <Link to="/contact" className="btn-primary whitespace-nowrap text-base">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </StackSection>
      </div>
    </PageTransition>
  );
};

export default About;