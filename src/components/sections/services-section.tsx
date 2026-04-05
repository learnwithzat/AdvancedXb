/** @format */

// components/sections/services-section.tsx
'use client';

import { useRef, useState } from 'react';
import {
	motion,
	useInView,
	useScroll,
	useTransform,
	Variants,
} from 'framer-motion';
import Link from 'next/link';
import { MotionButton } from '@/components/ui/motion-button';
import {
	Calculator,
	FileSpreadsheet,
	Sheet,
	Zap,
	ArrowRight,
	Sparkles,
	CheckCircle,
	TrendingUp,
	Users,
} from 'lucide-react';

const SERVICES = [
	{
		num: '01',
		icon: Calculator,
		title: 'Accounting Services',
		description:
			'Full-cycle accounting, bookkeeping, financial reporting, and tax preparation to keep your business financially healthy and compliant.',
		tags: ['Bookkeeping', 'Tax Prep', 'Reporting'],
		color: '#634ecd',
		gradient: 'from-violet-500/20 to-purple-500/20',
	},
	{
		num: '02',
		icon: FileSpreadsheet,
		title: 'Excel Works',
		description:
			'Custom Excel solutions including advanced formulas, macros, VBA automation, dashboards, and data modeling tailored to your workflow.',
		tags: ['VBA', 'Dashboards', 'Automation'],
		color: '#1d6f42',
		gradient: 'from-green-500/20 to-emerald-500/20',
	},
	{
		num: '03',
		icon: Sheet,
		title: 'Google Sheets Works',
		description:
			'Powerful Google Sheets buildouts with Apps Script automation, live data integrations, and collaborative workflows for your team.',
		tags: ['Apps Script', 'Integration', 'Collaboration'],
		color: '#0f9d58',
		gradient: 'from-teal-500/20 to-cyan-500/20',
	},
];

const STATS = [
	{ value: '150+', label: 'Projects Delivered', icon: FileSpreadsheet },
	{ value: '50+', label: 'Happy Clients', icon: CheckCircle },
	{ value: '99.9%', label: 'Accuracy Guarantee', icon: TrendingUp },
];

export function ServicesSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
		}),
	};

	return (
		<section
			ref={sectionRef}
			id='services'
			className='py-24 relative overflow-hidden'
			style={{ background: 'hsl(var(--secondary))' }}>
			{/* Animated Background */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ y: backgroundY }}>
				<div className='absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-silver/5 to-transparent blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-l from-silver/5 to-transparent blur-3xl' />
				<div
					className='absolute inset-0 opacity-[0.02]'
					style={{
						backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, hsl(var(--foreground)) 40px, hsl(var(--foreground)) 41px)`,
					}}
				/>
			</motion.div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
					<div className='relative'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='inline-flex items-center gap-2 px-3 py-1 mb-4 border border-silver/20 bg-silver/5'>
							<Sparkles
								size={12}
								style={{ color: 'hsl(var(--silver))' }}
							/>
							<span className='section-eyebrow text-xs tracking-[0.2em] uppercase'>
								What we do
							</span>
						</motion.div>

						<h2
							className='font-heading font-bold tracking-tighter leading-[1.1]'
							style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
							Our{' '}
							<span className='relative inline-block'>
								<span className='bg-gradient-to-r from-silver via-silver-dark to-chrome bg-clip-text text-transparent'>
									Services
								</span>
								<motion.span
									initial={{ width: 0 }}
									animate={isInView ? { width: '100%' } : {}}
									transition={{ delay: 0.6, duration: 0.8 }}
									className='absolute bottom-0 left-0 h-px bg-gradient-to-r from-silver to-transparent'
								/>
							</span>
						</h2>
					</div>

					<motion.p
						initial={{ opacity: 0, x: 20 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-sm leading-relaxed font-light max-w-xs'
						style={{ color: 'hsl(var(--text-3))' }}>
						Comprehensive financial and spreadsheet solutions tailored to your
						business needs
					</motion.p>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='grid md:grid-cols-3 gap-px'
					style={{ background: 'hsl(var(--border))' }}>
					{SERVICES.map((svc, i) => {
						const Icon = svc.icon;
						const isHovered = hoveredIndex === i;

						return (
							<motion.div
								key={i}
								custom={i}
								variants={cardVariants}
								onHoverStart={() => setHoveredIndex(i)}
								onHoverEnd={() => setHoveredIndex(null)}
								className='group relative overflow-hidden'
								style={{ background: 'hsl(var(--secondary))' }}>
								{/* Hover Background Gradient */}
								<motion.div
									className='absolute inset-0'
									style={{
										background: `linear-gradient(135deg, ${svc.color}10, transparent)`,
									}}
									initial={false}
									animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
									transition={{ duration: 0.5 }}
								/>

								{/* Card Content */}
								<div className='relative p-8 cursor-pointer transition-all duration-500 group-hover:translate-y-[-4px]'>
									{/* Number */}
									<div className='flex justify-between items-start mb-6'>
										<motion.div
											className='font-heading font-bold text-sm tracking-widest'
											style={{ color: 'hsl(var(--border))' }}>
											{svc.num}
										</motion.div>
										<motion.div
											initial={{ scale: 0 }}
											animate={isHovered ? { scale: 1 } : { scale: 0 }}
											transition={{ duration: 0.3 }}
											className='w-8 h-px bg-gradient-to-r from-silver to-transparent'
										/>
									</div>

									{/* Icon */}
									<motion.div
										whileHover={{ rotate: 5, scale: 1.05 }}
										transition={{ type: 'spring', stiffness: 300 }}
										className='relative w-12 h-12 flex items-center justify-center mb-6 border-2 transition-all duration-300 group-hover:scale-110'
										style={{
											borderColor: isHovered ? svc.color : 'hsl(var(--border))',
											color: isHovered ? svc.color : 'hsl(var(--silver-dark))',
											background: isHovered ? `${svc.color}10` : 'transparent',
										}}>
										<Icon
											size={20}
											strokeWidth={1.5}
										/>
										<motion.div
											className='absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500'
											style={{ background: svc.color }}
										/>
									</motion.div>

									{/* Title */}
									<h3
										className='font-heading font-bold text-lg mb-3 tracking-tight transition-colors duration-300 group-hover:text-silver'
										style={{ color: 'hsl(var(--foreground))' }}>
										{svc.title}
									</h3>

									{/* Description */}
									<p
										className='text-sm leading-relaxed font-light mb-5'
										style={{ color: 'hsl(var(--text-3))' }}>
										{svc.description}
									</p>

									{/* Tags */}
									<div className='flex flex-wrap gap-2 mb-5'>
										{svc.tags.map((t, idx) => (
											<motion.span
												key={t}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={
													isHovered ?
														{ opacity: 1, scale: 1 }
													:	{ opacity: 0.6, scale: 0.9 }
												}
												transition={{ delay: idx * 0.05 }}
												className='text-xs px-2.5 py-1 border tracking-wide transition-all duration-300'
												style={{
													borderColor:
														isHovered ? svc.color : 'hsl(var(--border))',
													color: isHovered ? svc.color : 'hsl(var(--silver))',
													background:
														isHovered ? `${svc.color}10` : 'hsl(var(--accent))',
												}}>
												{t}
											</motion.span>
										))}
									</div>

									{/* Learn More */}
									<MotionButton
										asChild
										variant='link'
										initial={{ opacity: 0, x: -10 }}
										animate={
											isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
										}
										transition={{ duration: 0.3 }}
										className='p-0 h-auto text-xs uppercase tracking-wider group/link hover:no-underline'
										style={{ color: svc.color }}>
										<Link href='#'>
											Learn More
											<ArrowRight
												size={12}
												className='ml-2 group-hover/link:translate-x-1 transition-transform'
											/>
										</Link>
									</MotionButton>
								</div>

								{/* Bottom Border Animation */}
								<motion.div
									className='absolute bottom-0 left-0 h-px bg-gradient-to-r from-silver to-transparent'
									initial={{ width: 0 }}
									animate={isHovered ? { width: '100%' } : { width: 0 }}
									transition={{ duration: 0.4 }}
								/>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8, duration: 0.6 }}
					className='mt-16 pt-12 border-t'
					style={{ borderColor: 'hsl(var(--border))' }}>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{STATS.map((stat, index) => (
							<MotionButton
								key={index}
								variant='ghost'
								asChild={false}
								whileHover={{ y: -5 }}
								className='flex flex-col h-auto p-4 text-center group cursor-pointer hover:bg-transparent'>
								<div className='inline-flex items-center justify-center w-12 h-12 mb-3 border-2 border-silver/20 group-hover:border-silver transition-all duration-300'>
									<stat.icon
										size={20}
										className='text-silver/60 group-hover:text-silver transition-colors'
									/>
								</div>
								<motion.div
									initial={{ scale: 0 }}
									animate={isInView ? { scale: 1 } : {}}
									transition={{ delay: 1 + index * 0.1, type: 'spring' }}
									className='text-3xl font-bold mb-1 bg-gradient-to-r from-foreground to-silver bg-clip-text text-transparent'>
									{stat.value}
								</motion.div>
								<div className='text-xs uppercase tracking-wider text-silver/60'>
									{stat.label}
								</div>
							</MotionButton>
						))}
					</div>
				</motion.div>

				{/* CTA Banner */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 1.2, duration: 0.6 }}
					className='mt-12 p-6 border border-silver/20 bg-gradient-to-r from-silver/5 to-transparent'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<Zap
								size={20}
								className='text-silver'
							/>
							<div>
								<div className='text-sm font-medium'>
									Need a custom solution?
								</div>
								<div className='text-xs text-silver/60'>
									We tailor every deliverable to your exact needs
								</div>
							</div>
						</div>
						<MotionButton
							asChild
							variant='outline'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-6 py-2 text-xs uppercase tracking-widest border-silver/20 hover:border-silver bg-transparent'>
							<Link href='#contact'>Contact Our Team →</Link>
						</MotionButton>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
