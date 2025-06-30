import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState('')

  // Use direct paths to videos in public folder
  const backgroundVideos = [
    '/assets/videos/HonorV2Horizontal.mp4',
    '/assets/videos/LamborghiniUrusV3.mp4'
  ];

  // Random video selector
  const getRandomVideo = (videoArray) => {
    return videoArray[Math.floor(Math.random() * videoArray.length)];
  };

  useEffect(() => {
    // Set random video on component mount
    setVideoSrc(getRandomVideo(backgroundVideos));

    // Optional: Change video every 10 seconds
    const interval = setInterval(() => {
      setVideoSrc(getRandomVideo(backgroundVideos));
    }, 10000);

    return () => clearInterval(interval);
  }, [])

  // HGroup Logo Animation
  useGSAP(() => {
    const animateHGroupLogo = () => {
      const tl = gsap.timeline();
      
      gsap.set('.hgroup-logo', { opacity: 0, y: 50, scale: 0.8 });
      gsap.set('.logo-tagline', { opacity: 0, y: 30 });
      gsap.set('#cta', { opacity: 0, y: 40 });

      tl.to('.hgroup-logo', {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'back.out(1.7)'
      })
      .to('.hgroup-logo', {
        duration: 2,
        textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)',
        ease: 'power2.inOut'
      }, '-=0.5')
      .to('.logo-tagline', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }, '-=0.8')
      .to('#cta', { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5');

      return tl;
    };

    const setupLogoInteractions = () => {
      const logo = document.querySelector('.hgroup-logo');
      if (logo) {
        logo.addEventListener('mouseenter', () => {
          gsap.to('.hgroup-logo', {
            duration: 0.3,
            scale: 1.05,
            textShadow: '0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3)',
            ease: 'power2.out'
          });
        });
        
        logo.addEventListener('mouseleave', () => {
          gsap.to('.hgroup-logo', {
            duration: 0.3,
            scale: 1,
            textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)',
            ease: 'power2.out'
          });
        });
      }
    };

    const timer = setTimeout(() => {
      animateHGroupLogo();
      setupLogoInteractions();
    }, 800);

    return () => clearTimeout(timer);
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <video 
            className="pointer-events-none w-full h-full object-cover opacity-30" 
            autoPlay 
            muted 
            playsInline={true} 
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* HGroup Content - EVERYTHING CENTERED TOGETHER */}
      <div className="relative z-20 h-full w-full flex-center flex-col px-4">
        
        {/* Logo */}
        <div className="hgroup-logo mb-6">
          <img 
            src="/assets/images/Hgroup_blanco.png" 
            alt="HGroup Logo" 
            className="logo-image" 
          />
        </div>
        
        {/* Tagline */}
        <div className="logo-tagline mb-8">Transforming Business Impact Through Social Innovation</div>
        
        {/* CTA Section - NOW INSIDE THE MAIN CONTAINER */}
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn mb-4">Become a Hero</a>
          <p className="font-normal text-xl text-center">Helping companies create meaningful change</p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero