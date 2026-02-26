export type BlogMeta = {
    slug: string
    title: string
    publishedAt: string
    summary: string
    image?: string
}

export const BLOGS: BlogMeta[] = [
    {
        slug: 'first-post',
        title: 'Mein erster Post',
        publishedAt: '2026-02-01',
        summary: 'Dies ist der erste Blogeintrag.',
        image: '/images/first-post.jpg',
    },
    {
        slug: 'second-post',
        title: 'Zweiter Blogeintrag',
        publishedAt: '2026-02-10',
        summary: 'Noch ein spannender Post.',
    },
]