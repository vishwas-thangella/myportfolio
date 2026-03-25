import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Home, ExternalLink, Gamepad2, Box, Layers } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import mov from './video.mp4';

interface Project {
  id: number;
  title: string;
  category: 'Game' | 'Rigging' | 'Unreal';
  videoUrl: string;
  thumbnail: string;
  youtubeId: string;
}

export function ProjectsPage() {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Puppy Rush',
      category: 'Game',
      videoUrl: 'https://youtu.be/cXjLsZE3nsQ',
      youtubeId: 'cXjLsZE3nsQ',
      thumbnail: `https://img.youtube.com/vi/cXjLsZE3nsQ/maxresdefault.jpg`,
    },
    {
      id: 2,
      title: 'Cloud Chaser',
      category: 'Game',
      videoUrl: 'https://youtu.be/SByGvCL1hT4',
      youtubeId: 'SByGvCL1hT4',
      thumbnail: `https://img.youtube.com/vi/SByGvCL1hT4/maxresdefault.jpg`,
    },
    {
      id: 3,
      title: 'Flock and Feature',
      category: 'Game',
      videoUrl: 'https://youtu.be/91Ni-0qYbEs',
      youtubeId: '91Ni-0qYbEs',
      thumbnail: `https://img.youtube.com/vi/91Ni-0qYbEs/maxresdefault.jpg`,
    },
    {
      id: 4,
      title: 'Maze Ball',
      category: 'Game',
      videoUrl: 'https://youtu.be/QJJNbw3Iu1c',
      youtubeId: 'QJJNbw3Iu1c',
      thumbnail: `https://img.youtube.com/vi/QJJNbw3Iu1c/maxresdefault.jpg`,
    },
    {
      id: 5,
      title: 'Strike Ball',
      category: 'Game',
      videoUrl: 'https://youtu.be/7mx71Rvqsw4',
      youtubeId: '7mx71Rvqsw4',
      thumbnail: `https://img.youtube.com/vi/7mx71Rvqsw4/maxresdefault.jpg`,
    },
    {
      id: 6,
      title: 'Dobby Character Rig',
      category: 'Rigging',
      videoUrl: 'https://youtu.be/036AEJLBT-k',
      youtubeId: '036AEJLBT-k',
      thumbnail: `https://img.youtube.com/vi/036AEJLBT-k/maxresdefault.jpg`,
    },
    {
      id: 7,
      title: 'Scorpion Rig',
      category: 'Rigging',
      videoUrl: 'https://youtu.be/CyY3ix1qZIY',
      youtubeId: 'CyY3ix1qZIY',
      thumbnail: `https://img.youtube.com/vi/CyY3ix1qZIY/maxresdefault.jpg`,
    },
    {
      id: 8,
      title: 'Unreal Interaction',
      category: 'Unreal',
      videoUrl: 'https://youtu.be/lARghrahYw4',
      youtubeId: 'lARghrahYw4',
      thumbnail: `https://img.youtube.com/vi/lARghrahYw4/maxresdefault.jpg`,
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [filter, setFilter] = useState<'All' | 'Game' | 'Rigging' | 'Unreal'>('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Game':
        return Gamepad2;
      case 'Rigging':
        return Box;
      case 'Unreal':
        return Layers;
      default:
        return Gamepad2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Game':
        return 'from-purple-500 to-blue-500';
      case 'Rigging':
        return 'from-blue-500 to-cyan-500';
      case 'Unreal':
        return 'from-cyan-500 to-purple-500';
      default:
        return 'from-purple-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 rounded-lg
                       border border-white/10 hover:border-purple-500/50 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              <span className="font-bold">Home</span>
            </motion.button>

            <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects Showcase
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 md:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 mb-8 justify-center flex-wrap"
            >
              {(['All', 'Game', 'Rigging', 'Unreal'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${filter === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-purple-400/50'
                      : 'backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            <div className='mb-10'>
              <video src={mov} muted loop className="w-full h-full" controls />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video Player - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-8 h-fit"
              >
                <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-4 md:p-6 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black/50">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Soundwave Animation */}
                  <div className="flex justify-center items-center gap-1 h-12 mb-4">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-full"
                        animate={{
                          height: [
                            `${20 + Math.random() * 30}%`,
                            `${20 + Math.random() * 30}%`,
                            `${20 + Math.random() * 30}%`,
                          ],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        {(() => {
                          const Icon = getCategoryIcon(selectedProject.category);
                          return <Icon className="w-5 h-5 text-purple-400" />;
                        })()}
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${getCategoryColor(
                            selectedProject.category
                          )}`}
                        >
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>

                    <motion.a
                      href={selectedProject.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg
                               hover:from-purple-500 hover:to-blue-500 transition-all duration-300
                               shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
                               flex items-center gap-2 font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="hidden md:inline">Watch on YouTube</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project Cards - Right Side */}
              <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
                {filteredProjects.map((project, index) => {
                  const Icon = getCategoryIcon(project.category);
                  const isSelected = selectedProject.id === project.id;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setSelectedProject(project)}
                      className={`backdrop-blur-xl bg-white/5 rounded-2xl p-4 border cursor-pointer
                               transition-all duration-300 group ${isSelected
                          ? 'border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.5)] scale-[1.02]'
                          : 'border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-[1.01]'
                        }`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1" />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-purple-400" />
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(
                                project.category
                              )}`}
                            >
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
