import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO/SEO';

export default function NotFound() {
    return (
        <>
            <SEO
                title="404 找不到页面 | 桃蹊 DevSpace"
                description="呜哇～这个页面在神话之外哦～你可能输错了地址，或者页面已被移动到另一个次元。"
            />
            <div
                style={{
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                <Image
                    src="/404.jpg"
                    alt="二次元程序员疑惑"
                    width={600}
                    height={400}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                    }}
                    priority
                />
                <h2
                    style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: 'var(--color-primary)',
                    }}
                >
                    呜哇～这个页面在神话之外哦~ (╯°□°)╯︵ ┻━┻
                </h2>
                <p
                    style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-light)',
                        marginBottom: '2rem',
                        lineHeight: 1.6,
                    }}
                >
                    404 HTML 标签随铁幕一起消失力...
                    <br />
                    也许你输错 URL 了，或者页面已经被移动到另一个次元。
                </p>
                <Link href="/">
                    <button
                        style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            padding: '0.8rem 2rem',
                            borderRadius: '0.25rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        }}
                    >
                        返回安全的首页
                    </button>
                </Link>
            </div>
        </>
    );
}