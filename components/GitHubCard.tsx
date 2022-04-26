import ExternalLink from './ExternalLink';

export default function GitHubCard(props) {
  const { name, description, html_url, languages_url } = props.children;

  return (
    <div className="relative mx-auto grid grid-cols-3">
      <div className="col-span-1">
        <image></image>
      </div>
      <div className="col-span-2 shadow-sm">
        <ExternalLink href={html_url}>{name}</ExternalLink>
        <div>{description}</div>
        <div>languages</div>
      </div>
    </div>
  );
}
