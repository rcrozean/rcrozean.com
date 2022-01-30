import Link from 'next/link';

import Container from 'components/Container';
import UnsplashCard from 'components/Unsplash';

export default function NotFound() {
  return (
    <Container title="404 - RC Rozean">
      <div className="page">
        <div className="flex-col-2 = flex">
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
          <div className="w-full">
            <UnsplashCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
