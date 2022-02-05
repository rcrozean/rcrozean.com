import Link from 'next/link';

import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full" />
      <div className="grid w-full max-w-2xl gap-4 pb-16 sm:grid-cols-3 sm:gap-36">
        <div className="grid space-y-4">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Contact', '/contact']
          ].map(([title, url]) => (
            <Link href={url} key={title}>
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
            <Link href={url} key={title}>
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
