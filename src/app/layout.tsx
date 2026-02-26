import './globals.css'
import type { Metadata } from 'next'
import {Navbar} from "@/components/nav";
import Footer from "@/components/footer";
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Next.js Portfolio Starter',
        template: '%s | Next.js Portfolio Starter',
    },
    description: 'This is my portfolio.',
    openGraph: {
        title: 'My Portfolio',
        description: 'This is my portfolio.',
        url: baseUrl,
        siteName: 'My Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
        >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
        </main>
        </body>
        </html>
    )
}