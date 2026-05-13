import Image from 'next/image';
import SEO from '../components/SEO/SEO';

export default function Portfolio() {
    return (
        <>
            <SEO
                title="作品集 | 桃蹊 DevSpace"
                description="Vigrombe 的项目作品展示。"
            />
            <div>
                <h1>作品集</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '0.25rem' }}>
                        <Image
                            src="/web.png"
                            alt="个人网站项目截图"
                            width={300}
                            height={200}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        />
                        <h3>个人网站</h3>
                        <p>响应式个人网站，使用语义化 HTML 和现代 CSS。</p>
                    </div>
                    <div style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '0.25rem' }}>
                        <Image
                            src="/Cifera.jpg"
                            alt="待定项目截图"
                            width={300}
                            height={200}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        />
                        <h3>待定</h3>
                        <p>即将添加更多项目。</p>
                    </div>
                </div>
            </div>
        </>
    );
}