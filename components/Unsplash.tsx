import useSWR from 'swr';
import Image from 'next/image';

import fetcher from 'lib/fetcher';
import { UnsplashPhoto, UnsplashProps } from 'lib/types';

export default function UnsplashCard(props: UnsplashProps) {
  if (props.random) {
    const { data, error } = useSWR<UnsplashPhoto>(
      `/api/unsplash/random/${props.topic}`,
      fetcher
    );

    if (error) return <div>Error {error}: Failed to load.</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <div className="">
        <Image
          src={data?.urls.regular}
          width={data?.width}
          height={data?.height}
          alt={data?.urls.regular}
        />
      </div>
    );
  }

  const { data, error } = useSWR<UnsplashPhoto>(
    `/api/unsplash/id/${props.photoId}`,
    fetcher
  );

  if (error) return <div>Error {error}: Failed to load.</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="">
      <Image
        src={data?.urls.regular}
        width={data?.width}
        height={data?.height}
        alt={data?.urls.regular}
      />
    </div>
  );
}
