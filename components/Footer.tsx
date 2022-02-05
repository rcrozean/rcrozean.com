import Link from 'next/link';

import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="page">
      <hr className="border-1 mb-8 w-full" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-36 pb-16 sm:grid-cols-3">
        <div className="grid space-y-4">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Contact', '/contact']
          ].map(([title, url]) => (
            <Link href={url}>
              <a className="">{title}</a>
            </Link>
          ))}
        </div>
        <div className="grid space-y-4">
          {[
            ['Guestbook', '/guestbook'],
            ['Dashboard', '/dashboard'],
            ['Blog', '/blog']
          ].map(([title, url]) => (
            <Link href={url}>
              <a className="">{title}</a>
            </Link>
          ))}
        </div>
        <div className="grid space-y-4">
          <ExternalLink href="https://twitter.com/rcrozean">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rcrozean">GitHub</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/randolph-rozean">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
