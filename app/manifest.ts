import { getGitHubUser } from '@/ultilities/github';

const manifest = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    return {
      name: `Portfolio - ${gitHubUser['name']}`,
      short_name: `Portfolio - ${gitHubUser['name']}`,
      description: `Welcome to the portfolio of ${gitHubUser['name']}, a ${gitHubUser['bio']} based in ${gitHubUser['location']}. Explore my projects and skills.`,
      start_url: '/',
      display: 'standalone',
      background_color: 'rgb(0,0,0)',
      theme_color: 'rgb(0,0,0)',
      icons: [
        {
          src: gitHubUser['avatar_url'],
          sizes: 'any',
          type: 'image/x-icon',
          purpose: 'any maskable',
        },
      ],
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default manifest;
