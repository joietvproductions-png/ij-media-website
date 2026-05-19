import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-20px aspect-video card-hover cursor-pointer"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pitchBlack/90 via-pitchBlack/20 to-transparent flex flex-col justify-end p-6">
        <span className="text-cerulean text-xs font-bold tracking-widest uppercase mb-2">
          {category}
        </span>
        <h3 className="text-xl font-syne group-hover:text-softWhite transition-colors">
          {title}
        </h3>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-hotRose p-4 rounded-full shadow-lg">
            <Play fill="currentColor" size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
