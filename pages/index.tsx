import BlogPost from 'components/BlogPost';
import Projects from 'components/Projects';
import UnsplashCard from 'components/Unsplash';
import Head from 'next/head';

import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <div>Randolph "Cameron" Rozean</div>
        <hr />
        <div className="pb-4">
          <h1>Projects</h1>
          <Projects />
        </div>
        <div className="hidden pb-4">
          <h1>Featured Blog Posts</h1>
          <BlogPost />
        </div>
        <div className="hidden pb-4">
          <h1>Recent Blog Posts</h1>
          <BlogPost />
        </div>
      </div>
    </Container>
  );
}
