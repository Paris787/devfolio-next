import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO/SEO';

export default function Home() {
    return (
        <>
            <SEO
                title="桃蹊 DevSpace | 首页"
                description="Vigrombe 的个人技术博客与作品展示，记录前端学习历程。"
            />
            <div>
                <section style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h1>你好，我是Vigrombe</h1>
                        <p>欢迎来到我的个人网站。我是一个正在学习前端开发的创作者，这里会记录我的学习历程、技术文章和项目作品。</p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                        <Image
                            src="/HelloWorld.png"
                            alt="Hello World"
                            width={400}
                            height={300}
                            priority
                            style={{ borderRadius: 'var(--border-radius)' }}
                        />
                    </div>
                </section>

                <section>
                    <h2>最新文章</h2>
                    <article>
                        <h3>开始学习 HTML</h3>
                        <p>记录了我创建第一个网页的经历。</p>
                        <Link href="/blog/getting-started">阅读全文</Link>
                    </article>
                </section>

                <section>
                    <h2>精选作品</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '0.25rem' }}>
                            <Image
                                src="/web.png"
                                alt="项目一截图"
                                width={300}
                                height={200}
                                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                            <h3>个人网站</h3>
                            <p>正在构建的个人网站，使用纯 HTML 与 CSS。</p>
                        </div>
                        <div style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '0.25rem' }}>
                            <Image
                                src="/Cifera.jpg"
                                alt="项目二截图"
                                width={300}
                                height={200}
                                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                            <h3>待定项目</h3>
                            <p>描述稍后补充。</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}