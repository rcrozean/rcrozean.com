import useSWR from 'swr';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import ExternalLink from './ExternalLink';

import fetcher from 'lib/fetcher';
import { GitHub, GitHubRepo } from 'lib/types/github.types';
import GitHubCard from './GitHubCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Projects() {
  const { data, error } = useSWR<GitHub>('/api/github', fetcher);

  if (error) return <div>Error {error}: Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  let { repositories, personal, oss } = data;

  return (
    <div className="w-full px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-sm bg-blue-900/20 p-1">
          <Tab
            key="Recent"
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                '',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Recent
          </Tab>
          <Tab
            key="OSS"
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            OSS
          </Tab>
          <Tab
            key="Personal"
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Personal
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            key="Recent"
            className={classNames(
              'rounded-xl p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {repositories.map((repo: GitHubRepo) => (
                <li
                  key={repo.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3 dark:text-black"
                >
                  <GitHubCard repository={repo} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel
            key="OSS"
            className={classNames(
              'rounded-xl p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {oss.map((repo: GitHubRepo) => (
                <li
                  key={repo.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3"
                >
                  <GitHubCard repository={repo} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel
            key="Personal"
            className={classNames(
              'rounded-xl p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {personal.map((repo: GitHubRepo) => (
                <li
                  key={repo.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3"
                >
                  <GitHubCard repository={repo} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
