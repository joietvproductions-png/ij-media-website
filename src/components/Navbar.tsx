import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Video, Globe, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Camera, name: 'Instagram', href: '#' },
    { icon: Video, name: 'YouTube', href: '#' },
    { icon: Globe, name: 'Twitter', href: '#' },
    { icon: Mail, name: 'Email', href: 'mailto:hello@ijmedia.ng' },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-midnightViolet/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-syne tracking-tighter text-softWhite relative z-[60]">
            IJ MEDIA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-hotRose ${
                  location.pathname === link.path ? 'text-hotRose' : 'text-softWhite'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 text-sm">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-softWhite relative z-[60] w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-pitchBlack/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-In Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-midnightViolet z-50 md:hidden overflow-y-auto"
            >
              {/* Background gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-midnightViolet via-midnightViolet to-pitchBlack pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-hotRose/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cerulean/10 rounded-full blur-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative h-full flex flex-col p-8 pt-28">
                {/* Section Label */}
                <motion.p 
                  variants={itemVariants}
                  className="text-cerulean uppercase tracking-[0.3em] text-xs font-semibold mb-8"
                >
                  Menu
                </motion.p>

                {/* Nav Links */}
                <div className="flex flex-col space-y-2 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between py-4 border-b border-softWhite/10 transition-colors ${
                          location.pathname === link.path ? 'text-hotRose' : 'text-softWhite'
                        }`}
                      >
                        <span className="text-3xl font-syne font-bold group-hover:text-hotRose transition-colors">
                          {String(i + 1).padStart(2, '0')}. {link.name}
                        </span>
                        <ArrowUpRight 
                          size={24} 
                          className="text-softWhite/40 group-hover:text-hotRose group-hover:rotate-45 transition-all duration-300" 
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="mb-12">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-hotRose text-softWhite text-center py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-hotRose/30"
                  >
                    Partner With Us →
                  </Link>
                </motion.div>

                {/* Footer Info */}
                <motion.div variants={itemVariants} className="mt-auto">
                  {/* Social Links */}
                  <p className="text-softWhite/60 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3 mb-8">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        aria-label={social.name}
                        className="w-12 h-12 bg-softWhite/10 rounded-full flex items-center justify-center text-softWhite hover:bg-hotRose transition-all hover:scale-110"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-softWhite/60 text-sm">
                    <p>hello@ijmedia.ng</p>
                    <p>Victoria Island, Lagos</p>
                  </div>

                  {/* Brand Footer */}
                  <p className="text-softWhite/30 text-xs mt-8">
                    © {new Date().getFullYear()} IJ Media. <br/>
                    Amplifying the untold stories of Nigeria.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;