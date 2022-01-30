import UnsplashCard from 'components/Unsplash';
import Head from 'next/head';

import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="page">
        <div>Randolph "Cameron" Rozean</div>
        <div>Featured Blog Posts</div>
        <div>GitHub Projects</div>
      </div>
    </Container>
  );
}
