/** @format */

// components/sections/stats-section.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import {
	motion,
	useInView,
	useScroll,
	useTransform,
	Variants,
} from 'framer-motion';
import { MotionButton } from '@/components/ui/motion-button';
import {
	Users,
	Briefcase,
	Globe,
	Trophy,
	TrendingUp,
	Zap,
	Clock,
	Award,
	CheckCircle,
	Star,
} from 'lucide-react';

const STATS = [
	{
		value: 500,
		suffix: '+',
		label: 'Happy Clients',
		icon: Users,
		color: '#4ecdc4',
		description: 'Global satisfaction rate',
	},
	{
		value: 120,
		suffix: '+',
		label: 'Projects Completed',
		icon: Briefcase,
		color: '#ff6b6b',
		description: 'Successfully delivered',
	},
	{
		value: 25,
		suffix: '',
		label: 'Countries Served',
		icon: Globe,
		color: '#45b7d1',
		description: 'Worldwide presence',
	},
	{
		value: 15,
		suffix: '',
		label: 'Awards Won',
		icon: Trophy,
		color: '#f4d03f',
		description: 'Industry recognition',
	},
];

// Additional stats for enhanced version
const EXTRA_STATS = [
	{ value: 98, suffix: '%', label: 'Client Retention', icon: Star },
	{ value: 24, suffix: '/7', label: 'Support Available', icon: Clock },
];

export function StatsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const [counters, setCounters] = useState(STATS.map(() => 0));

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

	// Animated counter effect
	useEffect(() => {
		if (isInView) {
			const duration = 2000; // 2 seconds
			const intervalTime = 20; // Update every 20ms
			const steps = duration / intervalTime;

			STATS.forEach((stat, index) => {
				let currentStep = 0;
				const increment = stat.value / steps;

				const interval = setInterval(() => {
					currentStep++;
					if (currentStep >= steps) {
						setCounters((prev) => {
							const newCounters = [...prev];
							newCounters[index] = stat.value;
							return newCounters;
						});
						clearInterval(interval);
					} else {
						setCounters((prev) => {
							const newCounters = [...prev];
							newCounters[index] = Math.floor(increment * currentStep);
							return newCounters;
						});
					}
				}, intervalTime);

				return () => clearInterval(interval);
			});
		}
	}, [isInView]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<section
			ref={sectionRef}
			className='relative py-16 lg:py-20 overflow-hidden'
			style={{ background: 'hsl(var(--foreground))' }}>
			{/* Animated Background Elements */}
			<motion.div
				className='absolute inset-0 pointer-events-none'
				style={{ opacity }}>
				{/* Gradient Orbs */}
				<motion.div
					className='absolute -top-20 -right-20 w-80 h-80 rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(192,192,192,0.08) 0%, transparent 70%)',
						scale,
					}}
					animate={{
						x: [0, 30, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>

				<motion.div
					className='absolute -bottom-20 -left-20 w-96 h-96 rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(192,192,192,0.05) 0%, transparent 70%)',
						scale,
					}}
					animate={{
						x: [0, -40, 0],
						y: [0, 40, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>

				{/* Grid Pattern */}
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
							repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
							repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
						`,
						backgroundSize: '60px 60px',
					}}
				/>

				{/* Animated Lines */}
				<motion.div
					className='absolute top-1/2 left-0 w-full h-px'
					style={{
						background:
							'linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)',
						scaleX: scale,
					}}
				/>
			</motion.div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<div className='inline-flex items-center gap-2 px-3 py-1 mb-4 border border-white/10 bg-white/5 backdrop-blur-sm'>
						<TrendingUp
							size={12}
							className='text-silver'
						/>
						<span className='text-[0.65rem] uppercase tracking-[0.2em] font-medium text-white/60'>
							Our Achievements
						</span>
					</div>
					<h2
						className='font-heading font-bold tracking-tighter leading-[1.1] mb-3'
						style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
						<span className='text-white'>Numbers That</span>
						<br />
						<span className='bg-gradient-to-r from-silver via-silver-dark to-chrome bg-clip-text text-transparent'>
							Speak Volumes
						</span>
					</h2>
					<p className='text-sm text-white/40 max-w-md mx-auto'>
						Our track record of excellence and client satisfaction
					</p>
				</motion.div>

				{/* Main Stats Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10'>
					{STATS.map((stat, i) => (
						<MotionButton
							key={i}
							variant='ghost'
							asChild={false}
							className='group relative overflow-hidden bg-black/20 backdrop-blur-sm h-auto p-0 flex flex-col items-stretch rounded-none hover:bg-black/30'
							whileHover={{ y: -5 }}
							transition={{ duration: 0.3 }}>
							{/* Hover Gradient */}
							<motion.div
								className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
								style={{
									background: `linear-gradient(135deg, ${stat.color}10, transparent)`,
								}}
							/>

							<div className='relative p-8 text-center'>
								{/* Icon with animation */}
								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: 'spring', stiffness: 300 }}
									className='flex justify-center mb-4'>
									<div
										className='w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-opacity-100'
										style={{
											borderColor: `${stat.color}40`,
											background: `${stat.color}10`,
										}}>
										<stat.icon
											size={20}
											style={{ color: stat.color }}
										/>
									</div>
								</motion.div>

								{/* Animated Counter */}
								<div className='mb-2'>
									<span
										className='font-heading font-bold tracking-tighter'
										style={{
											fontSize: 'clamp(2rem, 4vw, 3rem)',
											color: '#ffffff',
										}}>
										{counters[i].toLocaleString()}
									</span>
									<span
										className='font-heading font-bold'
										style={{
											fontSize: 'clamp(1.5rem, 3vw, 2rem)',
											color: stat.color,
										}}>
										{stat.suffix}
									</span>
								</div>

								{/* Label */}
								<div
									className='text-xs uppercase tracking-widest mb-1 font-medium'
									style={{ color: 'rgba(255,255,255,0.7)' }}>
									{stat.label}
								</div>

								{/* Description */}
								<div
									className='text-[0.65rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									style={{ color: stat.color }}>
									{stat.description}
								</div>

								{/* Animated Progress Bar */}
								<motion.div
									className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r'
									style={{
										background: `linear-gradient(90deg, ${stat.color}, transparent)`,
									}}
									initial={{ width: 0 }}
									animate={isInView ? { width: '100%' } : { width: 0 }}
									transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
								/>
							</div>
						</MotionButton>
					))}
				</motion.div>

				{/* Extra Stats Row */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8, duration: 0.5 }}
					className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
					{EXTRA_STATS.map((stat, i) => (
						<MotionButton
							key={i}
							variant='ghost'
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							asChild={false}
							className='flex h-auto items-center justify-between p-6 border border-white/10 bg-white/5 backdrop-blur-sm group cursor-pointer rounded-none hover:bg-white/10'>
							<div className='flex items-center gap-4'>
								<div className='w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-silver/50 transition-colors'>
									<stat.icon
										size={16}
										className='text-silver/60 group-hover:text-silver'
									/>
								</div>
								<div>
									<div className='text-2xl font-bold text-white'>
										{stat.value}
										{stat.suffix}
									</div>
									<div className='text-xs uppercase tracking-wider text-white/40'>
										{stat.label}
									</div>
								</div>
							</div>
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1, repeat: Infinity }}
								className='text-silver/40'>
								<Zap size={14} />
							</motion.div>
						</MotionButton>
					))}
				</motion.div>

				{/* Trust Badges */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 1, duration: 0.5 }}
					className='mt-8 pt-6 border-t border-white/10'>
					<div className='flex flex-wrap items-center justify-center gap-6'>
						<span className='text-[0.65rem] uppercase tracking-wider text-white/40'>
							Trusted by industry leaders
						</span>
						<div className='flex items-center gap-4'>
							{['ISO Certified', 'GDPR Compliant', 'PCI DSS'].map(
								(badge, i) => (
									<motion.div
										key={i}
										whileHover={{ scale: 1.05 }}
										className='flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-white/30 hover:text-white/50 transition-colors'>
										<CheckCircle
											size={10}
											className='text-silver/50'
										/>
										<span>{badge}</span>
									</motion.div>
								),
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
