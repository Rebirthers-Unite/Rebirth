import { RiBriefcase4Line, RiUser3Line } from 'react-icons/ri';
import {
	Button,
	Flex,
	FormControl,
	VStack,
	Input,
	Text,
	HStack,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import useAuthStore from '../store/Token';
import { Link } from 'react-router-dom';

const Signup = ({}) => {
	const token = useAuthStore((state) => state.token);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [password, setPassword] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleRoleChange = (event) => {
		setRole(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: name,
			email: email,
			role: role,
			password: password,
		};
		fetch('https://rebiirth.onrender.com/signup', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
	};
	const signupPageTexts = {
		welcomeMessage: 'Welcome',
		haveAccount: 'Already have an account? ',
		loginLink: 'Login here',
	};
	return (
		<Flex
			h={'100vh'}
			w={'100vw'}
			direction={'column'}
			justify={'center'}
			alignItems={'center'}
			bg={'linear-gradient(90deg, #ccc, #776BCC)'}
		>
			<Text
				as={'h1'}
				w={'80%'}
				textAlign={'center'}
				fontFamily={'Pathway Extreme'}
				mb={'30px'}
			>
				{signupPageTexts.welcomeMessage}
			</Text>
			<FormControl
				onSubmit={handleSubmit}
				maxWidth={{
					base: '80%',
					md: '50%',
					lg: '30%',
				}}
				m={'1rem auto'}
				as={'form'}
				borderRadius={'8px'}
				boxShadow={'1px 5px 25px #333'}
				p={'1rem'}
			>
				<HStack p={'1rem'}>
					<RiUser3Line fontSize={'3rem'} color="#553c9a" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="text"
						placeholder="Name"
						value={name}
						onChange={handleNameChange}
						required
					/>
				</HStack>
				<HStack p={'1rem'}>
					<EmailIcon fontSize={'3rem'} color="purple.700" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="email"
						placeholder="email address"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</HStack>
				<HStack p={'1rem'}>
					<RiBriefcase4Line fontSize={'3rem'} color="#553c9a" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="text"
						placeholder="Role"
						value={role}
						onChange={handleRoleChange}
						required
					/>
				</HStack>
				<HStack p={'1rem'}>
					<LockIcon fontSize={'3rem'} color="purple.700" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="password"
						placeholder="password"
						value={password}
						onChange={handlePasswordChange}
						required
					/>
				</HStack>
				<VStack>
					<Button
						type="submit"
						mt={'1rem'}
						mb={'1rem'}
						_hover={{ bg: 'purple.600', color: '#fff' }}
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
						style={{ textDecoration: 'underline', color: '#ccc' }}
					>
						{signupPageTexts.loginLink}
					</Link>
				</Text>
			</VStack>
		</Flex>
	);
};
export default Signup;
