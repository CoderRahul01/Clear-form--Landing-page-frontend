'use client';

export default function FeedbackWorkflow() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="space-y-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A Complete Feedback Workflow for Modern Teams
          </h2>

          {/* Accent Line */}
          <div className="h-1 w-24 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full" />

          {/* Description */}
          <p className="text-2xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl font-medium">
            Clearform helps you <span className="text-blue-600 font-bold">monitor</span> incoming responses, <span className="text-blue-600 font-bold">measure</span> their quality and completeness, and <span className="text-blue-600 font-bold">act</span> on structured insights — without messy dashboards or manual analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
