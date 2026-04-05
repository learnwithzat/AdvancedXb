/** @format */

// components/sections/testimonials-section.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import {
	motion,
	AnimatePresence,
	useInView,
	useScroll,
	useTransform,
} from 'framer-motion';
import { MotionButton } from '@/components/ui/motion-button';
import {
	ChevronLeft,
	ChevronRight,
	Quote,
	Star,
	User,
	Calendar,
	Briefcase,
	MessageCircle,
} from 'lucide-react';

const TESTIMONIALS = [
	{
		initials: 'SJ',
		name: 'Sarah Johnson',
		role: 'CEO, TechStart Inc.',
		quote:
			'ZatGo transformed our business with their custom ERP solution. Our efficiency has increased by 40% — it has been a complete game changer for our operations.',
		rating: 5,
		date: 'March 2024',
		project: 'ERP Implementation',
	},
	{
		initials: 'MC',
		name: 'Michael Chen',
		role: 'CTO, InnovateCorp',
		quote:
			"The team's expertise in mobile development helped us launch our app ahead of schedule and under budget. Incredibly professional from start to finish.",
		rating: 5,
		date: 'January 2024',
		project: 'Mobile App Development',
	},
	{
		initials: 'ER',
		name: 'Emily Rodriguez',
		role: 'Operations Director, RetailPro',
		quote:
			'Our POS system has never worked better. The support team is always responsive and deeply knowledgeable. We could not ask for a better partner.',
		rating: 5,
		date: 'December 2023',
		project: 'POS System Upgrade',
	},
	{
		initials: 'DK',
		name: 'Daniel Kim',
		role: 'Founder, ScaleUp Labs',
		quote:
			'From concept to deployment in 3 weeks. The engineering quality is top-tier and the communication was seamless throughout the entire project.',
		rating: 5,
		date: 'November 2023',
		project: 'SaaS Platform',
	},
];

const QUOTES = [
	'"The best partner we could have asked for."',
	'"Exceeded all our expectations."',
	'"Revolutionized our workflow."',
	'"Absolutely outstanding results."',
];

export function TestimonialsSection() {
	const [current, setCurrent] = useState(0);
	const [autoplay, setAutoplay] = useState(true);
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

	const prev = () => {
		setAutoplay(false);
		setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
		setTimeout(() => setAutoplay(true), 5000);
	};

	const next = () => {
		setAutoplay(false);
		setCurrent((c) => (c + 1) % TESTIMONIALS.length);
		setTimeout(() => setAutoplay(true), 5000);
	};

	// Autoplay functionality
	useEffect(() => {
		if (!autoplay) return;
		const interval = setInterval(() => {
			setCurrent((c) => (c + 1) % TESTIMONIALS.length);
		}, 6000);
		return () => clearInterval(interval);
	}, [autoplay]);

	const t = TESTIMONIALS[current];
	const randomQuote = QUOTES[current % QUOTES.length];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section
			ref={sectionRef}
			id='testimonials'
			className='py-24 relative overflow-hidden'
			style={{ background: 'hsl(var(--secondary))' }}>
			{/* Animated Background */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ y: backgroundY }}>
				{/* Gradient Orbs */}
				<div className='absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-neutral/5 to-transparent blur-3xl' />
				<div className='absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-neutral/5 to-transparent blur-3xl' />

				{/* Quotation marks background */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]'>
					<Quote
						size={300}
						strokeWidth={0.5}
					/>
				</div>

				{/* Diagonal Pattern */}
				<div
					className='absolute inset-0 opacity-[0.02]'
					style={{
						backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px)`,
					}}
				/>
			</motion.div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				{/* Header with animations */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
					<div className='relative'>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='inline-flex items-center gap-2 px-3 py-1 mb-4 border border-neutral/20 bg-neutral/5'>
							<MessageCircle
								size={12}
								style={{ color: 'hsl(var(--neutral))' }}
							/>
							<span className='section-eyebrow text-xs tracking-[0.2em] uppercase'>
								Client stories
							</span>
						</motion.div>

						<h2
							className='font-heading font-bold tracking-tighter leading-[1.1]'
							style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
							What Our{' '}
							<span className='relative inline-block'>
								<span className='bg-gradient-to-r from-neutral via-neutral-dark to-neutral-light bg-clip-text text-transparent'>
									Clients
								</span>
								<motion.span
									initial={{ width: 0 }}
									animate={isInView ? { width: '100%' } : {}}
									transition={{ delay: 0.6, duration: 0.8 }}
									className='absolute bottom-0 left-0 h-px bg-gradient-to-r from-neutral to-transparent'
								/>
							</span>
							<br />
							<span>Say</span>
						</h2>
					</div>

					{/* Navigation Buttons with enhanced styling */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3 }}
						className='flex gap-3'>
						<MotionButton
							onClick={prev}
							variant='outline'
							size='icon'
							whileHover={{ scale: 1.05, x: -2 }}
							whileTap={{ scale: 0.95 }}
							className='rounded-none border-2 bg-transparent text-muted-foreground hover:text-foreground group'>
							<ChevronLeft
								size={16}
								className='group-hover:translate-x-[-2px] transition-transform'
							/>
						</MotionButton>

						<MotionButton
							onClick={next}
							variant='outline'
							size='icon'
							whileHover={{ scale: 1.05, x: 2 }}
							whileTap={{ scale: 0.95 }}
							className='rounded-none border-2 bg-transparent text-muted-foreground hover:text-foreground group'>
							<ChevronRight
								size={16}
								className='group-hover:translate-x-[2px] transition-transform'
							/>
						</MotionButton>
					</motion.div>
				</motion.div>

				{/* Main Testimonial Card with enhanced animations */}
				<div className='grid lg:grid-cols-2 gap-12 items-start'>
					{/* Floating Quote Card */}
					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						className='hidden lg:block'>
						<motion.div
							variants={itemVariants}
							className='relative'>
							<div className='absolute -top-6 -left-6 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent-pink/20 to-transparent'>
								<Quote
									size={24}
									style={{ color: 'hsl(var(--accent-pink))' }}
								/>
							</div>
							<div
								className='p-8 border-l-4'
								style={{ borderColor: 'hsl(var(--accent-pink))' }}>
								<p
									className='text-lg leading-relaxed font-light italic mb-6'
									style={{ color: 'hsl(var(--text-2))' }}>
									{randomQuote}
								</p>
								<div className='flex items-center gap-2 text-xs uppercase tracking-wider text-silver/60'>
									<span>Featured Review</span>
									<div className='w-8 h-px bg-accent-pink/30' />
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Main Card */}
					<div className='lg:col-span-1'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={current}
								initial={{ opacity: 0, x: 30, rotateY: -10 }}
								animate={{ opacity: 1, x: 0, rotateY: 0 }}
								exit={{ opacity: 0, x: -30, rotateY: 10 }}
								transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
								className='relative group'>
								{/* Card Glow Effect */}
								<motion.div className='absolute -inset-1 bg-gradient-to-r from-neutral/20 via-neutral/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

								<div className='relative chrome-card p-8 md:p-10 overflow-hidden'>
									{/* Animated Background Gradient */}
									<motion.div
										className='absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700'
										style={{
											background:
												'radial-gradient(circle, hsl(var(--neutral)), transparent)',
										}}
									/>

									{/* Stars with animation */}
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.2 }}
										className='flex gap-1 mb-6'>
										{[...Array(t.rating)].map((_, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.3 + i * 0.05 }}
												whileHover={{ scale: 1.2, rotate: 5 }}>
												<Star
													size={16}
													fill='hsl(var(--neutral))'
													style={{ color: 'hsl(var(--neutral))' }}
												/>
											</motion.div>
										))}
									</motion.div>

									{/* Quote with animation */}
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4 }}>
										<Quote
											size={24}
											className='mb-4 opacity-30'
											style={{ color: 'hsl(var(--neutral))' }}
										/>
										<p
											className='text-base md:text-lg leading-relaxed font-light italic mb-6'
											style={{ color: 'hsl(var(--text-2))' }}>
											&ldquo;{t.quote}&rdquo;
										</p>
									</motion.div>

									{/* Author Info with enhanced styling */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
										className='flex items-center gap-4 pt-4 border-t'
										style={{ borderColor: 'hsl(var(--border))' }}>
										{/* Avatar with animation */}
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className='relative'>
											<div
												className='w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 group-hover:border-neutral'
												style={{
													background: 'hsl(var(--accent))',
													borderColor: 'hsl(var(--border))',
													color: 'hsl(var(--neutral-dark))',
												}}>
												{t.initials}
											</div>
											<motion.div
												className='absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-background'
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ delay: 0.7 }}
											/>
										</motion.div>

										<div className='flex-1'>
											<div
												className='font-heading font-bold text-base mb-1'
												style={{ color: 'hsl(var(--foreground))' }}>
												{t.name}
											</div>
											<div
												className='text-xs mb-2'
												style={{ color: 'hsl(var(--text-3))' }}>
												{t.role}
											</div>

											{/* Additional Info */}
											<div
												className='flex items-center gap-3 text-[0.65rem] uppercase tracking-wider'
												style={{ color: 'hsl(var(--neutral-light))' }}>
												<div className='flex items-center gap-1'>
													<Calendar size={10} />
													<span>{t.date}</span>
												</div>
												<div className='w-px h-2 bg-border' />
												<div className='flex items-center gap-1'>
													<Briefcase size={10} />
													<span>{t.project}</span>
												</div>
											</div>
										</div>

										{/* Trust Badge */}
										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.6 }}
											className='hidden sm:flex items-center gap-1 px-2 py-1 border border-neutral/20 bg-neutral/5'>
											<CheckIcon
												size={10}
												className='text-neutral'
											/>
											<span className='text-[0.6rem] uppercase tracking-wider text-neutral/80'>
												Verified
											</span>
										</motion.div>
									</motion.div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Enhanced Dots Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}
					className='flex flex-col items-center gap-4 mt-10'>
					<div className='flex gap-2'>
						{TESTIMONIALS.map((_, i) => (
							<MotionButton
								key={i}
								variant='ghost'
								onClick={() => {
									setAutoplay(false);
									setCurrent(i);
									setTimeout(() => setAutoplay(true), 5000);
								}}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								className='relative h-1 p-0 rounded-none transition-all duration-300'
								style={{
									width: i === current ? '32px' : '8px',
									background:
										i === current ?
											'hsl(var(--neutral))'
										:	'hsl(var(--border))',
								}}>
								{i === current && (
									<motion.div
										layoutId='activeDot'
										className='absolute inset-0 bg-gradient-to-r from-neutral to-neutral-dark'
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									/>
								)}
							</MotionButton>
						))}
					</div>

					{/* Progress Indicator */}
					<div className='flex items-center gap-2'>
						<span className='text-[0.65rem] uppercase tracking-wider text-neutral/40'>
							{current + 1} / {TESTIMONIALS.length}
						</span>
						<div className='w-20 h-px bg-border relative overflow-hidden'>
							<motion.div
								className='absolute inset-0 bg-neutral'
								initial={{ x: '-100%' }}
								animate={{
									x: `${(current / (TESTIMONIALS.length - 1)) * 100}%`,
								}}
								transition={{ duration: 0.3 }}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// Helper component
const CheckIcon = ({ size = 10, className = '' }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}>
		<polyline points='20 6 9 17 4 12' />
	</svg>
);
