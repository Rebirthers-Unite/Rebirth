import { RiUser3Line } from 'react-icons/ri';

import {
	Button,
	Flex,
	FormControl,
	VStack,
	Input,
	Text,
	HStack,
} from '@chakra-ui/react';

import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';

const Signup = () => {
	const signupPageTexts = {
		welcomeMessage: 'Welcome',
		haveAccount: 'Already have an account? ',
		loginLink: 'Login here',
	};

	return (
		<Flex
			h={'100dvh'}
			w={'100vw'}
			direction={'column'}
			align={'center'}
			justify={'center'}
		>
			<Text as={'h1'}>{signupPageTexts.welcomeMessage}</Text>

			<FormControl w={'50%'} m={'0 auto'} as={'form'}>
				<HStack p={'1rem'}>
					<RiUser3Line fontSize={'3rem'} color="#666" />
					<Input type="email" placeholder="full name" required />
				</HStack>
				<HStack p={'1rem'}>
					<EmailIcon fontSize={'3rem'} color="#666" />
					<Input type="password" placeholder="email address" required />
				</HStack>
				<HStack p={'1rem'}>
					<PhoneIcon fontSize={'3rem'} color="#666" />
					<Input type="email" placeholder="email or phone number" required />
				</HStack>
				<HStack p={'1rem'}>
					<LockIcon fontSize={'3rem'} color="#666" />
					<Input type="password" placeholder="password" required />
				</HStack>
				<VStack>
					<Button
						type="submit"
						mt={'1rem'}
						mb={'1rem'}
						_hover={{ bg: '#9f7aea', color: '#fff' }}
					>
						Signup
					</Button>
				</VStack>
			</FormControl>

			<VStack>
				<Text as={'p'} mt={'1rem'}>
					{signupPageTexts.haveAccount}
					<Link
						to="/login"
						style={{ textDecoration: 'underline', color: '#9f7aea' }}
					>
						{signupPageTexts.loginLink}
					</Link>
				</Text>
			</VStack>
		</Flex>
	);
};

export default Signup;
