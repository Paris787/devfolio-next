import Image from 'next/image';
import SEO from '../components/SEO/SEO';

export default function About() {
    return (
        <>
            <SEO
                title="关于我 | 桃蹊 DevSpace"
                description="了解 Vigrombe 的学习之路与技术背景。"
            />
            <div>
                <h1>关于我</h1>
                <Image
                    src="/littlecat.jpg"
                    alt="我的头像"
                    width={200}
                    height={200}
                    style={{ borderRadius: 'var(--border-radius)' }}
                />
                <section>
                    <h2>我的学习之路</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {[
                            { year: '2026年5月', desc: '开始学习 HTML 和 CSS，搭建个人网站骨架。' },
                            { year: '2026年5月', desc: '深入学习响应式布局与 JavaScript 交互。' },
                            { year: '未来', desc: '掌握 React 与工程化，成为前端开发者。' },
                            { year: '持续', desc: '保持记录，持续输出技术文章。' }
                        ].map((item, i) => (
                            <div key={i} style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '0.25rem' }}>
                                <h3>{item.year}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}