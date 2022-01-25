import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';

function NavItemp({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a>
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  //After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Cameron Rozean - Developer & Creator',
    description: 'Full Stack developer, IT Professional, and Tech Enthusiast',
    image: 'https://rcrozean.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://rcrozean.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://rcrozean.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div>
        <nav>
          <a href="#skip">Skip to content</a>
          <div>Mobile Menu</div>
        </nav>
      </div>
      <main id="skip">
        {children}
        <Footer />
      </main>
    </div>
  );
}
