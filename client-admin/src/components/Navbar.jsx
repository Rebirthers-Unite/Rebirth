import { UnlockIcon } from '@chakra-ui/icons';
import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	useToast,
} from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
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
			fetch('  https://rebirth-ktaf.onrender.com/signout/' + id, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		
		showToast;
	}

	return (
		<Flex as={'nav'} p={'10px'} align={'center'} mb={'40px'}>
			<Heading as={'h1'}>Dashboard</Heading>

			<Spacer />

			<HStack spacing={'20px'}>
				<Avatar name="superuser" bg={'purple.400'} src="">
					<AvatarBadge width={'1.3em'} bg={'teal.500'}>
						<Text fontSize={'xs'} color={'white'}>
							3
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>superuser@rebirth.com</Text>
				<Button colorScheme="purple" onClick={signOutUser}>
					Logout
				</Button>
			</HStack>
		</Flex>
	);
};

export default Navbar;
