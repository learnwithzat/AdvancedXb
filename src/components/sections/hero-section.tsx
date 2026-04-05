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

const LINES = [
	'Building modern, scalable software and SaaS solutions that grow alongside your business.',
	'We create software and SaaS products designed to scale as your business thrives.',
	'Modern, scalable software solutions that adapt and grow with your business needs.',
];

const METRICS = [
	{ val: '98%', lbl: 'Satisfaction', icon: CheckCircle },
	{ val: '120+', lbl: 'Projects', icon: Code },
	{ val: '25', lbl: 'Countries', icon: Rocket },
];

// Traffic-light dots mapped to cool monochrome slate tones
const TRAFFIC_DOTS = [
	'hsl(215 25% 72%)', // light slate
	'hsl(215 20% 58%)', // mid slate
	'hsl(215 30% 44%)', // deep slate
];

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
		[]
	);
	const [mounted, setMounted] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
	const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

	// Particles — client-side only
	useEffect(() => {
		setMounted(true);
		setParticles(
			Array.from({ length: 20 }, () => ({
				x: Math.random() * (window.innerWidth || 1000),
				y: Math.random() * (window.innerHeight || 800),
			}))
		);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const handleResize = () =>
			setParticles(() =>
				Array.from({ length: 20 }, () => ({
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight,
				}))
			);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [mounted]);

	// Word rotation
	useEffect(() => {
		const id = setInterval(
			() => setCurrentWordIndex((p) => (p + 1) % ANIMATED_WORDS.length),
			2000
		);
		return () => clearInterval(id);
	}, []);

	const shouldShowParticles = mounted && particles.length > 0;

	return (
		<section
			ref={sectionRef}
			id='home'
			className='relative overflow-hidden min-h-screen flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28'
			style={{ background: 'hsl(var(--background))' }}>
			{/* ── Background layer ─────────────────────────────── */}
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ opacity }}>
				<div className='absolute inset-0 grid-bg' />

				{/* Gradient orbs — slate tones */}
				<motion.div
					className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl'
					style={{
						background:
							'radial-gradient(circle, hsl(215 40% 48% / 0.12) 0%, transparent 70%)',
					}}
					animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<motion.div
					className='absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl'
					style={{
						background:
							'radial-gradient(circle, hsl(198 60% 55% / 0.08) 0%, transparent 70%)',
					}}
					animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
						repeatType: 'reverse',
					}}
				/>

				{/* Floating particles */}
				{shouldShowParticles &&
					particles.map((p, i) => (
						<motion.div
							key={i}
							className='absolute w-1 h-1 rounded-full'
							style={{ background: 'hsl(var(--accent-pink) / 0.25)' }}
							initial={{ x: p.x, y: p.y }}
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

			{/* Radial shine — top-left */}
			<motion.div
				className='absolute pointer-events-none'
				style={{
					top: '-120px',
					left: '-80px',
					width: '500px',
					height: '500px',
					borderRadius: '50%',
					background:
						'radial-gradient(circle, hsl(215 40% 48% / 0.10) 0%, transparent 65%)',
				}}
				animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
				transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
			/>

			{/* ── Content ──────────────────────────────────────── */}
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full'>
				<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
					{/* Left column */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						style={{ y: mounted ? y : 30 }}>
						{/* Eyebrow */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className='flex items-center gap-2 mb-6'>
							<div
								className='flex items-center gap-1.5 px-3 py-1.5 border container-custom rounded-none'
								style={{
									borderColor: 'hsl(var(--accent-pink) / 0.25)',
									background: 'hsl(var(--accent-pink) / 0.06)',
								}}>
								<Rocket
									size={12}
									style={{ color: 'hsl(var(--accent-blue))' }}
								/>
								<span className='section-eyebrow'>
									Trusted by 500+ businesses
								</span>
							</div>
						</motion.div>

						{/* Heading */}
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
										className='inline-block'
										style={{
											background:
												'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
										}}>
										{ANIMATED_WORDS[currentWordIndex]}
									</motion.span>
								</AnimatePresence>
								{/* Blinking cursor */}
								<motion.span
									animate={{ opacity: [1, 0] }}
									transition={{ repeat: Infinity, duration: 0.8 }}
									className='inline-block ml-2'
									style={{
										width: '4px',
										height: '0.75em',
										background: 'hsl(var(--primary))',
									}}
								/>
							</div>

							<span className='block stroke-text mt-2 opacity-70'>
								Software.
							</span>
						</h1>

						{/* Description lines */}
						<div className='max-w-md'>
							{LINES.map((line, i) => (
								<motion.p
									key={i}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + i * 0.3, duration: 0.6 }}
									className='text-base leading-relaxed mb-4 font-light'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
									{line}
								</motion.p>
							))}
						</div>

						{/* CTA buttons */}
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
								variant='outline'
								size='lg'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='px-8 py-6 uppercase tracking-widest border-2'
								style={{ borderColor: 'hsl(var(--accent-pink) / 0.35)' }}>
								<Link href='#services'>
									View Services
									<Code size={14} />
								</Link>
							</MotionButton>
						</motion.div>

						{/* Trust badges */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className='flex flex-wrap gap-6'>
							{TRUST_ITEMS.map((item) => (
								<MotionButton
									key={item.text}
									variant='ghost'
									asChild={false}
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.98 }}
									className='flex items-center gap-2 text-xs tracking-wide group p-0 h-auto hover:bg-transparent'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
									<item.icon
										size={12}
										style={{ color: 'hsl(var(--accent-blue))' }}
										className='group-hover:scale-110 transition-transform'
									/>
									<span>{item.text}</span>
								</MotionButton>
							))}
						</motion.div>
					</motion.div>

					{/* Right column — Terminal card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						style={{ y: mounted ? y : 0, scale: mounted ? scale : 1 }}
						whileHover={{ scale: 1.02 }}>
						{/* Card — uses design system tokens, no undefined classes */}
						<div
							className='relative overflow-hidden border'
							style={{
								background: 'hsl(var(--card))',
								borderColor: 'hsl(var(--border))',
								borderRadius: 'var(--radius-lg)',
								boxShadow: '0 24px 48px -12px hsl(215 25% 10% / 0.12)',
							}}>
							{/* Shimmer sweep */}
							<motion.div
								className='absolute inset-0 pointer-events-none'
								style={{
									background:
										'linear-gradient(90deg, transparent, hsl(var(--accent-pink) / 0.06), transparent)',
								}}
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
										style={{ color: 'hsl(var(--accent-blue))' }}
									/>
									<span
										className='font-heading font-bold text-xs tracking-widest uppercase'
										style={{ color: 'hsl(var(--accent-pink))' }}>
										Project Stack
									</span>
								</div>
								{/* Traffic dots — cool slate palette */}
								<div className='flex gap-1.5'>
									{TRAFFIC_DOTS.map((color, i) => (
										<motion.div
											key={i}
											className='w-2.5 h-2.5 rounded-full'
											style={{ background: color }}
											whileHover={{ scale: 1.3 }}
											transition={{ type: 'spring', stiffness: 300 }}
										/>
									))}
								</div>
							</div>

							{/* Terminal body */}
							<div
								className='p-6'
								style={{ background: 'hsl(var(--muted) / 0.5)' }}>
								<motion.pre
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5, duration: 0.5 }}
									className='text-xs leading-loose font-mono overflow-x-auto'>
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6 }}
										style={{ color: 'hsl(var(--accent-pink) / 0.5)' }}>
										{`// ZatGo Innovation — v3.0.0\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.8 }}
										style={{ color: 'hsl(var(--accent-pink))' }}>
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
									<span style={{ color: 'hsl(var(--accent-pink))' }}>from</span>
									{` `}
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.2 }}
										style={{ color: 'hsl(var(--accent-blue))' }}>
										{`'@zatgo/core'\n`}
									</motion.span>
									{`\n`}

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.4 }}
										style={{ color: 'hsl(var(--accent-pink))' }}>
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
											style={{
												color: 'hsl(var(--accent-blue))',
											}}>{`'saas'`}</span>
										{`,\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.0 }}>
										{`  stack: [`}
										<span style={{ color: 'hsl(var(--accent-blue))' }}>
											{`'next', 'go', 'k8s'`}
										</span>
										{`],\n`}
									</motion.span>

									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 2.2 }}>
										{`  scale: `}
										<span style={{ color: 'hsl(var(--accent-blue))' }}>
											{`'enterprise'`}
										</span>
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
										style={{ color: 'hsl(var(--accent-pink) / 0.5)' }}>
										{`// → Deployed in 2 weeks ✓`}
									</motion.span>
								</motion.pre>
							</div>

							{/* Metrics row */}
							<div
								className='grid grid-cols-3 border-t'
								style={{ borderColor: 'hsl(var(--border))' }}>
								{METRICS.map((m, i) => (
									<motion.div
										key={i}
										whileHover={{
											y: -4,
											background: 'hsl(var(--muted))',
										}}
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
												style={{ color: 'hsl(var(--accent-blue))' }}
											/>
										</motion.div>
										<div
											className='font-heading font-extrabold text-2xl tracking-tight'
											style={{ color: 'hsl(var(--foreground))' }}>
											{m.val}
										</div>
										<div
											className='text-xs uppercase tracking-widest mt-0.5'
											style={{ color: 'hsl(var(--muted-foreground))' }}>
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
				className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col h-auto p-0 hover:bg-transparent'
				whileHover={{ opacity: 0.8 }}
				onClick={() =>
					document
						.getElementById('services')
						?.scrollIntoView({ behavior: 'smooth' })
				}>
				<span
					className='text-[0.65rem] uppercase tracking-[0.2em] mb-2'
					style={{ color: 'hsl(var(--muted-foreground))' }}>
					Scroll
				</span>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className='w-px h-8 mx-auto'
					style={{
						background:
							'linear-gradient(to bottom, hsl(var(--accent-pink) / 0.5), transparent)',
					}}
				/>
				<ChevronDown
					size={14}
					className='mx-auto mt-1'
					style={{ color: 'hsl(var(--muted-foreground))' }}
				/>
			</MotionButton>
		</section>
	);
}
