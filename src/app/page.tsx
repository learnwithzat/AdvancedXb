/** @format */

// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotionButton } from '@/components/ui/motion-button';

export default function Home() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Smooth scroll behavior for anchor links
	useEffect(() => {
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');

			if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
				e.preventDefault();
				const element = document.querySelector(anchor.hash);
				if (element) {
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
					// Update URL without jumping
					window.history.pushState(null, '', anchor.hash);
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);
		return () => document.removeEventListener('click', handleAnchorClick);
	}, []);

	// Optional: Add page transition animation
	useEffect(() => {
		// Add a class to body when page loads
		document.body.classList.add('page-loaded');

		// Preload critical sections
		const preloadImages = () => {
			const images = document.querySelectorAll('img');
			images.forEach((img) => {
				if (img.loading === 'lazy') {
					img.loading = 'eager';
				}
			});
		};

		preloadImages();
	}, []);

	return (
		<>
			{/* Progress Bar */}
			<motion.div
				className='fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-silver to-silver-dark z-50 origin-left'
				style={{ scaleX }}
			/>

			{/* Skip to content link for accessibility */}
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg'>
				Skip to main content
			</a>

			<main
				id='main-content'
				className='relative'>
				{/* Optional: Add a fade-in animation for the entire page */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					<HeroSection />

					{/* Section Divider */}
					<div className='relative'>
						<StatsSection />
					</div>

					{/* Section Divider with gradient */}
					<div className='relative'>
						<div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent' />
						<ServicesSection />
						<div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent' />
					</div>

					<AboutSection />

					{/* Decorative separator */}
					<div className='relative py-4'>
						<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
							<div className='flex justify-center gap-2'>
								<div className='w-1 h-1 rounded-full bg-silver/30' />
								<div className='w-1 h-1 rounded-full bg-silver/30' />
								<div className='w-1 h-1 rounded-full bg-silver/30' />
							</div>
						</div>
					</div>

					<TestimonialsSection />
					<CTASection />
					<ContactSection />
				</motion.div>
			</main>

			{/* Optional: Back to top button */}
			<BackToTopButton />
		</>
	);
}

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false); // ✅ FIX

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.pageYOffset > 300);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!isVisible) return null; // ✅ cleaner

	return (
		<MotionButton
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			onClick={scrollToTop}
			variant='outline'
			size='icon'
			className='fixed bottom-8 right-8 z-40 border-2 bg-background text-foreground hover:scale-110 group'
			whileHover={{ y: -5 }}
			whileTap={{ scale: 0.95 }}
			aria-label='Back to top'>
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<polyline points='18 15 12 9 6 15' />
			</svg>
		</MotionButton>
	);
};
