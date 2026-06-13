const WelcomeSection = ({ userName }) => {
  return (
    <div className="px-8 pt-6">
      <h1 className="text-5xl font-bold">
        Hello, {userName}! 👋
      </h1>

      <p className="mt-3 text-gray-500">
        Your housing journey is looking great.
      </p>
    </div>
  );
};

export default WelcomeSection;