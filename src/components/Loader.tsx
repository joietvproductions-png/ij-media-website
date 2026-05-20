import { motion } from 'framer-motion';

const Loader = () => (
  <>
    {/* Camera Flash — single flash right before slide-up */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1, 0] }}
      transition={{ 
        delay: 1.4,
        duration: 0.6,
        ease: 'easeOut',
        times: [0, 0.3, 0.5, 1]  // holds invisible, then single snap flash
      }}
      className="fixed inset-0 bg-white z-[9999] pointer-events-none"
    />

    {/* Original Loader — slides up after flash */}
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-pitchBlack z-[9998] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-syne font-bold text-softWhite mb-4"
        >
          IJ <span className="text-hotRose italic">MEDIA</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-[2px] bg-hotRose origin-left max-w-md mx-auto"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-softWhite/60 mt-4 text-sm tracking-[0.3em] uppercase"
        >
          Stories that move.
        </motion.p>
      </div>
    </motion.div>
  </>
);

export default Loader;