"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
    mdxSource: MDXRemoteSerializeResult;
};

export default function MDXWrapper({ mdxSource }: Props) {
    return <MDXRemote {...mdxSource} />;
}