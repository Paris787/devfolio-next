import { getAllPosts } from '../../lib/posts';

export default function handler(req, res) {
    try {
        const posts = getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: '获取文章失败' });
    }
}