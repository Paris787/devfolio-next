import { ThemeProvider } from '../contexts/ThemeContext';
import { SearchProvider } from '../contexts/SearchContext';
import Layout from '../components/Layout/Layout';
import SearchModal from '../components/SearchModal/SearchModal';
import ToastContainer from '../components/Toast/Toast';
import { Noto_Serif_SC } from 'next/font/google';
import '../styles/globals.css';

const notoSerif = Noto_Serif_SC({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif',
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <SearchProvider>
                <div className={notoSerif.variable}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <SearchModal />
                    <ToastContainer />
                </div>
            </SearchProvider>
        </ThemeProvider>
    );
}