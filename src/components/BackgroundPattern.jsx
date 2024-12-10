const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
    </div>
  );
};

export default BackgroundPattern; 