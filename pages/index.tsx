import UnsplashCard from 'components/Unsplash';
import Head from 'next/head';

import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <div>Randolph "Cameron" Rozean</div>
        <div>Featured Blog Posts</div>
        <div>GitHub Projects</div>
      </div>
    </Container>
  );
}
