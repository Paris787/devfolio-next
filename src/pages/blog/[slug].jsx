import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

export default function BlogPost({ post }) {
    return (
        <>
            <SEO
                title={`${post.title} | 桃蹊 DevSpace`}
                description={post.summary}
                ogType="article"
                articlePublishedTime={post.date}
            />
            <article>
                <h1>{post.title}</h1>
                <p>发布于 {post.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <Link href="/blog">← 返回博客列表</Link>
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    const paths = posts.map(post => ({
        params: { slug: post.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    return {
        props: {
            post,
        },
    };
}