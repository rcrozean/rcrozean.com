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
    <footer>
      <hr />
      <NowPlaying />
      <div>
        <div>
          <Link href="/">
            <a>Home</a>
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
