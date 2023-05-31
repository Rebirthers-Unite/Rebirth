import {
	Button,
	Flex,
	FormControl,
	VStack,
	Input,
	Text,
	HStack,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import useAuthStore from '../store/Token';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
	const setToken = useAuthStore((state) => state.setToken);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const redirect = useNavigate();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			email: email,
			password: password,
		};
		fetch('https://rebiirth.onrender.com/login', {
			method: 'POST',
			headers: {
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
				console.log(data.user.id);
				const jwt = data.jwt;
				setToken(jwt);
				setIsLoggedIn(true);
				console.log(isLoggedIn);
				redirect('/dashboard');
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
	};
	const loginPageTexts = {
		welcomeMessage: 'Welcome Back',
		// forgotPassword: 'Forgot Password?',
		// noAccount: "Dont't have an account? ",
		// signupLink: 'Create one here',
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
				fontFamily={'Sans serif'}
				mb={'30px'}
			>
				{loginPageTexts.welcomeMessage}
			</Text>
			<FormControl
				onSubmit={handleSubmit}
				maxWidth={{
					base: '80%',
					md: '50%',
					lg: '30%',
				}}
				m={'1rem auto'}
				as="form"
				borderRadius={'8px'}
				boxShadow={'1px 5px 25px #333'}
				p={'1rem'}
			>
				<HStack p={'1rem'}>
					<EmailIcon fontSize={'2rem'} color="purple.700" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="email"
						fontFamily={'sans-serif'}
						placeholder="Email Address"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</HStack>
				<HStack p={'1rem'}>
					<LockIcon fontSize={'2rem'} color="purple.700" />
					<Input
						border={'none'}
						borderBottom={'2px solid #D1D1D4'}
						bgColor={'none'}
						_placeholder={{
							color: 'black',
						}}
						type="password"
						fontFamily={'sans-serif'}
						placeholder="Password"
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
						Login
					</Button>
				</VStack>
			</FormControl>
			<VStack>
				<Link> {loginPageTexts.forgotPassword}</Link>
				<Text as={'p'} mt={'1rem'}>
					{loginPageTexts.noAccount}
					<Link
						to="/signup"
						style={{ textDecoration: 'underline', color: '#e9e5e5' }}
					>
						{loginPageTexts.signupLink}
					</Link>
				</Text>
			</VStack>
		</Flex>
	);
};
export default Login;
