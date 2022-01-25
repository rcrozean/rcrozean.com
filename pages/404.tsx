import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 - RC Rozean">
      <div>
        <h1>404 - Error Not Found!</h1>
        <p>
          Either you are looking for something that used to exist, is yet to
          exist, or there is a typo... Unless you are from the future it is most
          likely a typo.
        </p>
        <Link href="/">
          <a>Return Home.</a>
        </Link>
      </div>
    </Container>
  );
}
