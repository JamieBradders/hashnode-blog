import { AppProps } from 'next/app';
import { Vollkorn } from 'next/font/google';

import '../styles/index.css';

const libreBaskerville = Vollkorn({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={libreBaskerville.className}>
			<Component {...pageProps} />;
		</div>
	);
}
