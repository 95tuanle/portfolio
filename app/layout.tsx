import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getGitHubUser } from '@/ultilities/github';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 3600;

export const generateMetadata = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    return {
      title: `Portfolio - ${gitHubUser['name']}`,
      description: `Welcome to the portfolio of ${gitHubUser['name']}, a ${gitHubUser['bio']} based in ${gitHubUser['location']}. Explore my projects and skills.`,
      metadataBase: new URL(gitHubUser['avatar_url']),
      icons: {
        icon: { url: gitHubUser['avatar_url'] },
        shortcut: { url: gitHubUser['avatar_url'] },
        apple: { url: gitHubUser['avatar_url'] },
        other: { url: gitHubUser['avatar_url'] },
      },
      openGraph: {
        title: `Portfolio - ${gitHubUser['name']}`,
        description: `Welcome to the portfolio of ${gitHubUser['name']}, a ${gitHubUser['bio']} based in ${gitHubUser['location']}. Explore my projects and skills.`,
        images: [{ url: gitHubUser['avatar_url'] }],
        url: `${gitHubUser['html_url']}`,
      },
      twitter: {
        title: `Portfolio - ${gitHubUser['name']}`,
        description: `Welcome to the portfolio of ${gitHubUser['name']}, a ${gitHubUser['bio']} based in ${gitHubUser['location']}. Explore my projects and skills.`,
        creator: `@${gitHubUser['twitter_username']}`,
        images: [{ url: gitHubUser['avatar_url'] }],
      },
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default Layout;
