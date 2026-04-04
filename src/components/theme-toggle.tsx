/** @format */

// components/theme-toggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { MotionButton } from '@/components/ui/motion-button';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<MotionButton
			variant='ghost'
			size='icon'
			whileHover={{ scale: 1.1, rotate: 15 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</MotionButton>
	);
}
