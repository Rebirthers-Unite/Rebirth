import { RiLockPasswordFill, RiUser3Line, RiUserFill } from 'react-icons/ri';

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
import { useState } from 'react'
import useAuthStore from '../store/Token';
import { Link } from 'react-router-dom';

const Signup = () => {

  const token = useAuthStore((state) => state.token);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setUsername(event.target.value);
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
    const data = { username, email, password };
    fetch('https://rebirth-drtz.onrender.com/signup', {
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
			h={'100dvh'}
			w={'100vw'}
			direction={'column'}
			align={'center'}
			justify={'center'}
		>
			<Text as={'h1'}>{signupPageTexts.welcomeMessage}</Text>

			<FormControl onSubmit={handleSubmit} w={'50%'} m={'0 auto'} as={'form'}>
				<HStack p={'1rem'}>
					<RiUser3Line fontSize={'3rem'} color="#666" />
					<Input type="text" placeholder="Name" value={username} onChange={handleNameChange} required />
				</HStack>
				<HStack p={'1rem'}>
					<EmailIcon fontSize={'3rem'} color="#666" />
					<Input type="email" placeholder="email address" value={email} onChange={handleEmailChange} required />
				</HStack>
				<HStack p={'1rem'}>
					<Input type="text" placeholder="Role" value={role} onChange={handleRoleChange}  required />
				</HStack>
				<HStack p={'1rem'}>
					<LockIcon fontSize={'3rem'} color="#666" />
					<Input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required />
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
