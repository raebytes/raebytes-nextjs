import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getProject(slug: string) {
    const filePath = path.join(projectsDir, `${slug}.mdx`);
    return fs.readFileSync(filePath, "utf8");
}