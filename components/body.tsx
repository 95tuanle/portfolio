import {
  getGitHubUser,
  getGitHubUserRepoReadmeFileContent,
  getGitHubUserRepos,
} from '@/ultilities/github';
import {
  GitHubReadmeMarkdownJSON,
  parseGitHubReadmeMarkdown,
} from '@/ultilities/github-readme-markdown-parser';
import User from '@/components/user';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

export const Body = async () => {
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
