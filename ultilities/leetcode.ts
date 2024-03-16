export const getLeetCodeUserProfileSubmissionNumbers = async (
  username: string,
) => {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });
    const {
      data: {
        matchedUser: {
          submitStats: { acSubmissionNum },
        },
      },
    } = await response.json();
    return acSubmissionNum;
  } catch (error) {
    throw error;
  }
};
