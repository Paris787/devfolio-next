import SEO from '../../components/SEO/SEO';
import BlogList from '../../components/BlogList/BlogList';
import { getAllPosts } from '../../lib/posts';

export default function BlogHome({ posts }) {
    return (
        <>
            <SEO
                title="博客 | 桃蹊 DevSpace"
                description="Vigrombe 的技术博客，涵盖 HTML、CSS、JavaScript 等前端话题。"
            />
            <div>
                <h1>博客文章</h1>
                <BlogList posts={posts} />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    };
}