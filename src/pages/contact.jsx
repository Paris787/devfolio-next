import SEO from '../components/SEO/SEO';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
    return (
        <>
            <SEO
                title="联系我 | 桃蹊 DevSpace"
                description="与 Vigrombe 取得联系，合作或交流。"
            />
            <div>
                <h1>联系我</h1>
                <p>如果你有任何问题或合作意向，欢迎通过以下表单联系我。</p>
                <ContactForm />
                <p>或者通过以下方式找到我：</p>
                <ul>
                    <li><a href="https://github.com/">GitHub</a></li>
                    <li><a href="mailto:example@example.com">Email</a></li>
                </ul>
            </div>
        </>
    );
}