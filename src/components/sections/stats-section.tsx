/** @format */

// components/sections/stats-section.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Code2, Globe2, Award } from 'lucide-react';

const stats = [
	{ icon: Users, value: 500, label: 'Happy Clients', suffix: '+' },
	{ icon: Code2, value: 120, label: 'Projects Completed', suffix: '+' },
	{ icon: Globe2, value: 25, label: 'Countries', suffix: '' },
	{ icon: Award, value: 15, label: 'Awards Won', suffix: '' },
];

export function StatsSection() {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section className='py-16 bg-primary text-primary-foreground'>
			<div className='container'>
				<div
					ref={ref}
					className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='text-center'>
							<stat.icon className='h-10 w-10 mx-auto mb-3' />
							<div className='text-3xl md:text-4xl font-bold'>
								{inView ? stat.value : 0}
								{stat.suffix}
							</div>
							<div className='text-sm opacity-90 mt-1'>{stat.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
