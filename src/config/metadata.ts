import { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon-16x16.png',
            },
            {
                rel: 'android-chrome',
                sizes: '192x192',
                url: '/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome',
                sizes: '512x512',
                url: '/android-chrome-512x512.png',
            },
        ],
    },

    openGraph: {
        type: "website",
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.title,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Harshavardhan Kona - Portfolio",
            },
        ],
        locale: siteConfig.locale,
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.creator,
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: siteConfig.url,
    },
};

export default metadata;
