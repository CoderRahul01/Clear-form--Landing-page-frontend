'use client';

export default function Dashboard() {
  return (
    <div className="py-40 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
         

          {/* Video Container */}
          <div
            className="flex items-center justify-center lg:col-span-2"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '16/9',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                src="/videos/Dashboard.mp4"
              />
              {/* Glass effect overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-linear-to-br from-white/10 via-transparent to-transparent" />
            </div>
          </div>
           {/* Text Content */}
          <div className="flex flex-col justify-center text-left lg:col-span-1" data-aos="fade-left" data-aos-duration="1100">
            <h2 className="text-[30px] font-bold mb-6 text-gray-900">Your Feedback, Structured for Decisions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              See what matters instantly. Clearform turns raw responses into structured signals — so you don’t just view data, you understand it. Track clarity, quality, and decision-readiness in one place.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
