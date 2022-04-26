import BlogPost from 'components/BlogPost';
import ExternalLink from 'components/ExternalLink';
import Projects from 'components/Projects';
import UnsplashCard from 'components/Unsplash';
import Head from 'next/head';

import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <h1 className="text-3xl">Randolph "Cameron" Rozean</h1>
        <h2 className="text-sm">
          Full Stack Software Engineer at{' '}
          <span className="font-bold">Schlumberger</span>
        </h2>
        <hr />
        <div className="pb-4">
          <h1 className="text-2xl">About</h1>
          <p>
            Howdy! My name is Cameron Rozean. I need to figure out what else to
            put here. I hate this part of writing...
          </p>
          <p>Here are a few technologies I have been working with:</p>
          <div className="grid grid-cols-5">
            <ul className="col-start-2 list-inside list-disc">
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>.Net</li>
            </ul>
            <ul className="col-start-4 list-inside list-disc">
              <li>TypeScript</li>
              <li>Angular</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <div className="pb-4">
          <h1 className="text-2xl">GitHub Projects</h1>
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
