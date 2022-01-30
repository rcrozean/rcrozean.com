import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="footer-link"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="page">
      <hr className="border-1 mb-8 w-full" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="grid space-y-4">
          <Link href="/">
            <a className="footer-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="footer-link">About</a>
          </Link>
          <Link href="/contact">
            <a className="footer-link">Contact</a>
          </Link>
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
        <div className="grid space-y-4">
          <Link href="/guestbook">
            <a className="footer-link">Guestbook</a>
          </Link>
          <Link href="/dashboard">
            <a className="footer-link">Dashboard</a>
          </Link>
          <Link href="/blog">
            <a className="footer-link">Blog</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
