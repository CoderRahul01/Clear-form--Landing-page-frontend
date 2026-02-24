import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import Link from "next/link";

export default function Cta() {
  return (
    <section>
      <style>{`
        @keyframes shift-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-button {
          background: linear-gradient(-45deg, #ff4338, #ef4444, #dc2626, #b91c1c);
          background-size: 300% 300%;
          animation: shift-gradient 6s ease infinite;
          box-shadow: 0 0 20px rgba(255, 67, 56, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .gradient-button:hover {
          animation: pulse-glow 1s ease-in-out infinite, shift-gradient 1s ease infinite;
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 my-15">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-120 rounded-full border-20 border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.7),transparent)1] md:mb-12 md:text-4xl">
              Start Your Feedback Intelligence Journey Today
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <Link href="/early-access">
                <button
                  className="gradient-button px-8 py-3 text-white rounded-xl whitespace-nowrap font-bold shadow-2xl transition-all duration-300 text-lg tracking-wide relative overflow-hidden group hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Early Access
                    <span className="group-hover:translate-x-1 transition-transform duration-100">→</span>
                  </span>
                  <div 
                    className="absolute inset-0 bg-linear-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
