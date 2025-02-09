export interface MediaItem {
    id: number,
    link?: string
}

export interface ContentItem {
    id: number,
    video_src?: string;
    source_url?: string;
    alt_text?: string;
}

export interface Teacher {
    image?: string;
    text?: string;
}