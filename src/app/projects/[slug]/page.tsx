'use client'

import { BLOGS} from "@/app/projects/data";
import * as FirstPost from '../posts/first-post.mdx'
import * as SecondPost from '../posts/second-post.mdx'
import { useParams } from 'next/navigation'

const POSTS_MAP = {
    'first-post': FirstPost.default,
    'second-post': SecondPost.default,
}

export default function BlogPage() {
    const params = useParams()
    const meta = BLOGS.find((b) => b.slug === params.slug)
    if (!meta) return <div>Not found</div>

    // @ts-ignore
    const Component = POSTS_MAP[params.slug]
    return (
        <section>
            <h1>{meta.title}</h1>
            <Component />
        </section>
    )
}