import Education from '@/components/education';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import User from '@/components/user';
import {
  GitHubReadmeMarkdownJSON,
  parseGitHubReadmeMarkdown,
} from '@/ultilities/github-readme-markdown-parser';
import {
  getGitHubUser,
  getGitHubUserRepoReadmeFileContent,
  getGitHubUserRepos,
} from '@/ultilities/github';

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

const Page = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    const [gitHubUserRepos, gitHubUserRepoFileContent] = await Promise.all([
      getGitHubUserRepos(),
      getGitHubUserRepoReadmeFileContent(
        gitHubUser['login'],
        gitHubUser['login'],
      ),
    ]);
    const iconSize = 28;
    let phoneNumber: string | any;
    let leetCodeUrl: string | any;
    let linkedInUrl: string | any;
    let stackOverflowUrl: string | any;
    let wellfoundUrl: string | any;
    let redditUrl: string | any;
    let soundCloudUrl: string | any;
    let gitHubReadmeMarkdownJSON: GitHubReadmeMarkdownJSON | any;
    if (typeof gitHubUserRepoFileContent == 'string') {
      gitHubReadmeMarkdownJSON = parseGitHubReadmeMarkdown(
        gitHubUserRepoFileContent,
      );
      for (const gitHubReadmeMarkdownJSONContact of gitHubReadmeMarkdownJSON[
        'contactInformation'
      ]) {
        switch (gitHubReadmeMarkdownJSONContact['type']) {
          case 'Phone':
            phoneNumber = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'LeetCode':
            leetCodeUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'LinkedIn':
            linkedInUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'Stack Overflow':
            stackOverflowUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'Wellfound':
            wellfoundUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'Reddit':
            redditUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
          case 'SoundCloud':
            soundCloudUrl = gitHubReadmeMarkdownJSONContact['url'];
            break;
        }
      }
    }
    return (
      <>
        <div className="text-black text-center bg-yellow-500 p-3 rounded">
          Work in Progress
        </div>
        <User
          gitHubUser={gitHubUser}
          phoneNumber={phoneNumber}
          leetCodeUrl={leetCodeUrl}
          linkedInUrl={linkedInUrl}
          stackOverflowUrl={stackOverflowUrl}
          wellfoundUrl={wellfoundUrl}
          redditUrl={redditUrl}
          soundCloudUrl={soundCloudUrl}
          iconSize={iconSize}
        />
        <Experience experience={gitHubReadmeMarkdownJSON['experience']} />
        <Education education={gitHubReadmeMarkdownJSON['education']} />
        <Projects gitHubUserRepos={gitHubUserRepos} />
        <Footer gitHubUser={gitHubUser} phoneNumber={phoneNumber} />
      </>
    );
  } catch (error) {
    console.error(error);
    return <>Something went wrong.</>;
  }
};

export default Page;
