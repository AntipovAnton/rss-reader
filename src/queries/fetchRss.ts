import * as Parser from "rss-parser";
import { CORS_PROXY } from "config/const";

const parser = new Parser();

export const fetchRss = async (url) => {
    try {
        const feed = await parser.parseURL(CORS_PROXY + url);
        return feed.items.map(item => (
            {
                title: item.title,
                description: item.content
            }
        ));
    } catch (e) {
        return {error: "Can't parse rss from this url"};
    }
};
