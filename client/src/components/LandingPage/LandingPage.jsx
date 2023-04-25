import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Survivors from './Survivors/Survivors';

export const LandingPage = () => {
	return (
		<div>
			<Hero data-testid='hero' />
			<About data-testid='about' />
			<Survivors data-testid='survivors' />
		</div>
	);
};
