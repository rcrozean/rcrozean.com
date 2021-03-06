export type UnsplashProps = {
    random?: boolean;
    photoId?: string;
    topic?: string;
}

export type UnsplashPhoto = {
    id: number;
    width: number;
    height: number;
    urls: { full: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    }
}