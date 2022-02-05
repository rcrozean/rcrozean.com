import type { NextApiRequest, NextApiResponse } from "next";
import { createApi } from 'unsplash-js';

const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

export default async function imageHandler (
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { id } = req.query;
    if(typeof id === "string") {
        let photo = await unsplash.photos.get({ photoId: id });
        res.setHeader('Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600');

        return res.status(200).json(photo.response);
    }

    return res.status(200).json("Object type not allowed in Unsplash API")
}