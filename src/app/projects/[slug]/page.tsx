import type {Metadata} from "next";

type Props = {
    params: { slug: string };
};

export const metadata: Metadata = {
    title: "Project X"
};

export default function Project({ params }: Props) {
    return <h1>Projekt: {params.slug}</h1>;
}