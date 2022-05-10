interface Props {
  href: string;
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

const ExternalLink = (props: Props) => (
  <a
    className={props.className}
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}
  >
    {props.children}
  </a>
);

export default ExternalLink;
