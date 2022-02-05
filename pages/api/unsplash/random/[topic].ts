import type { NextApiRequest, NextApiResponse } from "next";
import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { topic } = req.query;
    if(typeof topic === "string") {
        const photo = await unsplash.photos.getRandom({ query: topic, orientation: 'portrait' });

        res.setHeader('Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600');

        return res.status(200).json(photo.response);
    }

    return res.status(200).json("Object type not allowed in Unsplash API");
}