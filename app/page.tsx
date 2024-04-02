import {
  getGitHubUser,
  getGitHubUserRepoReadmeFileContent,
  getGitHubUserRepos,
} from '@/ultilities/github';
import { getLeetCodeUserProfileSubmissionNumbers } from '@/ultilities/leetcode';
import {
  GitHubReadmeMarkdownJSON,
  parseGitHubReadmeMarkdown,
} from '@/ultilities/github-readme-markdown-parser';
import User from '@/components/user';
import Experience from '@/components/experience/experience';
import Education from '@/components/education/education';
import Projects from '@/components/projects/projects';
import LeetCode from '@/components/leetcode/leetcode';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer';

const Page = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    const [
      gitHubUserRepos,
      gitHubUserRepoFileContent,
      leetCodeUserProfileSubmissionNumbers,
    ] = await Promise.all([
      getGitHubUserRepos(),
      getGitHubUserRepoReadmeFileContent(
        gitHubUser['login'],
        gitHubUser['login'],
      ),
      getLeetCodeUserProfileSubmissionNumbers(gitHubUser['login']),
    ]);
    const iconSize = 28;
    const numberOfProjects = 20;
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
        <Projects
          gitHubUserRepos={gitHubUserRepos}
          numberOfProjects={numberOfProjects}
        />
        <LeetCode
          leetCodeUserProfileSubmissionNumbers={
            leetCodeUserProfileSubmissionNumbers
          }
        />
        <Contact
          gitHubUserEmail={gitHubUser['email']}
          gitHubUserName={gitHubUser['name']}
        />
        <Footer gitHubUser={gitHubUser} phoneNumber={phoneNumber} />
      </>
    );
  } catch (error) {
    console.error(error);
    return <>Something went wrong.</>;
  }
};

export default Page;
