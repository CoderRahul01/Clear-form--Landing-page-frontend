'use client';

import { useState } from 'react';

const videoData = {
  startups: {
    label: 'Monitor',
    videoSrc: '/videos/Trends.mp4',
    posterSrc: '/images/video-thumbnails/monitor.jpg',
    title: 'Monitor Your Performance',
    description: 'Track real-time insights and stay updated with continuous monitoring of your key metrics and activities.',
  },
  webapps: {
    label: 'Measure',
    videoSrc: '/videos/PerformanceSnapshot.mp4',
    posterSrc: '/images/video-thumbnails/measure.jpg',
    title: 'Measure What Matters',
    description: 'Analyze comprehensive data and uncover actionable insights to understand what drives your success.',
  },
  ecommerce: {
    label: 'Act',
    videoSrc: '/videos/inbox.mp4',
    posterSrc: '/images/video-thumbnails/act.jpg',
    title: 'Act with Confidence',
    description: 'Make informed decisions quickly and implement changes that create real impact on your business growth.',
  },
};

export default function DemoNav() {
  const [activeTab, setActiveTab] = useState('startups');
  const currentVideo = videoData[activeTab as keyof typeof videoData];

  return (
    <div className="my-15 py-20 text-center">
      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-in {
          animation: floatIn 0.6s ease-out;
        }
      `}</style>
      
      {/* Navigation Tabs */}
      <div className="mb-15 inline-flex gap-3 rounded-3xl bg-white/80 p-2 shadow-xl backdrop-blur-xl border border-grey-50">
        {Object.entries(videoData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
              activeTab === key
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
          >
            {key === 'monitor' && <div className="h-2 w-2 rounded-full bg-current" />}
            {key === 'measure' && <div className="h-2 w-2 rounded-full bg-current" />}
            {key === 'act' && <div className="h-2 w-2 rounded-full bg-current" />}
            {data.label}
          </button>
        ))}
      </div>

      {/* 60/40 Split Layout */}
      <div className="mx-auto max-w-345 px-4 sm:px-6">
        <div className="flex gap-12 items-stretch">
          {/* Video Container - 60% */}
          <div
            key={`video-${activeTab}`}
            className="w-3/5 flex items-center justify-center animate-float-in" 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-quad"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: activeTab === 'webapps' ? '9/16' : '16/9',
                maxWidth: activeTab === 'webapps' ? '280px' : '100%',
                margin: activeTab === 'webapps' ? '0 auto' : '0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <video
                key={activeTab}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={currentVideo.posterSrc}
                className="w-full h-full object-cover"
                src={currentVideo.videoSrc}
              />
              {/* Glass effect overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-linear-to-br from-white/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text Content - 40% */}
          <div key={`text-${activeTab}`} className="w-2/5 my-auto animate-float-in " data-aos="fade-left" data-aos-duration="800">
            <div className='flex-col items-start inline-flex'>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{currentVideo.title}</h2>
              <p className="text-lg text-gray-600 mb-8 text-start">{currentVideo.description}</p>
              {/* Placeholder for future CTA button */}
              <div className="h-12 w-32 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}