export interface RssStore {
    isLoading: boolean;
    rss: RssFeed[];
    fetchError: string;
}

export interface RssForm {
    rss: string;
}

export interface RssFeed {
    title: string;
    description: string;
}