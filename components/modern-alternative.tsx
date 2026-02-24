'use client';

export default function ModernAlternative() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-8" data-aos="fade-up" data-aos-duration="900">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A Modern Alternative
            <br />
            to Traditional Form Builders
          </h2>

          {/* Divider */}
          <div>
            <div className="h-1 w-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Most form builders collect noise. Clearform collects clarity. By intelligently guiding users as they respond, we transform raw feedback into actionable insights — no cleanup required.
          </p>

        </div>
      </div>
    </div>
  );
}
