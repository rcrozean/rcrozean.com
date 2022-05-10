import { Repo } from 'lib/types/github.types';
import ExternalLink from './ExternalLink';

import { useState } from 'react';

export default function GitHubCard(props: Repo) {
  const { repository } = props;

  return (
    <ExternalLink
      href={repository.html_url}
      className="flex flex-col items-center rounded-xl border shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 md:w-full md:flex-row"
    >
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src=""
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-2xl font-bold tracking-tight">
          {repository.name}
        </p>
        <p className="mb-3 font-normal">{repository.description}</p>
      </div>
    </ExternalLink>
  );
}
