export enum Form {
    Initial,
    Loading,
    Success,
    Error
}

export type FormState = {
    state: Form;
    message?: string;
};

export type GitHub = {
    user: {
        login: string;
        id: number;
        avatar_url: string;
        html_url: string;
    };
    mine: [{ id: number;
             name: string
             description?: string;
             html_url: string;
             languages_url: string;
          }];
    oss: [{ id: number;
            name: string
            description?: string;
            html_url: string;
            languages_url: string;
         }];
}

export type GitHubProj = {
    id: number;
    name: string;
    description?: string;
}

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
    };
};