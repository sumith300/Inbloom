const EventHighlights = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="font-display text-2xl mb-4 text-secondary">15+ Events</h3>
          <p className="text-gray-300">Participate in various cultural and technical events</p>
        </div>
        <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="font-display text-2xl mb-4 text-secondary">Workshops</h3>
          <p className="text-gray-300">Learn from industry experts and professionals</p>
        </div>
        <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="font-display text-2xl mb-4 text-secondary">Prizes</h3>
          <p className="text-gray-300">Win exciting prizes worth ₹50,000+</p>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights; 