import Link from 'next/link';

import Container from 'components/Container';
import UnsplashCard from 'components/Unsplash';

export default function NotFound() {
  return (
    <Container title="404 - RC Rozean">
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <div className="flex-col-2 flex">
          <div className="w-full">
            <h1>404 - Page Not Found</h1>
            <hr />
            <p>
              You seem lost. Either there is a typo in the URL, the page no
              longer exists, or you are from the future and the page is yet to
              exist... Enjoy this nice dessert and make your way back when
              ready.
            </p>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </Container>
  );
}
