import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import { useRef, useEffect } from "react"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  const hashtagRef = useRef(null);
  
  useGSAP(() => {
    // Split text into individual letters for animation
    const text = "#WeAreHeroes";
    const letters = text.split("");
    
    // Clear the hashtag element and create spans for each letter
    if (hashtagRef.current) {
      hashtagRef.current.innerHTML = "";
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter; // Non-breaking space for spaces
        span.className = "inline-block letter-span";
        span.style.transformOrigin = "center bottom";
        hashtagRef.current.appendChild(span);
      });
    }

    // More dynamic entrance animation with wave effect
    gsap.fromTo(".letter-span", 
      {
        opacity: 0,
        y: 60,
        rotationX: -25,
        rotationZ: -15,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.8)",
        stagger: {
          each: 0.06,
          from: "center"
        },
        delay: 0.2,
      }
    );

    // Add a subtle floating animation
    gsap.to(".letter-span", {
      y: -8,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "random"
      },
      delay: 2
    });

    // Add occasional gentle rotation
    gsap.to(".letter-span", {
      rotationZ: "random(-3, 3)",
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        from: "random"
      },
      delay: 2.5
    });

    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25, delay: 2.2 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        {/* Enhanced animated hashtag title */}
        <div className="w-full flex-center mb-12">
          <h1 
            ref={hashtagRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wide text-center"
            style={{
              perspective: "800px",
            }}
          >
            #WeAreAlsoHeroes
          </h1>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights