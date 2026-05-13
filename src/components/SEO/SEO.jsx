import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({
    title,
    description,
    ogImage = '/og-default.png',
    ogType = 'website',
    articlePublishedTime,
}) {
    const router = useRouter();
    // 部署后请替换为你的真实域名，例如 https://你的项目名.vercel.app
    const siteUrl = 'https://devfolio-next-xxxxx.vercel.app'; // 先占位，部署后更新
    const canonical = `${siteUrl}${router.asPath}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="桃蹊 DevSpace" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {ogType === 'article' && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: title,
                            description: description,
                            datePublished: articlePublishedTime,
                            author: {
                                '@type': 'Person',
                                name: 'Vigrombe',
                            },
                        }),
                    }}
                />
            )}
        </Head>
    );
}