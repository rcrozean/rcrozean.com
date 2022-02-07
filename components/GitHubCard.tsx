import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

import fetcher from 'lib/fetcher';
import { GitHub } from 'lib/types';

export default function GitHubCard() {
  const { data, error } = useSWR<GitHub>('/api/github', fetcher);

  if (error) return <div>Error {error}: Failed to load.</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="relative flex">
      <div className="shadow-sm">
        {data?.oss.map((proj) => (
          <Link href="#">
            <a className="">{proj.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
