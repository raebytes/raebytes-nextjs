import fs from "fs";
import path from "path";
import Link from "next/link";

export const runtime = "edge";

const projectsDir = path.join(process.cwd(), "content/projects");

export default function Projects() {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith(".mdx"));
    const slugs = files.map(f => f.replace(/\.mdx$/, ""));

    return (
        <ul>
            {slugs.map(slug => (
                <li key={slug}>
                    <Link href={`/projects/${slug}`}>{slug}</Link>
                </li>
            ))}
        </ul>
    );
}