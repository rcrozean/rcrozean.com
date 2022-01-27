import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 transition hover:text-gray-600">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/rcrozean">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rcrozean">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/guestbook">
            <a className="text-gray-500 transition hover:text-gray-600">
              Guestbook
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 transition hover:text-gray-600">
              Dashboard
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 transition hover:text-gray-600">Blog</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
