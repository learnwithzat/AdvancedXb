/** @format */

// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProductsSection } from '@/components/sections/product-section';
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

	// Smooth scroll for anchor links
	useEffect(() => {
		const handleAnchorClick = (e: MouseEvent) => {
			const anchor = (e.target as HTMLElement).closest('a');
			if (anchor?.hash?.startsWith('#')) {
				e.preventDefault();
				document.querySelector(anchor.hash)?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				window.history.pushState(null, '', anchor.hash);
			}
		};
		document.addEventListener('click', handleAnchorClick);
		return () => document.removeEventListener('click', handleAnchorClick);
	}, []);

	useEffect(() => {
		document.body.classList.add('page-loaded');
	}, []);

	return (
		<>
			{/* Scroll progress bar — uses CSS gradient tokens */}
			<motion.div
				className='fixed top-0 left-0 right-0 h-0.5 z-50 origin-left'
				style={{
					scaleX,
					background:
						'linear-gradient(to right, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))',
				}}
			/>

			<main
				id='main-content'
				className='relative'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					<HeroSection />

					<div className='relative'>
						<StatsSection />
					</div>

					<div className='relative'>
						<div
							className='absolute top-0 left-0 right-0 h-px'
							style={{
								background:
									'linear-gradient(to right, transparent, hsl(var(--accent-pink) / 0.2), transparent)',
							}}
						/>
						<ProductsSection />
						<div
							className='absolute bottom-0 left-0 right-0 h-px'
							style={{
								background:
									'linear-gradient(to right, transparent, hsl(var(--accent-pink) / 0.2), transparent)',
							}}
						/>
					</div>

					<div className='relative'>
						<div
							className='absolute top-0 left-0 right-0 h-px'
							style={{
								background:
									'linear-gradient(to right, transparent, hsl(var(--accent-pink) / 0.2), transparent)',
							}}
						/>
						<ServicesSection />
						<div
							className='absolute bottom-0 left-0 right-0 h-px'
							style={{
								background:
									'linear-gradient(to right, transparent, hsl(var(--accent-pink) / 0.2), transparent)',
							}}
						/>
					</div>

					<AboutSection />

					{/* Decorative separator */}
					<div className='relative py-4'>
						<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
							<div className='flex justify-center gap-2'>
								{[0, 1, 2].map((i) => (
									<div
										key={i}
										className='w-1 h-1 rounded-full'
										style={{ background: 'hsl(var(--neutral) / 0.3)' }}
									/>
								))}
							</div>
						</div>
					</div>

					<TestimonialsSection />
					<CTASection />
					<ContactSection />
				</motion.div>
			</main>

			<BackToTopButton />
		</>
	);
}

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	if (!isVisible) return null;

	return (
		<MotionButton
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			variant='outline'
			size='icon'
			className='fixed bottom-8 right-8 z-40 border-2 bg-background text-foreground hover:scale-110'
			style={{ borderColor: 'hsl(var(--accent-pink) / 0.4)' }}
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
