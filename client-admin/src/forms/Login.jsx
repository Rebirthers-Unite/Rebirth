import {
	Button,
	Flex,
	FormControl,
	VStack,
	Input,
	Text,
	HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const Login = () => {

  const setToken = useAuthStore((state) => state.setToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username, password };
    fetch('http://127.0.0.1:3000/login', {
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
        console.log(data);
        const jwt = data.jwt 
        setToken(jwt)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };


	const loginPageTexts = {
		welcomeMessage: 'Welcome Back',
		forgotPassword: 'Forgot Password?',
		noAccount: "Dont't have an account? ",
		signupLink: 'Create one here',
	};

	return (
		<Flex
			h={'100vh'}
			w={'100vw'}
			direction={'column'}
			justify={'center'}
			alignItems={'center'}
		>
			<Text as={'h1'}>{loginPageTexts.welcomeMessage}</Text>

			<FormControl w={'50%'} m={'0 auto'} as={'form'}>
				<HStack p={'1rem'}>
					<EmailIcon fontSize={'3rem'} color="purple.400" />
					<Input type="email" placeholder="email or phone number" value={email} onChange={handleUsernameChange} required />
				</HStack>
				<HStack p={'1rem'}>
					<LockIcon fontSize={'3rem'} color="purple.400" />
					<Input type="password" placeholder="password" required />
				</HStack>
				<VStack>
					<Button
						type="submit"
						mt={'1rem'}
						mb={'1rem'}
						_hover={{ bg: '#9f7aea', color: '#fff' }}
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
						style={{ textDecoration: 'underline', color: '#9f7aea' }}
					>
						{loginPageTexts.signupLink}
					</Link>
				</Text>
			</VStack>
		</Flex>
	);
};

export default Login;
