import Container from 'components/Container';

export default function Dashboard() {
  return (
    <Container title="RC Rozean - Dashboard">
      <div className="mx-auto mb-8 w-full max-w-4xl flex-col items-start justify-center pb-8">
        <h1>Dashboard</h1>
        <hr />
        <p>
          This is a placeholder for a personal dashboard for tracking different
          metrics. I currently haven't decided what to track. I eventually am
          thinking of tracking GitHub information like contributes to OSS,
          general GitHub commits (similar to the GitHub dashboard), blog post
          statitics, and other things I find fun or interesting to track. Check
          back here for updates.
        </p>
      </div>
    </Container>
  );
}
