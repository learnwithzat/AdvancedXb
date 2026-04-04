/** @format */

'use client';

import * as React from 'react';
import { forwardRef, useState, useRef, useEffect } from 'react';
import {
	motion,
	useInView,
	useScroll,
	useTransform,
	useMotionValue,
	useSpring,
} from 'framer-motion';
import { Button, type ButtonProps } from './button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type MotionButtonProps = ButtonProps &
	React.ComponentProps<typeof motion.button> & {
		loading?: boolean;
		leftIcon?: React.ReactNode;
		rightIcon?: React.ReactNode;
		ripple?: boolean;
		scrollAnimate?: boolean;
		magnetic?: boolean;
	};

// Create the motion-wrapped component outside the render cycle to fix the JSX syntax error
const MotionComponent = motion.create(Button);

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
	(
		{
			children,
			className,
			loading = false,
			disabled,
			leftIcon,
			rightIcon,
			ripple = true,
			scrollAnimate = false,
			magnetic = false,
			onClick,
			whileHover = { scale: 1.05 },
			whileTap = { scale: 0.95 },
			transition = { type: 'spring', stiffness: 300 },
			...rest
		},
		ref,
	) => {
		const [ripples, setRipples] = useState<
			{ x: number; y: number; id: number }[]
		>([]);
		const [mounted, setMounted] = useState(false);
		const btnRef = useRef<HTMLButtonElement | null>(null);

		useEffect(() => setMounted(true), []);

		const isInView = useInView(btnRef, { once: true, margin: '-50px' });
		const { scrollYProgress } = useScroll();
		const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

		// Magnetic effect state
		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);
		const springConfig = { stiffness: 150, damping: 15 };
		const springX = useSpring(mouseX, springConfig);
		const springY = useSpring(mouseY, springConfig);

		const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (magnetic && !disabled && !loading) {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - (rect.left + rect.width / 2);
				const y = e.clientY - (rect.top + rect.height / 2);
				mouseX.set(x * 0.35); // Strength factor
				mouseY.set(y * 0.35);
			}
			rest.onMouseMove?.(e);
		};

		const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
			mouseX.set(0);
			mouseY.set(0);
			rest.onMouseLeave?.(e);
		};

		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (loading || disabled) return;

			if (ripple) {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const id = Date.now();
				setRipples((prev) => [...prev, { x, y, id }]);
				setTimeout(
					() => setRipples((prev) => prev.filter((r) => r.id !== id)),
					600,
				);
			}

			onClick?.(e);
		};

		return (
			<MotionComponent
				ref={(node) => {
					btnRef.current = node;
					if (typeof ref === 'function') ref(node);
					else if (ref)
						(ref as React.MutableRefObject<HTMLButtonElement | null>).current =
							node;
				}}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				disabled={disabled || loading}
				onClick={handleClick}
				whileHover={disabled || loading ? {} : whileHover}
				whileTap={disabled || loading ? {} : whileTap}
				initial={scrollAnimate ? { opacity: 0, y: 20 } : false}
				animate={
					scrollAnimate ?
						{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }
					:	{}
				}
				style={{
					...rest.style,
					x: magnetic && mounted ? springX : undefined,
					y:
						scrollAnimate && mounted ? yParallax
						: magnetic && mounted ? springY
						: undefined,
				}}
				transition={transition}
				className={cn(
					'relative overflow-hidden flex items-center justify-center gap-2 rounded-full font-heading uppercase tracking-widest transition-colors',
					className,
				)}
				{...rest}>
				<span
					className={cn(
						'flex items-center justify-center gap-2 w-full h-full',
						loading && 'opacity-70',
					)}>
					{/* Ripple */}
					{ripple && (
						<span className='absolute inset-0 pointer-events-none'>
							{ripples.map((r) => (
								<span
									key={r.id}
									className='absolute w-40 h-40 bg-white/30 rounded-full animate-ping'
									style={{ left: r.x - 80, top: r.y - 80 }}
								/>
							))}
						</span>
					)}

					{/* Left Icon */}
					{leftIcon && !loading && (
						<span className='flex items-center'>{leftIcon}</span>
					)}

					{/* Loading Spinner */}
					{loading && <Loader2 className='h-4 w-4 animate-spin' />}

					{children}

					{/* Right Icon */}
					{rightIcon && !loading && (
						<span className='flex items-center'>{rightIcon}</span>
					)}
				</span>
			</MotionComponent>
		);
	},
);

MotionButton.displayName = 'MotionButton';
