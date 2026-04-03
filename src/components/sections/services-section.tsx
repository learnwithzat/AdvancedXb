/** @format */

// components/sections/services-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Shield, Zap } from 'lucide-react';

const SERVICES = [
	{
		num: '01',
		icon: Code2,
		title: 'Web Development',
		description:
			'Modern, scalable web apps built with Next.js, React, and cutting-edge technologies for peak performance.',
		tags: ['Responsive', 'SEO', 'Performance'],
	},
	{
		num: '02',
		icon: Database,
		title: 'POS & ERP Systems',
		description:
			'Custom business software with real-time analytics, inventory control, and complete operational oversight.',
		tags: ['Inventory', 'Analytics', 'Reporting'],
	},
	{
		num: '03',
		icon: Smartphone,
		title: 'Mobile Apps',
		description:
			'Cross-platform mobile applications with native performance, offline-first architecture, and push notifications.',
		tags: ['iOS', 'Android', 'PWA'],
	},
	{
		num: '04',
		icon: Cloud,
		title: 'Cloud Solutions',
		description:
			'Scalable cloud infrastructure, CI/CD pipelines, and deployment strategies for modern applications.',
		tags: ['AWS', 'Azure', '99.9% Uptime'],
	},
	{
		num: '05',
		icon: Shield,
		title: 'Security & Compliance',
		description:
			'Enterprise-grade security, data encryption, and compliance with GDPR and industry standards.',
		tags: ['Encryption', 'GDPR', 'Audits'],
	},
	{
		num: '06',
		icon: Zap,
		title: 'SaaS Products',
		description:
			'End-to-end SaaS development from concept to deployment with subscriptions and analytics built in.',
		tags: ['Subscriptions', 'API', 'Dashboards'],
	},
];

export function ServicesSection() {
	return (
		<section
			id='services'
			className='py-24'
			style={{ background: 'hsl(var(--secondary))' }}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				{/* Header */}
				<div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10'>
					<div>
						<div className='section-eyebrow mb-3'>What we do</div>
						<h2
							className='font-heading font-extrabold tracking-tighter leading-none'
							style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
							Our Services
						</h2>
					</div>
					<p
						className='text-sm leading-relaxed font-light max-w-xs'
						style={{ color: 'hsl(var(--text-3))' }}>
						Comprehensive software solutions tailored to your business needs
					</p>
				</div>

				{/* Grid */}
				<div
					className='grid md:grid-cols-2 lg:grid-cols-3'
					style={{
						gap: '1px',
						background: 'hsl(var(--border))',
					}}>
					{SERVICES.map((svc, i) => {
						const Icon = svc.icon;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.07 }}
								viewport={{ once: true }}
								className='group border-accent-hover p-7 cursor-default'
								style={{ background: 'hsl(var(--secondary))' }}
								onMouseEnter={(e) =>
									((e.currentTarget as HTMLElement).style.background =
										'hsl(var(--card))')
								}
								onMouseLeave={(e) =>
									((e.currentTarget as HTMLElement).style.background =
										'hsl(var(--secondary))')
								}>
								{/* Number */}
								<div
									className='font-heading font-bold text-xs tracking-widest mb-4'
									style={{ color: 'hsl(var(--border))' }}>
									{svc.num}
								</div>

								{/* Icon */}
								<div
									className='w-9 h-9 flex items-center justify-center mb-4 border'
									style={{
										borderColor: 'hsl(var(--border))',
										color: 'hsl(var(--silver-dark))',
									}}>
									<Icon size={16} />
								</div>

								{/* Title */}
								<h3
									className='font-heading font-bold text-base mb-2 tracking-tight'
									style={{ color: 'hsl(var(--foreground))' }}>
									{svc.title}
								</h3>

								{/* Desc */}
								<p
									className='text-sm leading-relaxed font-light mb-4'
									style={{ color: 'hsl(var(--text-3))' }}>
									{svc.description}
								</p>

								{/* Tags */}
								<div className='flex flex-wrap gap-1.5'>
									{svc.tags.map((t) => (
										<span
											key={t}
											className='text-xs px-2 py-0.5 border tracking-wide'
											style={{
												borderColor: 'hsl(var(--border))',
												color: 'hsl(var(--silver))',
												background: 'hsl(var(--accent))',
											}}>
											{t}
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
