/** @format */

import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'], // Or 'variable' if supported by your version
	variable: '--font-poppins',
	display: 'swap',
	preload: true,
	adjustFontFallback: true,
});

export const metadata: Metadata = {
	metadataBase: new URL('https://zatgo.online'),
	title: {
		default: 'ZatGo Innovation — Smart Software for Modern Businesses',
		template: '%s | ZatGo Innovation',
	},
	description:
		'We design and develop modern, scalable software solutions — POS systems, ERP platforms, mobile apps, and SaaS products.',
	keywords: [
		'software development',
		'POS systems',
		'ERP platforms',
		'mobile apps',
		'SaaS products',
		'web development',
		'cloud solutions',
		'ZatGo Innovation',
	],
	authors: [
		{
			name: 'ZatGo Innovation',
			url: 'https://zatgo.com',
		},
	],
	creator: 'ZatGo Innovation',
	publisher: 'ZatGo Innovation',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://zatgo.com',
		title: 'ZatGo Innovation — Smart Software for Modern Businesses',
		description:
			'We design and develop modern, scalable software solutions — POS systems, ERP platforms, mobile apps, and SaaS products.',
		siteName: 'ZatGo Innovation',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'ZatGo Innovation - Smart Software for Modern Businesses',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ZatGo Innovation — Smart Software for Modern Businesses',
		description:
			'We design and develop modern, scalable software solutions — POS systems, ERP platforms, mobile apps, and SaaS products.',
		images: ['/twitter-image.jpg'],
		creator: '@zatgo',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code', // Add your Google verification code
		// yandex: 'your-yandex-verification-code',
		// yahoo: 'your-yahoo-verification-code',
	},
	category: 'technology',
	alternates: {
		canonical: 'https://zatgo.com',
		languages: {
			'en-US': 'https://zatgo.com',
			// 'es-ES': 'https://zatgo.com/es',
		},
	},
};

// Loading component for Suspense
function LoadingFallback() {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='relative'>
				<div className='w-12 h-12 border-2 border-silver/20 border-t-silver rounded-full animate-spin' />
				<div className='mt-4 text-xs text-silver/60 animate-pulse'>
					Loading...
				</div>
			</div>
		</div>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${poppins.variable} scroll-smooth`}
			suppressHydrationWarning>
			<body
				className={`${poppins.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{/* Skip to content link for accessibility */}
					<a
						href='#main-content'
						className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary'>
						Skip to main content
					</a>

					<Suspense fallback={<div className='h-16 bg-background' />}>
						<Navbar />
					</Suspense>

					<main
						id='main-content'
						className='flex-1'>
						<Suspense fallback={<LoadingFallback />}>{children}</Suspense>
					</main>

					<Suspense fallback={<div className='h-64 bg-background' />}>
						<Footer />
					</Suspense>
				</ThemeProvider>
			</body>
		</html>
	);
}

// Optional: Add viewport configuration
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
};
