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

  let { oss, personal } = data;

  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="">
          <Tab
            key="Recent"
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
            key="recent"
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {oss.map((post: GitHubRepo) => (
                <li
                  key={post.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3"
                >
                  <h3 className="text-sm font-medium leading-5">{post.name}</h3>

                  <ul className="">
                    <li>{post.description}</li>
                    <li>&middot;</li>
                    <li>{post.html_url} comments</li>
                    <li>&middot;</li>
                    <li>{post.languages_url} shares</li>
                  </ul>

                  <a
                    href="#"
                    className={classNames(
                      'absolute inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel
            key="oss"
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {oss.map((post: GitHubRepo) => (
                <li
                  key={post.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3"
                >
                  <h3 className="text-sm font-medium leading-5">{post.name}</h3>

                  <ul className="">
                    <li>{post.description}</li>
                    <li>&middot;</li>
                    <li>{post.html_url} comments</li>
                    <li>&middot;</li>
                    <li>{post.languages_url} shares</li>
                  </ul>

                  <a
                    href="#"
                    className={classNames(
                      'absolute inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel
            key="personal"
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <ul>
              {personal.map((post: GitHubRepo) => (
                <li
                  key={post.id}
                  className="hover:bg-coolGray-100 relative rounded-md p-3"
                >
                  <h3 className="text-sm font-medium leading-5">{post.name}</h3>

                  <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                    <li>{post.description}</li>
                    <li>&middot;</li>
                    <li>{post.html_url} comments</li>
                    <li>&middot;</li>
                    <li>{post.languages_url} shares</li>
                  </ul>

                  <a
                    href="#"
                    className={classNames(
                      'absolute inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
