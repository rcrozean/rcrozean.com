import type { NextApiResponse } from "next";
import type { GitHubUser, GitHubRepo } from "../../lib/types/github.types"

export default async function handler(
    res: NextApiResponse
) {
    const userResponse: Response = await fetch('https://api.github.com/users/rcrozean');
    const userReposResponse: Response = await fetch('https://api.github.com/users/rcrozean/repos?per_page=100');

    const user: GitHubUser = await userResponse.json();
    const repositories: GitHubRepo[] = await userReposResponse.json();

    const personal: GitHubRepo[] = repositories.filter((repo) => !repo.fork);
    const oss: GitHubRepo[] = repositories.filter((repo) => repo.fork);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        user,
        personal,
        oss
    });
}