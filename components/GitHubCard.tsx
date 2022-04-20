import ExternalLink from './ExternalLink';

export default function GitHubCard(props) {
  const { id, name, description, html_url, languages_url } = props.children;

  return (
    <div className="relative flex">
      <div className="shadow-sm">
        <ExternalLink href={props.children.html_url}>
          {props.children.name}
        </ExternalLink>
      </div>
    </div>
  );
}
