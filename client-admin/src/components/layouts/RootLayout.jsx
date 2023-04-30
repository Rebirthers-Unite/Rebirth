import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default function RootLayout({isLoggedIn, setIsLoggedIn}) {
	return (
		<>
			<Grid
				templateColumns={'repeat(6, 1fr)'}
				bg={'gray.50'}
				w={'100vw'}
				minH={'100vh'}
			>
				<GridItem
					as={'aside'}
					colSpan={{
						base: 6,
						lg: 2,
						xl: 1,
					}}
					bg={'purple.400'}
					minHeight={{ lg: '100dvh' }}
					p={{
						base: '20px',
						lg: '30px',
					}}
				>
					<Sidebar />
				</GridItem>
				<GridItem
					as={'main'}
					colSpan={{
						base: 6,
						lg: 4,
						xl: 5,
					}}
					p={'40px'}
				>
					<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					<Outlet />
				</GridItem>
			</Grid>
		</>
	);
}
