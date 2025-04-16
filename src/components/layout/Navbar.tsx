import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Flarial Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-red-500 font-semibold text-xl">Flarial</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-red-500 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/faq" 
                className="text-white hover:text-red-500 transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="/contributors" 
                className="text-white hover:text-red-500 transition-colors"
              >
                Contributors
              </Link>
              <Link 
                href="https://discord.gg/swWz4s3gaM"
                className="text-white hover:text-red-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
              <Link
                href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/Flarial.Launcher.exe"
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Download
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-white block px-3 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="text-white block px-3 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contributors"
            className="text-white block px-3 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            Contributors
          </Link>
          <Link
            href="https://discord.gg/swWz4s3gaM"
            className="text-white block px-3 py-2 rounded-md hover:bg-red-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </Link>
          <Link
            href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/latest.zip"
            className="bg-red-500 text-white block px-3 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}
