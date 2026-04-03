/** @format */

// components/sections/cta-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
	return (
		<section className='py-20'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-center text-white'>
					<div className='absolute inset-0 bg-black/10' />
					<div className='relative z-10'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Ready to Transform Your Business?
						</h2>
						<p className='text-lg mb-8 max-w-2xl mx-auto opacity-90'>
							Let's discuss how we can help you build the perfect software
							solution for your needs.
						</p>

						<Link href='#contact'>
							<Button
								size='lg'
								variant='secondary'>
								Get Started Today
								<ArrowRight className='ml-2 h-4 w-4' />
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
