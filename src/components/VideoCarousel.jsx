import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const containerRef = useRef(null);
  const textRef = useRef([]);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // Enhanced slider animation with better easing and stagger
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
      ease: "power3.inOut",
    });

    // Enhanced text animations with stagger
    gsap.fromTo(
      ".video-text",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.3,
      }
    );

    // Enhanced video container animation
    gsap.fromTo(
      ".video-carousel_container",
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    // Improved scroll trigger for video
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
        start: "top 85%",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // Enhanced progress animation with smoother easing
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // Improved responsive progress bar sizing
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "12vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
              duration: 0.3,
              ease: "power2.out",
            });

            // Enhanced progress bar styling with gradient effect
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              background: `linear-gradient(90deg, #fff 0%, #e5e5e7 ${currentProgress}%)`,
              duration: 0.1,
              ease: "none",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
              duration: 0.4,
              ease: "power2.inOut",
            });
            gsap.to(span[videoId], {
              background: "#6e6e73",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      const animUpdate = () => {
        if (updatedSlides[videoId] && videoRef.current[videoId]) {
          anim.progress(
            videoRef.current[videoId].currentTime /
              updatedSlides[videoId].videoDuration
          );
        }
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  // Handle click to advance to next video
  const handleVideoClick = () => {
    if (videoId < 3) {
      // Move to next video
      setVideo((pre) => ({ ...pre, videoId: videoId + 1, isEnd: false }));
    } else {
      // Reset to first video if at the end
      setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false, isEnd: false }));
    }
  };

  // Updated text content for the videos
  const updatedSlides = [
    {
      ...hightlightsSlides[0],
      textLists: [
        "Empowering Communities.",
        "Creating lasting impact.",
        "Together we rise.",
      ],
    },
    {
      ...hightlightsSlides[1],
      textLists: ["Social Innovation.", "Strong partnerships. Real change."],
    },
    {
      ...hightlightsSlides[2],
      textLists: [
        "HGroup has the",
        "most comprehensive approach to",
        "corporate social responsibility.",
      ],
    },
    {
      ...hightlightsSlides[3],
      textLists: ["All-new Impact Strategy.", "What will yours achieve?"],
    },
  ];

  return (
    <div ref={containerRef} className="w-full">
      {/* Enhanced video carousel container */}
      <div className="flex items-center overflow-hidden">
        {updatedSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10 min-w-full">
            {/* Clickable video container */}
            <div 
              className="relative sm:w-[65vw] w-[88vw] md:h-[60vh] sm:h-[45vh] h-[35vh] mx-auto cursor-pointer group"
              onClick={handleVideoClick}
            >
              {/* Enhanced video container with hover effects */}
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black shadow-2xl border border-gray-800 transition-transform duration-300 group-hover:scale-[1.02]">
                <video
                  id="video"
                  playsInline={true}
                  className={`w-full h-full object-cover ${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none transition-transform duration-700 ease-out`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              {/* Enhanced text overlay with better positioning and styling */}
              <div className="absolute top-8 left-[5%] z-10 max-w-[90%]">
                {list.textLists.map((text, textIndex) => (
                  <p
                    key={textIndex}
                    ref={(el) => (textRef.current[textIndex] = el)}
                    className="video-text md:text-xl text-lg font-medium text-white drop-shadow-lg leading-tight mb-1 transform transition-all duration-500"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Add subtle gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-3xl pointer-events-none" />
              
              {/* Click indicator */}
              <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                  Tap to continue →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced controls section */}
      <div className="relative flex-center mt-10">
        {/* Improved progress indicators */}
        <div className="flex-center py-5 px-7 bg-gray-300/80 backdrop-blur-xl rounded-full shadow-lg border border-white/20">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-white"
              ref={(el) => (videoDivRef.current[i] = el)}
              onClick={() => {
                setVideo((pre) => ({ ...pre, videoId: i, isEnd: false }));
              }}
            >
              <span
                className="absolute h-full w-full rounded-full transition-all duration-300"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        {/* Enhanced control button */}
        <button 
          className="control-btn transition-all duration-300 hover:scale-110 hover:bg-gray-200 active:scale-95"
          onClick={
            isLastVideo
              ? () => handleProcess("video-reset")
              : !isPlaying
              ? () => handleProcess("play")
              : () => handleProcess("pause")
          }
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            className="w-6 h-6 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Add loading indicator for better UX */}
      {loadedData.length < 4 && (
        <div className="flex-center mt-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;