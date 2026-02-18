'use client';

export default function Dashboard() {
  return (
    <div className="py-40 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-left lg:col-span-1" data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Dashboard Awaits</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Get a comprehensive overview of all your metrics and data in one intuitive dashboard. Monitor performance, track trends, and make data-driven decisions with real-time insights at your fingertips.
            </p>
            <div className="h-12 w-40 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              Explore Dashboard
            </div>
          </div>

          {/* Video Container */}
          <div
            className="flex items-center justify-center lg:col-span-2"
            data-aos="fade-left"
            data-aos-duration="800"
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
                poster="/images/video-thumbnails/dashboard.jpg"
                className="w-full h-full object-cover"
                src="/videos/Dashboard.mp4"
              />
              {/* Glass effect overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-linear-to-br from-white/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
