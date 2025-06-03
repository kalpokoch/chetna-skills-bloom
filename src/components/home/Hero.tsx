import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// === SlidingWords Component ===
const SlidingWords = () => {
  const words = [
    { text: 'Digital Marketing', hex: '#0084FF' },
    { text: 'Full Stack Development', hex: '#D321C7' },
    {
      text: 'Graphics & UI-UX Design', hex: '#0045D9'
    },
    { text: 'Cyber Security', hex: '#28BF83' },
    { text: 'Photography & Video Editing', hex: '#FFA100' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[80rem] h-[5.6rem] overflow-hidden relative text-center ">
        <div
          className="flex flex-col transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${index * 5.6}rem)` }}
        >
          {words.map((word, i) => (
            <div
              key={i}
              className="h-[5.5rem] flex items-center justify-center text-7xl font-extrabold"
              style={{ color: word.hex }}
            >
              {word.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// === AnimatedImages Component ===
const AnimatedImages = ({ position = 'center' }) => {
  const images = [
    '/lovable-uploads/g1.png',
    '/lovable-uploads/g2.png',
    '/lovable-uploads/g3.png',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Postitioning Styles
  const positionStyle = {
    left: position === 'left' ? 0 : 'auto',
    right: position  === 'right' ? 0 : 'auto',
    transform: position === 'left'
      ? 'translateX(-50%)'
      : position === 'right'
      ? 'translateX(50%)'
      : 'none',
  };

  return (
    <div
      className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex justify-center items-center"
      style={positionStyle}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Animated ${i}`}
          className="absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === index ? 0.8 : 0,
            zIndex: i === index ? 2 : 1,
            transition: 'opacity 3s ease-in-out',
            maskImage:
              position === "left"
              ? 'linear-gradient(to right, black 60%, transparent 100%)'
              : 'linear-gradient(to left, black 60%, transparent 100%)',
            WebkitMaskImage:
              position === 'left'
                ? 'linear-gradient(to right, black 60%, transparent 100%)'
                : 'linear-gradient(to left, black 60%, transparent 100%)',
          }}
        />
      ))}
    </div>
  );
};

// === Main Hero Component ===
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
      <AnimatedImages position="left"/>
      <AnimatedImages position="right"/>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-extrabold leading-tight mt-0 mb-6 text-center">
          <span className="block leading-tight">
            <span className="hollow-red">Ready to</span>{' '}
            <span className="text-chetna-red">Learn</span>
          </span>
          <span className="block mt-2 leading-tight">
            <span className="text-chetna-red">Real</span>{' '}
            <span className="hollow-red">world</span>{' '}
            <span className="text-red-600 font-bold">Skills</span>{' '}
            <span className="hollow-red">like</span>
          </span>
        </h1>


        <SlidingWords />

        <p className="text-xl md:text-3xl text-gray-700 my-10 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Viverra elementum pharetra sit
          mollis vitae. Nunc vitae ut quisque elementum. Suspendisse morbi in
          consequat vestibulum cursus.
        </p>

        <div className="flex flex-col sm:flex-row gap-60 justify-center">
          <Button
            asChild
            className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md"
          >
            <Link to="/courses">View Courses</Link>
          </Button>
          <Button
            asChild
            className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md"
          >
            <Link to="/apply">Enroll Now !</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
