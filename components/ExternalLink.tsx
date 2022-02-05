const ExternalLink = ({ href, children }) => (
  <a className="" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default ExternalLink;
