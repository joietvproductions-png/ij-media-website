import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Camera, Video, Globe, Send, ChevronDown, ArrowRight } from 'lucide-react';
import StackSection from '../components/StackSection';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How do I commission a documentary?", a: "Reach out via our contact form with a brief about your project, timeline, and budget. We'll schedule a discovery call within 48 hours to discuss next steps." },
    { q: "Do you accept story pitches?", a: "Yes, we love discovering new stories. Send your pitch via the contact form with the subject 'Story Pitch'. We review pitches monthly." },
    { q: "Where are you based?", a: "We are based in Lagos, Nigeria, but we travel across the country (and beyond) for the right story." },
    { q: "Do you offer internships?", a: "Yes, we have a quarterly program for aspiring filmmakers and journalists. Keep an eye on our Instagram for applications." },
  ];

  const totalSections = 4;

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <StackSection index={0} total={totalSections} bgColor="gradient-bg-animated grain relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnightViolet/40 to-midnightViolet" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
              Contact
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-6 leading-[1.05]"
            >
              Let's tell a <span className="text-hotRose italic">story</span> together.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
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
            <motion.form 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 glass-card p-10 rounded-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Organization</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite" />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite">
                    <option className="bg-midnightViolet">Documentary</option>
                    <option className="bg-midnightViolet">Corporate Video</option>
                    <option className="bg-midnightViolet">Training</option>
                    <option className="bg-midnightViolet">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] text-softWhite/60 mb-2 block uppercase">Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-hotRose transition-colors text-softWhite resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-base">
                Send Message <Send size={16} />
              </button>
            </motion.form>

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
            <h2 className="text-4xl md:text-6xl font-syne font-bold">Common questions.</h2>
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
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-4">Stay in the loop.</h2>
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
  );
};

export default Contact;