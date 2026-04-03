/** @format */

// components/sections/testimonials-section.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'CEO, TechStart Inc.',
		content:
			'ZatGo transformed our business with their custom ERP solution. Our efficiency has increased by 40%!',
		rating: 5,
		avatar: 'SJ',
	},
	{
		name: 'Michael Chen',
		role: 'CTO, InnovateCorp',
		content:
			"The team's expertise in mobile development helped us launch our app ahead of schedule. Highly recommended!",
		rating: 5,
		avatar: 'MC',
	},
	{
		name: 'Emily Rodriguez',
		role: 'Operations Director, RetailPro',
		content:
			'Our POS system has never been better. The support team is responsive and knowledgeable.',
		rating: 5,
		avatar: 'ER',
	},
];

export function TestimonialsSection() {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
	const prev = () =>
		setCurrent(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);

	return (
		<section className='py-20 bg-primary/5'>
			<div className='container'>
				<div className='text-center max-w-3xl mx-auto mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						What Our Clients Say
					</h2>
					<p className='text-muted-foreground text-lg'>
						Trusted by businesses worldwide
					</p>
				</div>

				<div className='max-w-4xl mx-auto relative'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={current}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.3 }}>
							<Card className='bg-background'>
								<CardContent className='p-8'>
									<div className='flex gap-1 mb-4'>
										{[...Array(testimonials[current].rating)].map((_, i) => (
											<Star
												key={i}
												className='h-5 w-5 fill-yellow-400 text-yellow-400'
											/>
										))}
									</div>
									<p className='text-lg mb-6'>
										"{testimonials[current].content}"
									</p>
									<div className='flex items-center gap-4'>
										<Avatar>
											<AvatarFallback>
												{testimonials[current].avatar}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className='font-semibold'>
												{testimonials[current].name}
											</p>
											<p className='text-sm text-muted-foreground'>
												{testimonials[current].role}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</AnimatePresence>

					<div className='flex justify-center gap-2 mt-6'>
						<Button
							variant='outline'
							size='icon'
							onClick={prev}>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						<Button
							variant='outline'
							size='icon'
							onClick={next}>
							<ChevronRight className='h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
