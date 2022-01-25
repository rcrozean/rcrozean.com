import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('api/now-playing', fetcher);

  return (
    <div>
      {data?.songUrl ? (
        <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
          {data.title}
        </a>
      ) : (
        <p>Not Playing</p>
      )}
      <span>{' – '}</span>
      <p>{data?.artist ?? 'Spotify'}</p>
    </div>
  );
}
