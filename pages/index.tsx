import BlogPost from 'components/BlogPost';
import Projects from 'components/Projects';
import UnsplashCard from 'components/Unsplash';

import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <h1 className="text-3xl font-bold">Randolph "Cameron" Rozean</h1>
        <h2 className="text-sm">
          Full Stack Software Engineer at{' '}
          <span className="font-bold">Schlumberger</span>
        </h2>
        <hr />
        <div className="pb-4">
          <h1 className="text-2xl font-semibold">About</h1>
          <p>
            Howdy! My name is Cameron Rozean. I am a full stack software
            engineer with a passion for technology. I have experience in IT
            helpdesk, system administration, automation, and most recently
            software engineering. Currently working on a large ML/Robotics
            project, a GIS mapping project, and a few other personal (for fun)
            Web Development projects, that as I clean up will begin sharing in
            the{' '}
            <a className="font-semibold" href="#projects">
              Projects
            </a>{' '}
            section. Check back in for more updates.
          </p>
          <br />
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
        <div className="w-full pb-4">
          <h1 className="text-2xl font-semibold" id="projects">
            Projects
          </h1>
          <Projects />
        </div>
        <div className="pb-4">
          <h1 className="text-2xl font-semibold" id="blogposts">
            Blog Posts
          </h1>
          <BlogPost />
        </div>
      </div>
    </Container>
  );
}
