import ExternalLink from './ExternalLink';

export default function GitHubCard(props) {
  console.log(props);
  //const { id, name, description, html_url, languages_url } = props;
  return (
    <div className="relative flex">
      <div className="shadow-sm">
        <ExternalLink href={html_url}>{name}</ExternalLink>
      </div>
    </div>
  );
}
