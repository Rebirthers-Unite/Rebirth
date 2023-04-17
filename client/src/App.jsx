import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Survivors from './components/Survivors/Survivors';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Survivors />
			<Footer />
		</div>
	);
}

export default App;
