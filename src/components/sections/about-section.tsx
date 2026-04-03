/** @format */

// components/sections/about-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const values = [
	{
		icon: Target,
		title: 'Our Mission',
		description:
			'Empower businesses with innovative software solutions that drive growth and efficiency.',
	},
	{
		icon: Lightbulb,
		title: 'Our Vision',
		description:
			'To be the leading software innovation partner for businesses worldwide.',
	},
	{
		icon: Users,
		title: 'Our Team',
		description:
			'Dedicated experts passionate about creating exceptional digital experiences.',
	},
	{
		icon: TrendingUp,
		title: 'Our Growth',
		description:
			'Continuously evolving with technology to serve our clients better.',
	},
];

export function AboutSection() {
	return (
		<section
			id='about'
			className='py-20'>
			<div className='container'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							About ZatGo Innovation
						</h2>
						<p className='text-muted-foreground text-lg mb-6'>
							Founded with a vision to transform how businesses leverage
							technology, ZatGo Innovation has grown into a trusted partner for
							companies seeking modern, scalable software solutions.
						</p>
						<p className='text-muted-foreground mb-8'>
							We combine technical expertise with business acumen to deliver
							solutions that not only meet but exceed expectations. Our agile
							methodology ensures rapid delivery without compromising on
							quality.
						</p>

						<a href='#contact'>
							<Button>Learn More About Us</Button>
						</a>
					</motion.div>

					<div className='grid gap-6'>
						{values.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors'>
								<div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
									<value.icon className='h-6 w-6 text-primary' />
								</div>
								<div>
									<h3 className='font-semibold mb-1'>{value.title}</h3>
									<p className='text-sm text-muted-foreground'>
										{value.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
