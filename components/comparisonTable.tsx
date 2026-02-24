'use client';

import Image from "next/image";
import ClearformLogo from "@/public/images/logowname.png";

export default function ComparisonTable() {
  const comparisonData = [
    {
      traditional: "Collect raw responses",
      clearform: "Improve response quality at the source"
    },
    {
      traditional: "Quantity-driven metrics",
      clearform: "Decision-ready clarity"
    },
    {
      traditional: "Analyze after submission",
      clearform: "Structured before submission"
    },
    {
      traditional: "Manual filtering required",
      clearform: "Built-in signal filtering"
    },
    {
      traditional: "Dashboards full of noise",
      clearform: "Insights focused on action"
    }
  ];

  return (
    <section className="py-16 md:py-24 ">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        {/* Main Title */}
        <div className="mb-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-1">
            Why Clearform Wins
          </h2>
          <p className="text-[17px] text-gray-600">
            See how Clearform transforms feedback collection
          </p>
        </div>

        {/* Comparison Flex Container */}
        <div className="relative flex flex-col md:flex-row">
          
          {/* Column 1: Traditional Forms (Blurred/Recessed) */}
          <div 
            className="flex-1"
            style={{
              filter: "blur(0.5px)"
            }}
          >
            <div className="bg-gray-100 rounded-lg p-4 md:p-4">
              <h3 className="text-sm md:text-base font-extrabold text-gray-600 mb-4">Traditional Forms</h3>
              
              {/* Example Section */}
              <div className="mb-4 p-2 bg-gray-200 rounded">
                <p className="text-xs text-gray-500 ">Complex manual entry</p>
              </div>

              <div className="space-y-3">
                {comparisonData.map((item, index) => (
                  <div key={index} className="pb-2 border-b border-gray-300">
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.traditional}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Clearform (Prominent/Primary) */}
          <div 
            className="flex-1 relative z-10 shadow-2xl rounded-xl -mt-6 md:mt-0 md:-mx-4">
            <div className="bg-white  p-4 md:p-4 h-full  rounded-2xl">
              <div className="mb-4">
                <Image
                  src={ClearformLogo}
                  width={125}
                  height={40}
                  alt="Clearform Logo"
                  className="h-auto w-auto"
                />
              </div>

              {/* Example Section */}
              <div className="mb-4 p-2 bg-gray-50 rounded border border-green-600">
                <p className="text-xs font-bold ">Intelligent, frictionless flow</p>
              </div>

              <div className="space-y-3">
                {comparisonData.map((item, index) => (
                  <div key={index} className="pb-3 border-b border-gray-200">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold text-lg shrink-0 mt-0">✓</span>
                      <p className="text-sm text-gray-900 font-semibold leading-relaxed">{item.clearform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-2xl text-[18px] mx-auto">
            Experience the difference between collecting feedback and understanding it. 
            Clearform delivers clarity, not clutter.
          </p>
        </div>
      </div>
    </section>
  );
}