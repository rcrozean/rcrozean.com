import Container from 'components/Container';
import ExternalLink from 'components/ExternalLink';

export default function Guestbook() {
  return (
    <Container title="RC Rozean - Guestbook">
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <h1>Guestbook</h1>
        <hr />
        <p>Sign the guestbook and leave a comment below!</p>
        <button className="">Sign Guestbook</button>
      </div>
    </Container>
  );
}
