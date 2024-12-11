import { useState } from 'react';
import { motion } from 'framer-motion';
// import { teamCategories } from '../utils/constants/team/categories';
// import { teamMembers } from '../utils/constants/team/members';
import { teamCategories, teamMembers } from '../utils/constants';
import TeamMemberCard from '../components/team/TeamMemberCard';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('Core Team');

  // Check if teamMembers is an array and has members
  const filteredMembers = Array.isArray(teamMembers) ? teamMembers.filter(
    member => activeCategory === 'All' || member.category === activeCategory
  ) : [];

  return (
    <div className="min-h-screen bg-primary py-20">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
          Our Team
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Meet the talented individuals who make InBloom possible.
        </p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-secondary text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All Teams
          </button>
          {teamCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))
          ) : (
            <p className="text-white">No team members found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team; 