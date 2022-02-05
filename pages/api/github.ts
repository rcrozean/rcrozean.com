import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userResponse = await fetch('https://api.github.com/users/rcrozean');
    const userReposResponse = await fetch('https://api.github.com/users/rcrozean/repos?per_page=100');

    const user = await userResponse.json();
    const repositories = await userReposResponse.json();

    const mine = repositories.filter((repo) => !repo.fork);
    const oss = repositories.filter((repo) => repo.fork);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({
        user,
        mine,
        oss
    });
}