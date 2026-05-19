import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pitchBlack pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-syne tracking-tighter">IJ MEDIA</h2>
            <p className="text-softWhite/60 text-sm leading-relaxed">
              Amplify the untold stories of Nigeria. We craft high-impact documentaries 
              that challenge narratives and drive social change.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-softWhite/60 hover:text-cerulean transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syne font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-softWhite/60">
              <li><Link to="/" className="hover:text-hotRose transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-hotRose transition-colors">About Us</Link></li>
              <li><Link to="/works" className="hover:text-hotRose transition-colors">Our Works</Link></li>
              <li><Link to="/contact" className="hover:text-hotRose transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-softWhite/60">
              <li><a href="#" className="hover:text-hotRose transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-hotRose transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-hotRose transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-softWhite/60 mb-4">Stay updated with our latest stories.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-20px px-4 py-3 text-sm focus:outline-none focus:border-hotRose"
              />
              <button className="absolute right-2 top-2 bg-hotRose p-1.5 rounded-full hover:opacity-90 transition-opacity">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-softWhite/40">
          <p>© {new Date().getFullYear()} IJ Media Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;