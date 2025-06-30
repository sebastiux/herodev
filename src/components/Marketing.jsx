import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { 
  puentesamsung, 
  immersivejaecoo, 
  digitalCampaignVideo
} from '../utils';

const Marketing = () => {
  const videoRef = useRef();
  const titleRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Campaign media carousel data
  const campaignMedia = [
    {
      type: 'video',
      src: '/assets/videos/DonJulio.mp4',
      title: 'Don Julio Premium Campaign',
      description: 'Luxury brand activation with immersive experiences'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      title: 'Times Square Spectacular',
      description: 'Digital billboard takeover in the heart of NYC'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      title: 'Interactive Event Experience',
      description: 'Technology-driven brand engagement'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      title: 'Outdoor Installation Art',
      description: 'Large-scale environmental branding'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      title: 'Corporate Event Design',
      description: 'Sophisticated staging and visual production'
    }
  ];

  // Even slower auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campaignMedia.length);
    }, 15000); // Much slower: Change slide every 15 seconds
    return () => clearInterval(interval);
  }, [campaignMedia.length]);

  useGSAP(() => {
    // Much slower, elegant title animation
    const titleTimeline = gsap.timeline();

    // Initial state - invisible
    gsap.set('.title-letter', { 
      opacity: 0, 
      y: 60, 
      rotationX: -90,
      transformOrigin: '50% 50% -50px'
    });

    // Very slow, elegant letter animation
    titleTimeline
      .to('.title-letter', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.8, // Much slower
        stagger: 0.12, // More spacing between letters
        ease: 'power3.out',
        delay: 1 // Longer initial delay
      });

    // Much slower carousel entrance
    gsap.from('.carousel-container', {
      opacity: 0,
      scale: 0.95,
      duration: 2.5, // Much slower
      delay: 6, // Wait much longer for title
      ease: 'power3.out'
    });

    // Slower description text after carousel
    gsap.from('.description-text', {
      opacity: 0,
      y: 40,
      duration: 2, // Slower
      delay: 8, // After carousel appears
      ease: 'power3.out'
    });

    // Much slower content animations
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 2, // Much slower
      ease: 'power2.inOut'
    });

    // Animated service text
    gsap.from('.service-text', {
      opacity: 0,
      x: -30,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%'
      }
    });

  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const titleText = "TRANSFORM IDEAS INTO IMPACT";

  return (
    <section className="common-padding bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="screen-max-width relative z-10">
        {/* Smaller, Elegant Title */}
        <div className="flex flex-col items-center mb-16">
          <div ref={titleRef} className="text-center overflow-hidden relative">
            <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                {titleText.split('').map((char, index) => (
                  <span 
                    key={index} 
                    className="title-letter inline-block" 
                    style={{animationDelay: `${index * 0.12}s`}}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </h2>
          </div>
        </div>

        {/* Campaign Media Carousel */}
        <div className="carousel-container mb-16">
          <div 
            className="relative overflow-hidden rounded-3xl bg-gray-900 cursor-pointer border border-gray-800"
            onClick={() => goToSlide((currentSlide + 1) % campaignMedia.length)}
          >
            <div className="relative h-[60vh] md:h-[70vh]">
              {campaignMedia.map((media, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : 
                    index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
                  }`}
                >
                  {media.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Clean gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Media info */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{media.title}</h3>
                    <p className="text-lg opacity-90">{media.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
              {campaignMedia.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                  className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Description Text (moved from subtitle) */}
        <div className="text-center mb-20">
          <p className="description-text text-lg md:text-xl text-gray-100 text-center max-w-4xl mx-auto leading-relaxed">
            We create campaigns that move people and drive results through spectacular installations, immersive events, and cutting-edge digital experiences.
          </p>
        </div>

        {/* Services with Real Images */}
        <div className="services-section mb-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
              Our Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Physical Spectaculars */}
              <div className="g_fadeIn text-center">
                <div className="relative mb-8 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 h-64">
                  <img 
                    src={puentesamsung} 
                    alt="Physical Spectaculars Campaign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="service-text">
                  <h4 className="text-xl font-bold text-white mb-4">Physical Spectaculars</h4>
                  <p className="text-gray-400 leading-relaxed">Breathtaking installations that capture attention and create lasting impressions in the physical world</p>
                </div>
              </div>

              {/* Immersive Events */}
              <div className="g_fadeIn text-center">
                <div className="relative mb-8 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 h-64">
                  <img 
                    src={immersivejaecoo} 
                    alt="Jaecoo Immersive Event Experience"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="service-text">
                  <h4 className="text-xl font-bold text-white mb-4">Immersive Events</h4>
                  <p className="text-gray-400 leading-relaxed">Unforgettable experiences that engage all senses through strategic design and cutting-edge technology</p>
                </div>
              </div>

              {/* Digital Excellence */}
              <div className="g_fadeIn text-center">
                <div className="relative mb-8 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 h-64">
                  <video 
                    src={digitalCampaignVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="service-text">
                  <h4 className="text-xl font-bold text-white mb-4">Digital Excellence</h4>
                  <p className="text-gray-400 leading-relaxed">Strategic precision meets aesthetic brilliance in every digital experience we create</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <div className="g_fadeIn">
            <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-700 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marketing