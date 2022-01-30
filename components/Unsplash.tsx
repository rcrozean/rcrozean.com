import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { UnsplashPhoto } from 'lib/types';
import { useRouter } from 'next/router';

export default function UnsplashCard() {
  const { data } = useSWR<UnsplashPhoto>(`/api/unsplash`, fetcher);

  return (
    <div className="">
      <img src={data?.urls.regular} />
    </div>
  );
}
