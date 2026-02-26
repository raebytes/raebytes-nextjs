import fs from "fs";
import path from "path";
import MDXWrapper from "@/components/MDXWrapper";
import { serialize } from "next-mdx-remote/serialize";

const projectsDir = path.join(process.cwd(), "content/projects");

export async function generateStaticParams() {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".mdx"));
    return files.map(f => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function ProjectPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    const params = await paramsPromise;

    const filePath = path.join(projectsDir, `${params.slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return <p>Project not found</p>;
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const mdxSource = await serialize(source);

    return <MDXWrapper mdxSource={mdxSource} />;
}