import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/home/CountdownTimer';
import Banner from '../components/home/Banner';
import BackgroundPattern from '../components/common/BackgroundPattern';

const Home = () => {
  return (
    <div>
      <Banner />
      
      {/* About Section */}
      <section id="about-section" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6 font-bold">
              Realm of <span className="text-secondary">Stories</span>
            </h2>
            <p className="text-lg text-white mb-8">
              Step into a world where every moment becomes a story, every performance a chapter, 
              and every participant a storyteller. InBloom 2024 invites you to be part of a narrative 
              that celebrates creativity, culture, and connection.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-secondary text-3xl font-bold mb-3">Create</div>
                <p className="text-white">
                  Craft your unique story through dance, music, art, and innovation
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-secondary text-3xl font-bold mb-3">Connect</div>
                <p className="text-white">
                  Join fellow storytellers from across colleges and cultures
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-secondary text-3xl font-bold mb-3">Celebrate</div>
                <p className="text-white">
                  Be part of a grand narrative that celebrates talent and creativity
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Theme Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-20 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-primary px-4 text-secondary text-sm font-semibold">THE THEME</span>
              </div>
            </div>
            <p className="mt-8 text-white leading-relaxed">
              "Realm of Stories" represents the magical intersection of tradition and innovation, 
              where each participant contributes to a collective narrative of creativity and expression. 
              Through various events and performances, we explore the power of storytelling in its many forms - 
              be it through dance, music, technology, or art. Join us in this enchanting journey where your 
              story becomes part of our grand narrative.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/events"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-8 py-3 bg-secondary hover:bg-secondary-light text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Explore Events
              </Link>
              <Link
                to="/gallery"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home; 