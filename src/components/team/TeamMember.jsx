import React from 'react';
import LazyImage from '../common/LazyImage';

const TeamMember = ({ member }) => {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <LazyImage
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full"
          shape="circle"
        />
      </div>
      {/* ... rest of your component */}
    </div>
  );
};

export default TeamMember; 