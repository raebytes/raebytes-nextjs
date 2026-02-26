import Link from 'next/link'
import { BLOGS } from './data'  // ⚡ richtig importieren

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
            <ul className="space-y-4">
                {BLOGS.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/projects/${post.slug}`} className="text-blue-600">
                            {post.title}
                        </Link>
                        <p className="text-sm text-neutral-500">{post.summary}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}