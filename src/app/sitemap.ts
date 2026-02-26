import { getBlogPosts} from "@/app/projects/utils";

export const baseUrl = 'https://www.timbrn.de'

export default async function sitemap() {
    // @ts-ignore
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/projects/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    let routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}