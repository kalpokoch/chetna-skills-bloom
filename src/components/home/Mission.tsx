const SectionTitle = ({ title, subtitle }) => (
  <div>
    <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
    <p className="text-lg md:text-xl mb-10">{subtitle}</p>
  </div>
);

const Mission = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-20">
      {/* Section heading */}
      <div className="text-center relative z-10 max-w-3xl">
        <SectionTitle 
          title="Our Mission"
          subtitle="To empower youth across India — especially in underserved regions — with real-world, practical skills through affordable, hands-on training and mentorship, making them self-reliant and employable."
        />
      </div>

      {/* Gradient + Image stack */}
      <div className="relative z-10 flex flex-col md:flex-row items-center">

        {/* Left stack */}
        <div className="relative w-[800px] h-[800px] flex items-center justify-center">
          <img
            src="/lovable-uploads/Ellipse 12.svg"
            alt="Gradient Left"
            className="absolute w-full h-full object-contain"
          />
          <img
            src="/lovable-uploads/Industrialsed training.svg"
            alt="Training Illustration"
            className="relative w-42"
          />
        </div>

        {/* Center stack */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <img
            src="/lovable-uploads/Ellipse 14.svg"
            alt="Gradient Center"
            className="absolute w-full h-full object-contain"
          />
          <img
            src="/lovable-uploads/inclusive learning.svg"
            alt="Inclusive Illustration"
            className="relative w-40"
          />
        </div>

        {/* Right stack */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <img
            src="/lovable-uploads/Ellipse 13.svg"
            alt="Gradient Right"
            className="absolute w-full h-full object-contain"
          />
          <img
            src="/lovable-uploads/Project based approch.svg"
            alt="Project Illustration"
            className="relative w-40"
          />
        </div>

      </div>
    </section>
  );
};

export default Mission;
