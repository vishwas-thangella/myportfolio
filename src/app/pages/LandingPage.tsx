import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  Gamepad2,
  Box,
  Palette,
  Code,
  Layers,
  Pencil,
  Film,
  Users,
  Phone,
  Mail,
} from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function LandingPage() {
  const navigate = useNavigate();

  const skills = [
    { name: 'Photoshop', icon: Palette },
    { name: 'Unity (2D/3D)', icon: Gamepad2 },
    { name: 'Unreal Engine', icon: Code },
    { name: 'Blender', icon: Box },
    { name: 'Maya', icon: Layers },
    { name: 'Substance Painter', icon: Pencil },
    { name: 'Graphic Design', icon: Palette },
    { name: '3D Animation', icon: Film },
    { name: 'Rigging', icon: Users },
  ];

  const education = [
    {
      year: '2022–2026',
      institution: 'IACG Multimedia College',
      degree: 'Bachelor of Arts',
    },
    {
      year: '2019–2022',
      institution: 'Central Institute of Tool Design',
      degree: 'Automation & Robotics Engineer',
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SAI CHARAN
              </motion.h1>

              <motion.div
                className="text-xl md:text-3xl mb-6 text-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-purple-400">Game Developer</span>
                <span className="mx-3 text-cyan-400">|</span>
                <span className="text-blue-400">3D Artist</span>
                <span className="mx-3 text-cyan-400">|</span>
                <span className="text-cyan-400">Multimedia Designer</span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A passionate multimedia student specializing in game development, 3D modeling, and
                graphic design, with experience in Unity, Unreal Engine, Blender, and Substance
                Painter.
              </motion.p>

              <motion.button
                onClick={() => navigate('/projects')}
                className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-xl font-bold 
                         hover:from-purple-500 hover:to-blue-500 transition-all duration-300
                         shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]
                         border border-purple-400/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10
                       shadow-[0_0_50px_rgba(139,92,246,0.2)]"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                As a dedicated multimedia student, I bring together technical expertise and creative
                vision to craft immersive gaming experiences. My journey spans across game
                development, 3D modeling, and graphic design, where I've honed my skills in
                industry-standard tools like Unity, Unreal Engine, Blender, and Substance Painter.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                With hands-on experience as a graphic designer and a passion for building
                interactive game prototypes, I constantly push the boundaries of what's possible in
                digital art and game mechanics. Each project is an opportunity to blend storytelling
                with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Skills & Expertise
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10
                             hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                             transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="w-10 h-10 mb-4 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Education
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10
                                hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                                transition-all duration-300"
                    >
                      <div className="text-purple-400 font-bold text-lg mb-2">{edu.year}</div>
                      <h3 className="text-2xl font-black text-white mb-2">{edu.institution}</h3>
                      <p className="text-cyan-300">{edu.degree}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full 
                                border-4 border-[#0a0a0f] shadow-[0_0_20px_rgba(139,92,246,0.8)] z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.a
                href="tel:+917989573026"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10
                         hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                         transition-all duration-300 flex items-center gap-4 cursor-pointer group"
              >
                <Phone className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <div className="text-white font-bold text-lg">+91 7989573026</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:nanisaijetti@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10
                         hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                         transition-all duration-300 flex items-center gap-4 cursor-pointer group"
              >
                <Mail className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <div className="text-white font-bold text-lg">nanisaijetti@gmail.com</div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.button
              onClick={() => navigate('/projects')}
              className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-2xl font-black 
                       hover:from-purple-500 hover:to-blue-500 transition-all duration-300
                       shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.9)]
                       border border-purple-400/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work →
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
}
