import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/travis_pic.jpg"
                      alt="Travis Halleck"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xl font-semibold text-white" style={{ fontFamily: '"Space Mono", monospace' }}>Travis Halleck</span>
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="/#projects"
                  className="text-gray-300 hover:text-white px-3 py-2 text-base font-bold tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Portfolio
                </Link>
                <Link
                  href="/articles"
                  className="text-gray-300 hover:text-white px-3 py-2 text-base font-bold tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Articles
                </Link>
                <Link
                  href="https://www.seoharmonytool.com/"
                  className="text-gray-300 hover:text-white px-3 py-2 text-base font-bold tracking-wider"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Free Tool
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white px-3 py-2 text-base font-bold tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu button */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;