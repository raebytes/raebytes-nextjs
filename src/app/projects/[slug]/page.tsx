import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Props = {
    params: { slug: string };
};

const projectsDir = path.join(process.cwd(), "content/projects");

export async function generateStaticParams() {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".mdx"));
    return files.map(f => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function ProjectPage({ params }: Props) {
    const filePath = path.join(projectsDir, `${params.slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return <p>Project not found</p>;
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const mdxSource = await serialize(source);

    return <MDXRemote {...mdxSource} />;
}