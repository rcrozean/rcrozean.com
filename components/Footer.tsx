import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start">
      <hr className="w-full boarder-1 border-gray-200 mb-8" />
      <div>
        <div className="w-full max-2-2xl grid grid-cols-1">
          <Link href="/">
            <a className="test-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/blog">
            <a>Contact</a>
          </Link>
        </div>
        <div>
          <ExternalLink href="https://twitter.com/rcrozean">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rcrozean">Github</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
