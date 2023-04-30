import { UnlockIcon } from '@chakra-ui/icons';
import {
	Avatar,
	AvatarBadge,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	useToast,
} from '@chakra-ui/react';
import React from 'react';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Logged out',
			description: 'Successfully logged out',
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <UnlockIcon />,
		});
	};

	const signOutUser = () => {
		localStorage.removeItem('token');
		setIsLoggedIn(false);

		showToast();
	};

	return (
		<Flex as={'nav'} p={'10px'} align={'center'} mb={'40px'}>
			<Heading as={'h1'}>Dashboard</Heading>

			<Spacer />

			<HStack spacing={'20px'}>
				{/* <Avatar name="superuser" bg={'purple.400'} src="">
					<AvatarBadge width={'1.3em'} bg={'teal.500'}>
						<Text fontSize={'xs'} color={'white'}>
							3
						</Text>
					</AvatarBadge>
				</Avatar> */}
				{/* <Text>superuser@rebirth.com</Text> */}
				<Button colorScheme="purple" onClick={signOutUser}>
					{isLoggedIn ? 'Logout' : ''}
				</Button>
			</HStack>
		</Flex>
	);
};

export default Navbar;
