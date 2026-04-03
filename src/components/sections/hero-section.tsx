/** @format */

// components/sections/hero-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section
			id='home'
			className='relative overflow-hidden min-h-screen flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28'
			style={{ background: 'hsl(var(--background))' }}>
			{/* Grid background */}
			<div className='absolute inset-0 grid-bg pointer-events-none' />

			{/* Radial shine top-left */}
			<div
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
			/>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{/* Eyebrow */}
						<div className='section-eyebrow mb-6'>
							Trusted by 500+ businesses
						</div>

						{/* Heading */}
						<h1
							className='font-heading font-extrabold leading-none tracking-tighter mb-6'
							style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}>
							<span className='block text-foreground'>Build</span>
							<span
								className='block'
								style={{ color: 'hsl(var(--silver))' }}>
								Smart
							</span>
							<span className='block stroke-text'>Software.</span>
						</h1>

						<p
							className='text-base leading-relaxed mb-8 max-w-md font-light'
							style={{ color: 'hsl(var(--text-3))' }}>
							We design and develop modern, scalable software solutions — POS
							systems, ERP platforms, mobile apps, and SaaS products that grow
							with your business.
						</p>

						<div className='flex flex-wrap gap-3 mb-8'>
							<Link
								href='#contact'
								className='btn-sharp'>
								Get Started →
							</Link>
							<Link
								href='#services'
								className='btn-sharp-outline'>
								View Services
							</Link>
						</div>

						{/* Trust badges */}
						<div className='flex flex-wrap gap-6'>
							{['No hidden fees', '14-day free trial', '24/7 Support'].map(
								(item) => (
									<span
										key={item}
										className='flex items-center gap-2 text-xs tracking-wide'
										style={{ color: 'hsl(var(--text-3))' }}>
										<span
											className='w-1.5 h-1.5 rounded-full flex-none'
											style={{ background: 'hsl(var(--silver))' }}
										/>
										{item}
									</span>
								),
							)}
						</div>
					</motion.div>

					{/* Right — Terminal card */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<div className='chrome-card'>
							{/* Card header */}
							<div
								className='flex items-center justify-between px-5 py-3.5 border-b'
								style={{ borderColor: 'hsl(var(--border))' }}>
								<span
									className='font-heading font-bold text-xs tracking-widest uppercase'
									style={{ color: 'hsl(var(--silver-dark))' }}>
									Project Stack
								</span>
								<div className='flex gap-1.5'>
									{['#D4D4CF', '#C0C0BB', '#A8A8A3'].map((c) => (
										<div
											key={c}
											className='w-2 h-2 rounded-full'
											style={{ background: c }}
										/>
									))}
								</div>
							</div>

							{/* Terminal */}
							<div className='p-5'>
								<pre
									className='text-xs leading-loose font-mono'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
									<span style={{ color: 'hsl(var(--border))' }}>
										{`// ZatGo Innovation — v2.4.1\n`}
									</span>
									<span style={{ color: 'hsl(var(--silver-dark))' }}>
										import
									</span>
									{` { `}
									<span style={{ color: 'hsl(var(--foreground))' }}>
										buildProduct
									</span>
									{` } `}
									<span style={{ color: 'hsl(var(--silver-dark))' }}>from</span>
									{` `}
									<span
										style={{
											color: 'hsl(var(--chrome))',
										}}>{`'@zatgo/core'\n`}</span>
									{`\n`}
									<span style={{ color: 'hsl(var(--silver-dark))' }}>
										const
									</span>
									{` product = `}
									<span style={{ color: 'hsl(var(--foreground))' }}>
										buildProduct
									</span>
									{`({\n`}
									{`  type: `}
									<span
										style={{ color: 'hsl(var(--chrome))' }}>{`'saas'`}</span>
									{`,\n`}
									{`  stack: [`}
									<span
										style={{
											color: 'hsl(var(--chrome))',
										}}>{`'next', 'go', 'k8s'`}</span>
									{`],\n`}
									{`  scale: `}
									<span
										style={{
											color: 'hsl(var(--chrome))',
										}}>{`'enterprise'`}</span>
									{`,\n`}
									{`})\n\n`}
									<span style={{ color: 'hsl(var(--border))' }}>
										{`// → Deployed in 3 weeks ✓`}
									</span>
								</pre>
							</div>

							{/* Metrics row */}
							<div
								className='grid grid-cols-3 border-t'
								style={{ borderColor: 'hsl(var(--border))' }}>
								{[
									{ val: '98%', lbl: 'Satisfaction' },
									{ val: '120+', lbl: 'Projects' },
									{ val: '25', lbl: 'Countries' },
								].map((m, i) => (
									<div
										key={i}
										className='p-4 text-center'
										style={{
											borderRight:
												i < 2 ? '1px solid hsl(var(--border))' : 'none',
										}}>
										<div
											className='font-heading font-extrabold text-2xl tracking-tight'
											style={{ color: 'hsl(var(--foreground))' }}>
											{m.val}
										</div>
										<div
											className='text-xs uppercase tracking-widest mt-0.5'
											style={{ color: 'hsl(var(--text-3))' }}>
											{m.lbl}
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
