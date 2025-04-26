import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/images/hero/slide1.jpg';
import slide2 from '../../assets/images/hero/slide2.jpg';
import slide3 from '../../assets/images/hero/slide3.jpg';
import slide4 from '../../assets/images/hero/slide4.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: 'Study Abroad Experts',
      subtitle: '5+ Years of Visa Success',
      cta: 'Book Consultation',
      link: '/services',
      textAlign: 'text-center items-center',
    },
    {
      id: 2,
      image: slide2,
      title: 'University Partnerships',
      subtitle: '500+ Global Institutions',
      cta: 'Explore Options',
      link: '/services',
      textAlign: 'text-center items-center',
    },
    {
      id: 3,
      image: slide3,
      title: 'Visa Guidance',
      subtitle: '98% Success Rate',
      cta: 'Get Assistance',
      link: '/services',
      textAlign: 'text-right items-end pr-6 md:pr-16',
    },
    {
      id: 4,
      image: slide4,
      title: 'Career Counseling',
      subtitle: 'Tailored Roadmaps',
      cta: 'Start Planning',
      link: '/services',
      textAlign: 'text-left items-start pl-6 md:pl-16',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-[75vh] flex-shrink-0 relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Gradient overlay + text */}
            <div className={`absolute inset-0 bg-black/40 flex ${slide.textAlign} justify-center`}>
              <div className="text-white text-center max-w-2xl px-4 md:px-8 mx-auto py-10 md:py-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                <Link
                  to={slide.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base md:text-lg transition-transform duration-300 hover:scale-105 shadow-md"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default HeroSlider;
