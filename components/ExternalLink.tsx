const ExternalLink = ({ href, className, children }) => (
  <a
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
