/** @format */

// components/sections/hero-section.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from 'framer-motion';
import Link from 'next/link';
import { MotionButton } from '@/components/ui/motion-button';
import {
	ChevronDown,
	Sparkles,
	Code,
	Rocket,
	Zap,
	ArrowRight,
	CheckCircle,
} from 'lucide-react';

const TRUST_ITEMS = [
	{ text: 'No hidden fees', icon: CheckCircle },
	{ text: '15-day free trial', icon: Sparkles },
	{ text: '24/7 Support', icon: Zap },
];

const ANIMATED_WORDS = ['Smart', 'Scalable', 'Secure', 'Modern'];
const lines = [
	'Building modern, scalable software and SaaS solutions that grow alongside your business.',
	'We create software and SaaS products designed to scale as your business thrives.',
	'Modern, scalable software solutions that adapt and grow with your business needs.',
];

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
		[],
	);
	const [mounted, setMounted] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
	const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

	// Generate particles only on client side
	useEffect(() => {
		setMounted(true);
		const newParticles = Array.from({ length: 20 }, () => ({
			x:
				Math.random() *
				(typeof window !== 'undefined' ? window.innerWidth : 1000),
			y:
				Math.random() *
				(typeof window !== 'undefined' ? window.innerHeight : 800),
		}));
		setParticles(newParticles);
	}, []);

	// Animated text rotation
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	// Handle window resize for particles
	useEffect(() => {
		if (!mounted) return;

		const handleResize = () => {
			setParticles((prev) =>
				prev.map(() => ({
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight,
				})),
			);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [mounted]);

	// Cursor blink animation style
	const cursorStyle = {
		display: 'inline-block',
		width: '2px',
		height: '1em',
		backgroundColor: 'hsl(var(--foreground))',
		marginLeft: '4px',
		animation: 'blink 1s infinite',
	};

	// Don't render particles during SSR
	const shouldShowParticles = mounted && particles.length > 0;

	return (
		<section
			ref={sectionRef}
			id='home'
			className='relative overflow-hidden min-h-screen flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28'
			style={{ background: 'hsl(var(--background))' }}>
			{/* Animated Grid Background */}
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ opacity }}>
				<div className='absolute inset-0 grid-bg' />

				{/* Animated gradient orbs */}
				<motion.div
					className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl'
					style={{
						background:
							'radial-gradient(circle, hsl(var(--silver) / 0.15) 0%, transparent 70%)',
						animation: 'pulse-slow 4s ease-in-out infinite',
					}}
				/>
				<motion.div
					className='absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl'
					style={{
						background:
							'radial-gradient(circle, hsl(var(--silver) / 0.1) 0%, transparent 70%)',
						animation: 'pulse-slow 5s ease-in-out infinite reverse',
					}}
				/>

				{/* Floating particles - only render on client side */}
				{shouldShowParticles &&
					particles.map((particle, i) => (
						<motion.div
							key={i}
							className='absolute w-1 h-1 rounded-full bg-silver/20'
							initial={{
								x: particle.x,
								y: particle.y,
							}}
							animate={{
								y: [null, -30, 30, -20, 20, 0],
								x: [null, 20, -20, 15, -15, 0],
								opacity: [0.2, 0.5, 0.2],
							}}
							transition={{
								duration: 10 + Math.random() * 10,
								repeat: Infinity,
								ease: 'linear',
							}}
						/>
					))}
			</motion.div>

			{/* Radial shine top-left with animation */}
			<motion.div
				className='absolute pointer-events-none'
				style={{
					top: '-120px',
					left: '-80px',
					width: '500px',
					height: '500px',
					borderRadius: '50%',
					background:
						'radial-gradient(circle, hsl(var(--silver) / 0.12) 0%, transparent 65%)',
				}}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.5, 0.8, 0.5],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full'>
				<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
					{/* Left Column */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						style={{ y: mounted ? y : 30 }}>
						{/* Eyebrow with icon */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className='flex items-center gap-2 mb-6'>
							<div className='flex items-center gap-1.5 px-3 py-1.5 border border-silver/20 bg-silver/5'>
								<Rocket
									size={12}
									style={{ color: 'hsl(var(--silver))' }}
								/>
								<span className='section-eyebrow'>
									Trusted by 500+ businesses
								</span>
							</div>
						</motion.div>

						{/* Main Heading with Animated Word */}
						<h1
							className='font-heading font-bold leading-[1.1] tracking-tighter mb-6'
							style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
							<span className='block text-foreground mb-2'>Build</span>
							<div className='relative h-[1.1em] mb-2 overflow-hidden flex items-center'>
								<AnimatePresence mode='wait'>
									<motion.span
										key={currentWordIndex}
										initial={{ y: 50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -50, opacity: 0 }}
										transition={{ duration: 0.4, ease: 'easeInOut' }}
										className='inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'
										style={{ fontSize: '1em' }}>
										{ANIMATED_WORDS[currentWordIndex]}
									</motion.span>
								</AnimatePresence>
								<motion.span
									animate={{ opacity: [1, 0] }}
									transition={{ repeat: Infinity, duration: 0.8 }}
									className='inline-block w-[4px] h-[0.8em] bg-primary ml-2'
								/>
							</div>
							<span className='block stroke-text mt-2 opacity-80'>
								Software.
							</span>
						</h1>

						{/* Description with fade-in */}
						<div className='max-w-md'>
							{lines.map((line, index) => (
								<motion.p
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + index * 0.3, duration: 0.6 }}
									className='text-base leading-relaxed mb-4 font-light'
									style={{ color: 'hsl(var(--text-3))' }}>
									{line}
								</motion.p>
							))}
						</div>

						{/* CTA Buttons with hover animations */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className='flex flex-wrap gap-4 mb-10 items-center'>
							<MotionButton
								asChild
								size='lg'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='relative group overflow-hidden px-8 py-6 uppercase tracking-widest'>
								<Link href='#contact'>
									Get Started
									<ArrowRight
										size={14}
										className='group-hover:translate-x-1 transition-transform'
									/>
									<span className='absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300' />
								</Link>
							</MotionButton>

							<MotionButton
								asChild
								variant='destructive'
								size='lg'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='px-8 py-6 uppercase tracking-widest border-2'>
								<Link href='#services'>
									View Services
									<Code size={14} />
								</Link>
							</MotionButton>
						</motion.div>

						{/* Trust badges with animations */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className='flex flex-wrap gap-6'>
							{TRUST_ITEMS.map((item, index) => (
								<MotionButton
									key={item.text}
									variant='ghost'
									asChild={false}
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.98 }}
									className='flex items-center gap-2 text-xs tracking-wide group p-0 h-auto hover:bg-transparent'
									style={{ color: 'hsl(var(--text-3))' }}>
									<item.icon
										size={12}
										className='text-silver group-hover:scale-110 transition-transform'
									/>
									<span>{item.text}</span>
								</MotionButton>
							))}
						</motion.div>
					</motion.div>

					{/* Right Column - Enhanced Terminal Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						style={{ y: mounted ? y : 0, scale: mounted ? scale : 1 }}
						whileHover={{ scale: 1.02 }}>
						<div className='chrome-card relative overflow-hidden'>
							{/* Card shine effect */}
							<motion.div
								className='absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent'
								initial={{ x: '-100%' }}
								animate={{ x: '100%' }}
								transition={{ duration: 3, repeat: Infinity, delay: 1 }}
							/>

							{/* Card header */}
							<div
								className='flex items-center justify-between px-5 py-4 border-b'
								style={{ borderColor: 'hsl(var(--border))' }}>
								<div className='flex items-center gap-2'>
									<Zap
										size={12}
										style={{ color: 'hsl(var(--silver))' }}
									/>
									<span
										className='font-heading font-bold text-xs tracking-widest uppercase'
										style={{ color: 'hsl(var(--silver-dark))' }}>
										Project Stack
									</span>
								</div>
								<div className='flex gap-1.5'>
									{['#D4D4CF', '#C0C0BB', '#A8A8A3'].map((c, i) => (
										<motion.div
											key={c}
											className='w-2.5 h-2.5 rounded-full'
											style={{ background: c }}
											whileHover={{ scale: 1.3 }}
											transition={{ type: 'spring', stiffness: 300 }}
										/>
									))}
								</div>
							</div>

							{/* Terminal content with typing animation */}
							<div className='p-6 bg-black/5 dark:bg-white/5'>
								<motion.pre
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5, duration: 0.5 }}
									className='text-xs leading-loose font-mono'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6 }}
										style={{ color: 'hsl(var(--border))' }}>
										{`// ZatGo Innovation — v3.0.0\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.8 }}
										style={{ color: 'hsl(var(--silver-dark))' }}>
										import
									</motion.span>
									{` { `}
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.0 }}
										style={{ color: 'hsl(var(--foreground))' }}>
										buildProduct
									</motion.span>
									{` } `}
									<span style={{ color: 'hsl(var(--silver-dark))' }}>from</span>
									{` `}
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.2 }}
										style={{
											color: 'hsl(var(--chrome))',
										}}>{`'@zatgo/core'\n`}</motion.span>
									{`\n`}

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.4 }}
										style={{ color: 'hsl(var(--silver-dark))' }}>
										const
									</motion.span>
									{` product = `}
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.6 }}
										style={{ color: 'hsl(var(--foreground))' }}>
										buildProduct
									</motion.span>
									{`({\n`}

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.8 }}>
										{`  type: `}
										<span
											style={{ color: 'hsl(var(--chrome))' }}>{`'saas'`}</span>
										{`,\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.0 }}>
										{`  stack: [`}
										<span
											style={{
												color: 'hsl(var(--chrome))',
											}}>{`'next', 'go', 'k8s'`}</span>
										{`],\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.2 }}>
										{`  scale: `}
										<span
											style={{
												color: 'hsl(var(--chrome))',
											}}>{`'enterprise'`}</span>
										{`,\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.4 }}>
										{`})\n\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.6 }}
										style={{ color: 'hsl(var(--border))' }}>
										{`// → Deployed in 2 weeks ✓`}
									</motion.span>
								</motion.pre>
							</div>

							{/* Metrics row with hover effects */}
							<div
								className='grid grid-cols-3 border-t'
								style={{ borderColor: 'hsl(var(--border))' }}>
								{[
									{ val: '98%', lbl: 'Satisfaction', icon: CheckCircle },
									{ val: '120+', lbl: 'Projects', icon: Code },
									{ val: '25', lbl: 'Countries', icon: Rocket },
								].map((m, i) => (
									<motion.div
										key={i}
										whileHover={{ y: -5, backgroundColor: 'hsl(var(--card))' }}
										className='p-4 text-center transition-all duration-300 cursor-pointer group'
										style={{
											borderRight:
												i < 2 ? '1px solid hsl(var(--border))' : 'none',
										}}>
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 2.8 + i * 0.1 }}
											className='flex justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity'>
											<m.icon
												size={14}
												style={{ color: 'hsl(var(--silver))' }}
											/>
										</motion.div>
										<div
											className='font-heading font-extrabold text-2xl tracking-tight transition-colors group-hover:text-silver'
											style={{ color: 'hsl(var(--foreground))' }}>
											{m.val}
										</div>
										<div
											className='text-xs uppercase tracking-widest mt-0.5'
											style={{ color: 'hsl(var(--text-3))' }}>
											{m.lbl}
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<MotionButton
				variant='ghost'
				asChild={false}
				className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col h-auto p-0 hover:bg-transparent transition-opacity'
				whileHover={{ opacity: 0.8 }}
				onClick={() => {
					const servicesSection = document.getElementById('services');
					servicesSection?.scrollIntoView({ behavior: 'smooth' });
				}}>
				<span className='text-[0.65rem] uppercase tracking-[0.2em] text-silver/50'>
					Scroll
				</span>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className='w-px h-8 bg-gradient-to-b from-silver to-transparent'
				/>
				<ChevronDown
					size={14}
					className='text-silver/50'
				/>
			</MotionButton>
		</section>
	);
}
