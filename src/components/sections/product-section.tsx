/** @format */

// app/web/src/components/sections/products-section.tsx
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
	CalendarCheck,
	Users,
	Handshake,
	BookOpen,
	Receipt,
	PackageCheck,
	ArrowUpRight,
	Sparkles,
	MoveRight,
} from 'lucide-react';

const PRODUCTS = [
	{
		num: '01',
		icon: CalendarCheck,
		title: 'Attendance Register',
		slug: 'attendance-register',
		tagline: 'Track. Monitor. Simplify.',
		description:
			'Effortlessly manage employee attendance with real-time tracking, automated reports, and seamless payroll integration.',
		tags: ['Real-time', 'Reports', 'Payroll Sync'],
		color: '#a78bfa', // soft violet — sits well on dark/light
		accentLight: '#a78bfa14',
	},
	{
		num: '02',
		icon: Users,
		title: 'HR',
		slug: 'hr',
		tagline: 'People. Process. Performance.',
		description:
			'A complete HR suite for managing employees, leaves, payroll, appraisals, and onboarding — all in one place.',
		tags: ['Onboarding', 'Payroll', 'Leave Mgmt'],
		color: '#f97316', // warm amber-orange
		accentLight: '#f9731614',
	},
	{
		num: '03',
		icon: Handshake,
		title: 'CRM',
		slug: 'crm',
		tagline: 'Connect. Convert. Retain.',
		description:
			'Manage your sales pipeline, customer interactions, and follow-ups with a CRM built for growing businesses.',
		tags: ['Pipeline', 'Follow-ups', 'Analytics'],
		color: '#38bdf8', // sky blue — clear and trustworthy
		accentLight: '#38bdf814',
	},
	{
		num: '04',
		icon: BookOpen,
		title: 'Simple Accounting',
		slug: 'simple-accounting',
		tagline: 'Clear Books. Confident Decisions.',
		description:
			'Straightforward double-entry accounting with invoicing, expense tracking, and financial statements for small businesses.',
		tags: ['Invoicing', 'Expenses', 'P&L Reports'],
		color: '#34d399', // emerald — money, growth
		accentLight: '#34d39914',
	},
	{
		num: '05',
		icon: Receipt,
		title: 'Billing App',
		slug: 'billing-app',
		tagline: 'Bill Fast. Get Paid Faster.',
		description:
			'Generate professional invoices, track payments, send reminders, and manage your billing cycle with zero friction.',
		tags: ['Invoices', 'Reminders', 'Multi-currency'],
		color: '#fbbf24', // gold — value, premium
		accentLight: '#fbbf2414',
	},
	{
		num: '06',
		icon: PackageCheck,
		title: 'Order Management',
		slug: 'order-management',
		tagline: 'Order In. Chaos Out.',
		description:
			'End-to-end order processing from placement to fulfillment — with inventory sync, status tracking, and customer notifications.',
		tags: ['Fulfillment', 'Inventory', 'Notifications'],
		color: '#fb7185', // rose — action, urgency
		accentLight: '#fb718514',
	},
];

export function ProductsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 60]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.08, delayChildren: 0.2 },
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
		}),
	};

	return (
		<section
			ref={sectionRef}
			id='products'
			className='py-24 relative overflow-hidden'
			style={{ background: 'hsl(var(--background))' }}>
			{/* Animated Background */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ y: backgroundY }}>
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-silver/5 to-transparent blur-3xl' />
				<div className='absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-l from-silver/4 to-transparent blur-3xl' />
				{/* Dot grid pattern */}
				<div
					className='absolute inset-0 opacity-[0.025]'
					style={{
						backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
						backgroundSize: '32px 32px',
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
								Our Products
							</span>
						</motion.div>

						<h2
							className='font-heading font-bold tracking-tighter leading-[1.1]'
							style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
							Built for{' '}
							<span className='relative inline-block'>
								<span className='bg-gradient-to-r from-silver via-silver-dark to-chrome bg-clip-text text-transparent'>
									Real Business
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
						Purpose-built software products that solve everyday operational
						challenges — ready to use, easy to adopt.
					</motion.p>
				</motion.div>

				{/* Products Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-px'
					style={{ background: 'hsl(var(--border))' }}>
					{PRODUCTS.map((product, i) => {
						const Icon = product.icon;
						const isHovered = hoveredIndex === i;

						return (
							<motion.div
								key={product.slug}
								custom={i}
								variants={cardVariants}
								onHoverStart={() => setHoveredIndex(i)}
								onHoverEnd={() => setHoveredIndex(null)}
								className='group relative overflow-hidden'
								style={{ background: 'hsl(var(--background))' }}>
								{/* Hover Background */}
								<motion.div
									className='absolute inset-0'
									style={{
										background: `linear-gradient(135deg, ${product.accentLight}, transparent 70%)`,
									}}
									initial={false}
									animate={{ opacity: isHovered ? 1 : 0 }}
									transition={{ duration: 0.4 }}
								/>

								{/* Hover corner accent */}
								<motion.div
									className='absolute top-0 right-0 w-24 h-24'
									style={{
										background: `radial-gradient(circle at top right, ${product.color}20, transparent 70%)`,
									}}
									initial={false}
									animate={{ opacity: isHovered ? 1 : 0 }}
									transition={{ duration: 0.4 }}
								/>

								{/* Card Content */}
								<Link
									href={`/products/${product.slug}`}
									className='block relative p-8 h-full transition-all duration-500 group-hover:translate-y-[-3px]'>
									{/* Number row */}
									<div className='flex justify-between items-start mb-6'>
										<span
											className='font-heading font-bold text-xs tracking-[0.25em]'
											style={{ color: 'hsl(var(--border))' }}>
											{product.num}
										</span>
										{/* Animated arrow on hover */}
										<motion.div
											initial={{ opacity: 0, x: -6, y: 6 }}
											animate={
												isHovered ?
													{ opacity: 1, x: 0, y: 0 }
												:	{ opacity: 0, x: -6, y: 6 }
											}
											transition={{ duration: 0.25 }}>
											<ArrowUpRight
												size={16}
												style={{ color: product.color }}
											/>
										</motion.div>
									</div>

									{/* Icon */}
									<motion.div
										whileHover={{ rotate: 4, scale: 1.08 }}
										transition={{ type: 'spring', stiffness: 320 }}
										className='relative w-12 h-12 flex items-center justify-center mb-5 border-2 transition-all duration-300'
										style={{
											borderColor:
												isHovered ? product.color : 'hsl(var(--border))',
											color:
												isHovered ? product.color : 'hsl(var(--silver-dark))',
											background:
												isHovered ? product.accentLight : 'transparent',
										}}>
										<Icon
											size={20}
											strokeWidth={1.5}
										/>
										<motion.div
											className='absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500'
											style={{ background: product.color }}
										/>
									</motion.div>

									{/* Tagline */}
									<motion.p
										className='text-xs font-medium tracking-widest uppercase mb-2 transition-colors duration-300'
										style={{
											color:
												isHovered ? product.color : 'hsl(var(--silver-dark))',
										}}>
										{product.tagline}
									</motion.p>

									{/* Title */}
									<h3
										className='font-heading font-bold text-lg mb-3 tracking-tight transition-colors duration-300 group-hover:text-silver'
										style={{ color: 'hsl(var(--foreground))' }}>
										{product.title}
									</h3>

									{/* Description */}
									<p
										className='text-sm leading-relaxed font-light mb-5'
										style={{ color: 'hsl(var(--text-3))' }}>
										{product.description}
									</p>

									{/* Tags */}
									<div className='flex flex-wrap gap-2 mb-6'>
										{product.tags.map((tag, idx) => (
											<motion.span
												key={tag}
												initial={{ opacity: 0.6, scale: 0.9 }}
												animate={
													isHovered ?
														{ opacity: 1, scale: 1 }
													:	{ opacity: 0.6, scale: 0.9 }
												}
												transition={{ delay: idx * 0.04 }}
												className='text-xs px-2.5 py-1 border tracking-wide transition-all duration-300'
												style={{
													borderColor:
														isHovered ? product.color : 'hsl(var(--border))',
													color:
														isHovered ? product.color : 'hsl(var(--silver))',
													background:
														isHovered ?
															product.accentLight
														:	'hsl(var(--accent))',
												}}>
												{tag}
											</motion.span>
										))}
									</div>

									{/* CTA */}
									<motion.div
										className='flex items-center gap-2 text-xs uppercase tracking-wider font-medium'
										initial={{ opacity: 0, x: -8 }}
										animate={
											isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
										}
										transition={{ duration: 0.25 }}
										style={{ color: product.color }}>
										View Product
										<MoveRight
											size={13}
											className='group-hover:translate-x-1 transition-transform'
										/>
									</motion.div>
								</Link>

								{/* Bottom border animation */}
								<motion.div
									className='absolute bottom-0 left-0 h-px'
									style={{
										background: `linear-gradient(to right, ${product.color}, transparent)`,
									}}
									initial={{ width: 0 }}
									animate={{ width: isHovered ? '100%' : 0 }}
									transition={{ duration: 0.4 }}
								/>

								{/* Left border animation */}
								<motion.div
									className='absolute top-0 left-0 w-px'
									style={{
										background: `linear-gradient(to bottom, ${product.color}, transparent)`,
									}}
									initial={{ height: 0 }}
									animate={{ height: isHovered ? '100%' : 0 }}
									transition={{ duration: 0.4, delay: 0.05 }}
								/>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 1.0, duration: 0.6 }}
					className='mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t'
					style={{ borderColor: 'hsl(var(--border))' }}>
					<div>
						<p
							className='text-sm font-medium mb-1'
							style={{ color: 'hsl(var(--foreground))' }}>
							Can't find what you're looking for?
						</p>
						<p
							className='text-xs'
							style={{ color: 'hsl(var(--text-3))' }}>
							We build custom software tailored exactly to your workflow.
						</p>
					</div>

					<MotionButton
						asChild
						variant='outline'
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 0.96 }}
						className='shrink-0 px-6 py-2 text-xs uppercase tracking-widest border-silver/20 hover:border-silver bg-transparent'>
						<Link href='#contact'>Request a Custom Build →</Link>
					</MotionButton>
				</motion.div>
			</div>
		</section>
	);
}
