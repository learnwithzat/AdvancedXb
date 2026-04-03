/** @format */

// components/sections/hero-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function HeroSection() {
	return (
		<section
			id='home'
			className='relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28'>
			{/* Background Gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900 -z-10' />

			{/* Animated Shapes */}
			<div className='absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob' />
			<div className='absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000' />

			<div className='container relative'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						<div className='inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 bg-background/50 backdrop-blur'>
							<span className='relative flex h-2 w-2 mr-2'>
								<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
								<span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
							</span>
							Trusted by 500+ businesses
						</div>

						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>
							Build Smart Software with{' '}
							<span className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
								ZatGo Innovation
							</span>
						</h1>

						<p className='text-lg text-muted-foreground mb-8 max-w-lg'>
							We design and develop modern, scalable software solutions
							including POS systems, ERP platforms, mobile apps, and SaaS
							products.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 mb-8'>
							<Link href='#contact'>
								<Button size='lg'>
									Get Started
									<ArrowRight className='ml-2 h-4 w-4' />
								</Button>
							</Link>

							<Link href='#services'>
								<Button
									size='lg'
									variant='outline'>
									View Services
								</Button>
							</Link>
						</div>

						<div className='flex flex-wrap gap-4 text-sm'>
							{['No hidden fees', '14-day free trial', '24/7 Support'].map(
								(item) => (
									<div
										key={item}
										className='flex items-center gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500' />
										<span>{item}</span>
									</div>
								),
							)}
						</div>
					</motion.div>

					{/* Right Content - Hero Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='relative'>
						<div className='relative rounded-2xl overflow-hidden shadow-2xl'>
							<div className='absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20' />
							<img
								src='https://placehold.co/600x400/3b82f6/white?text=Software+Development'
								alt='Software Development'
								className='w-full h-auto'
							/>
						</div>

						{/* Floating Cards */}
						<div className='absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 animate-bounce-slow'>
							<div className='flex items-center gap-2'>
								<div className='h-8 w-8 bg-green-100 rounded-full flex items-center justify-center'>
									<CheckCircle className='h-4 w-4 text-green-600' />
								</div>
								<div>
									<p className='text-xs text-muted-foreground'>
										Client Satisfaction
									</p>
									<p className='font-bold'>98%</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
