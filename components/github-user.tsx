import Image from "next/image";

const GitHubUser = ({gitHubUser}: any) => <div className="flex justify-center">
  <div className="flex flex-col items-center mt-10">
    <Image
      className="rounded-full w-36"
      src={gitHubUser["avatar_url"]}
      alt="user avatar"
      width={144}
      height={144}
    />
    <div className="mt-4">
      <p className="text-2xl font-bold">{gitHubUser["name"]}</p>
      <p className="text-gray-500">{gitHubUser["bio"]}</p>
    </div>
    <div className="flex mt-4">
      <p className="text-gray-500">Location: </p>
      <p className="ml-2">{gitHubUser["location"]}</p>
    </div>
    <div className="flex mt-4">
      <p className="text-gray-500">Twitter: </p>
      <a
        className="ml-2"
        href={`https://twitter.com/${gitHubUser["twitter_username"]}`}
      >
        {gitHubUser["twitter_username"]}
      </a>
    </div>
    <div className="flex mt-4">
      <p className="text-gray-500">Github: </p>
      <a className="ml-2" href={gitHubUser["html_url"]}>
        {gitHubUser["html_url"]}
      </a>
    </div>
  </div>
</div>;

export default GitHubUser;