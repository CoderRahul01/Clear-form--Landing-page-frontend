import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white/90 px-3 shadow-lg shadow-black/[0.03]  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
          {/* Site branding */}
          <div className="flex flex-1 items-center z-50">
            <Image src='/images/logo.png' width={28} height={28} alt="Logo" priority />
          </div>

        {/*  navigation Links */}
            <div className="flex flex-1 items-center z-50">
                <ul className=" md:flex items-center gap-14 text-gray-700">
                    <li>
                        <Link href="/" className=" text-[14px] hover:text-gray-900">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className=" text-[14px] hover:text-gray-900">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/features" className=" text-[14px] hover:text-gray-900">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className=" text-[14px] hover:text-gray-900">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className=" text-[14px] hover:text-gray-900">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>



          {/* Get Early Access button */}
          <div className="flex z-50 flex-1 items-center justify-end">
            <Link
              href="/signup"
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900  hover:shadow-lg  hover:shadow-inset hover:scale-95 transition-all duration-200  hover:border  border-gray-400 "
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
