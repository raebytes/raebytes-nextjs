import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Metadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}

export type BlogPost = {
    slug: string
    metadata: Metadata
    content: string
}

const POSTS_PATH = path.join(process.cwd(), 'src', 'content', 'projects')

export function getBlogPosts(): BlogPost[] {
    const files = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith('.mdx'))

    return files.map((file) => {
        const filePath = path.join(POSTS_PATH, file)
        const source = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(source)
        const slug = path.basename(file, '.mdx')

        return {
            slug,
            metadata: data as Metadata,
            content,
        }
    })
}

export function formatDate(date: string, includeRelative = false) {
    let currentDate = new Date()
    if (!date.includes('T')) date = `${date}T00:00:00`
    let targetDate = new Date(date)

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    let daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = yearsAgo > 0 ? `${yearsAgo}y ago` :
        monthsAgo > 0 ? `${monthsAgo}mo ago` :
            daysAgo > 0 ? `${daysAgo}d ago` : 'Today'

    let fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    return includeRelative ? `${fullDate} (${formattedDate})` : fullDate
}