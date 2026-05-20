import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Camera, Video, Globe, Send, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';
import StackSection from '../components/StackSection';
import PageTransition from '../components/PageTransition';
import Particles from '../components/Particles';
import AnimatedText from '../components/AnimatedText';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // 🔥 Formspree Form URL
  const FORMSPREE_URL = "https://formspree.io/f/mbdbdggb";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: "How do I commission a documentary?", a: "Reach out via our contact form with a brief about your project, timeline, and budget. We'll schedule a discovery call within 48 hours to discuss next steps." },
    { q: "Do you accept story pitches?", a: "Yes, we love discovering new stories. Send your pitch via the contact form with the subject 'Story Pitch'. We review pitches monthly." },
    { q: "Where are you based?", a: "We are based in Lagos, Nigeria, but we travel across the country (and beyond) for the right story." },
    { q: "Do you offer internships?", a: "Yes, we have a quarterly program for aspiring filmmakers and journalists. Keep an eye on our Instagram for applications." },
  ];

  const totalSections = 4;

  return (
    <PageTransition>
      <div className="overflow-x-hidden">
        {/* Hero */}
        <StackSection index={0} total={totalSections} bgColor="gradient-bg-animated grain relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnightViolet/40 to-midnightViolet" />
          <Particles count={35} color="bg-softWhite" />
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
                Contact
              </motion.p>
              <AnimatedText 
                text="Let's tell a story together."
                highlightWords={['story']}
                highlightClass="text-hotRose italic"
                delay={0.3}
                className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-6 leading-[1.05]"
              />
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className="text-softWhite/70 text-lg max-w-2xl mx-auto"
              >
                Whether you're a brand, NGO, or storyteller — we want to hear from you.
              </motion.p>
            </div>
          </div>
        </StackSection>

        {/* Form + Info */}
        <StackSection index={1} total={totalSections} bgColor="bg-midnightViolet">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* THE WORKING FORM */}
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6 glass-card p-10 rounded-3xl relative"
              >
                {/* Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-midnightViolet/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center z-20 text-center p-8"
                    >
                      <div className="w-20 h-20 bg-hotRose rounded-full flex items-center justify-center mb-6 shadow-lg shadow-hotRose/30">
                        <CheckCircle size={40} className="text-softWhite" />
                      </div>
                      <h3 className="text-3xl font-syne font-bold mb-3 text-softWhite">Message Received!</h3>
                      <p className="text-softWhite/70 mb-6 max-w-md">Thank you for reaching out. We'll get back to you within 48 hours.</p>
                      <button 
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="text-cerulean hover:text-hotRose transition-colors text-sm font-semibold"
                      >
                        Send another message →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" 
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" 
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Organization</label>
                    <input 
                      type="text" 
                      name="organization"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" 
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Project Type</label>
                    <select 
                      name="project_type"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite"
                    >
                      <option className="bg-midnightViolet">Documentary</option>
                      <option className="bg-midnightViolet">Corporate Video</option>
                      <option className="bg-midnightViolet">Training</option>
                      <option className="bg-midnightViolet">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Message</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite resize-none"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-hotRose text-sm">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </motion.form>

              {/* Info Panel */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="bg-frostedBlue text-pitchBlack p-8 rounded-3xl h-fit"
              >
                <h3 className="text-2xl font-syne font-bold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@ijmedia.ng" },
                    { icon: Phone, label: "Phone", value: "+234 800 123 4567" },
                    { icon: MapPin, label: "Studio", value: "Victoria Island, Lagos, Nigeria" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cerulean rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.2em] text-pitchBlack/60 mb-1 uppercase">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-pitchBlack/10 mt-8 pt-8">
                  <p className="text-xs tracking-[0.2em] text-pitchBlack/60 mb-4 uppercase">Follow Us</p>
                  <div className="flex gap-3">
                    {[Camera, Video, Globe, Mail].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 bg-pitchBlack rounded-full flex items-center justify-center text-softWhite hover:bg-hotRose transition-colors">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </StackSection>

        {/* FAQ */}
        <StackSection index={2} total={totalSections} bgColor="bg-pitchBlack">
          <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
              <p className="section-label">FAQ</p>
              <AnimatedText 
                text="Common questions."
                highlightWords={['questions.']}
                highlightClass="text-hotRose italic"
                className="text-4xl md:text-6xl font-syne font-bold"
              />
            </div>
            <div className="max-w-3xl mx-auto w-full space-y-3">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left transition-colors"
                  >
                    <span className="font-semibold text-softWhite text-lg">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-softWhite/60 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6 text-softWhite/70 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </StackSection>

        {/* Newsletter */}
        <StackSection index={3} total={totalSections} bgColor="bg-cerulean">
          <div className="container mx-auto px-6 py-32 min-h-[50vh] flex flex-col justify-center text-center text-softWhite max-w-3xl">
            <p className="text-softWhite/70 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Newsletter</p>
            <AnimatedText 
              text="Stay in the loop."
              highlightWords={['loop.']}
              highlightClass="italic"
              className="text-4xl md:text-6xl font-syne font-bold mb-4"
            />
            <p className="text-softWhite/80 mb-10 text-lg">Subscribe to our monthly story digest and never miss a mission.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-softWhite transition-colors text-softWhite placeholder-softWhite/50"
              />
              <button type="submit" className="bg-pitchBlack text-softWhite px-8 py-3 rounded-full font-semibold hover:bg-midnightViolet transition-all inline-flex items-center gap-2 justify-center">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </StackSection>
      </div>
    </PageTransition>
  );
};

export default Contact;