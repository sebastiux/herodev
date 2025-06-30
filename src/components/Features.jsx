import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#impactVideo', {
      scrollTrigger: {
        trigger: '#impactVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current?.play();
      }
    })

    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )

    // Enhanced Apple-style animations
    animateWithGsap(
      '.elegant-card',
      { y: 0, opacity: 1, scale: 1, ease: 'power2.out', duration: 1 },
      { scrub: 2 }
    );

    // Fixed case study animation - animate from initial position to final position
    animateWithGsap(
      '.case-study-card',
      { y: 0, opacity: 1, scale: 1, ease: 'power3.out', duration: 1.2 },
      { stagger: 0.3 }
    );
  }, []);

  return (
    <section className="h-full common-padding bg-black relative overflow-hidden">
      <div className="screen-max-wdith">        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-4 mb-16 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold text-white">Innovation.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold text-blue-400">Powered by Purpose.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            {/* Hero Video Section */}
            <div className="relative h-[60vh] w-full flex items-center rounded-3xl overflow-hidden mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Corporate social impact meeting" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20"></div>
              <div className="absolute bottom-8 left-8 z-30">
                <p className="text-blue-300 text-sm font-medium mb-2">GLOBAL IMPACT</p>
                <h3 className="text-white text-2xl font-semibold">Building a Better Tomorrow</h3>
              </div>
            </div>

            <div className="flex flex-col w-full relative">
              {/* Elegant Feature Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className="elegant-card opacity-0 transform translate-y-10">
                  <div className="relative h-[45vh] rounded-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Community development project" 
                      className="feature-video g_grow w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="w-2 h-8 bg-blue-400 rounded-full mb-3"></div>
                      <p className="text-white text-lg font-medium">Community Development</p>
                      <p className="text-gray-200 text-sm">Empowering local initiatives</p>
                    </div>
                  </div>
                </div>

                <div className="elegant-card opacity-0 transform translate-y-10">
                  <div className="relative h-[45vh] rounded-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Global partnership handshake" 
                      className="feature-video g_grow w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="w-2 h-8 bg-cyan-400 rounded-full mb-3"></div>
                      <p className="text-white text-lg font-medium">Strategic Partnerships</p>
                      <p className="text-gray-200 text-sm">Building lasting alliances</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Text Container */}
              <div className="feature-text-container mb-16">
                <div className="flex-1 flex-center mb-8">
                  <p className="feature-text g_text text-gray-200 text-center max-w-4xl">
                    HGroup partners with {' '}
                    <span className="text-white font-semibold">
                      Fortune 500 companies to create transformative social impact
                    </span>,
                    delivering measurable results that benefit communities worldwide through innovative corporate responsibility initiatives.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text text-gray-200 text-center max-w-4xl">
                    Our strategic approach has generated {' '}
                    <span className="text-white font-semibold">
                      over $500M in social value
                    </span>
                    across diverse sectors, empowering lasting change through data-driven solutions and meaningful partnerships.
                  </p>
                </div>
              </div>

              {/* Impact Gallery - Apple Style Grid */}
              <div className="mb-16">
                <h3 className="text-3xl font-semibold text-white mb-8 text-center">Areas of Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="elegant-card opacity-0 transform translate-y-10">
                    <div className="relative overflow-hidden rounded-2xl h-80 group">
                      <img 
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Education initiative impact"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-8 h-1 bg-blue-400 rounded-full mb-3"></div>
                        <h4 className="text-white font-semibold mb-1">Education</h4>
                        <p className="text-gray-200 text-sm">Transforming learning experiences</p>
                      </div>
                    </div>
                  </div>

                  <div className="elegant-card opacity-0 transform translate-y-10">
                    <div className="relative overflow-hidden rounded-2xl h-80 group">
                      <img 
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Environmental sustainability project"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-8 h-1 bg-green-400 rounded-full mb-3"></div>
                        <h4 className="text-white font-semibold mb-1">Environment</h4>
                        <p className="text-gray-200 text-sm">Sustainable future initiatives</p>
                      </div>
                    </div>
                  </div>

                  <div className="elegant-card opacity-0 transform translate-y-10">
                    <div className="relative overflow-hidden rounded-2xl h-80 group">
                      <img 
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Corporate leadership development"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-8 h-1 bg-purple-400 rounded-full mb-3"></div>
                        <h4 className="text-white font-semibold mb-1">Leadership</h4>
                        <p className="text-gray-200 text-sm">Developing change makers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Studies - Apple Card Style - FIXED SECTION */}
              <div className="mt-8 mb-16">
                <h3 className="text-3xl font-semibold text-white mb-8 text-center">Success Stories</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  <div className="case-study-card opacity-0 transform translate-y-12 scale-95">
                    <div className="relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-105">
                      <div className="relative h-96 bg-gradient-to-br from-blue-900/60 to-cyan-900/60">
                        <img 
                          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Healthcare access initiative"
                          className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="w-12 h-1 bg-blue-400 rounded-full mb-4"></div>
                          <h4 className="text-2xl font-semibold text-white mb-3 leading-tight">Healthcare Access Initiative</h4>
                          <p className="text-gray-200 text-sm mb-6 leading-relaxed">Expanding medical care to underserved communities across Southeast Asia through innovative partnerships and technology solutions.</p>
                          
                          <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                            <span>Read Case Study</span>
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="case-study-card opacity-0 transform translate-y-12 scale-95">
                    <div className="relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-105">
                      <div className="relative h-96 bg-gradient-to-br from-green-900/60 to-emerald-900/60">
                        <img 
                          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Education technology program"
                          className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="w-12 h-1 bg-green-400 rounded-full mb-4"></div>
                          <h4 className="text-2xl font-semibold text-white mb-3 leading-tight">Digital Education Program</h4>
                          <p className="text-gray-200 text-sm mb-6 leading-relaxed">Bridging the digital divide in rural schools through innovative technology solutions and comprehensive teacher training programs.</p>
                          
                          <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                            <span>Read Case Study</span>
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features