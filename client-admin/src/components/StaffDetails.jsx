import { DeleteIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
	useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
	RiBriefcase5Fill,
	RiGenderlessFill,
	RiGenderlessLine,
} from 'react-icons/ri';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAuthStore from '../store/Token';
import useIodStore from '../store/User';

const StaffDetails = () => {
	const token = useAuthStore((state) => state.token);
	const setIod = useIodStore((state) => state.setIod);

	const [staffMember, setStaffMember] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Deleted Staff Member',
			description: `Successfully deleted ${staffMember.name}`,
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <DeleteIcon />,
		});
	};

		useEffect(() => {
		fetch(`https://rebirth-drtz.onrender.com/staffs/${id}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		}).then((r) => {
			r.ok
				? r.json().then((data) => {
						setStaffMember(data);
						setIod(data.id['$oid'])
				  })
				: 'Wahala!!';
		});
	}, []);

	const deleteStaffMember = () => {
		fetch(`https://rebirth-drtz.onrender.com/staffs/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		}).then(() => {
			showToast();
			navigate('/dashboard');
		});
	};

	return (
		<Container h={'100vh'}>
			<Card maxW="md">
				<CardHeader>
					<Flex spacing="4">
						<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
							<Avatar name={staffMember.name} src="" />

							<Box>
								<Heading size="md" p={'1rem'}>
									{staffMember.name}
								</Heading>
								<Text fontSize={'1.5rem'} p={'1rem'}>
									<EmailIcon /> {staffMember.email}
								</Text>
								<Text fontSize={'1.5rem'} p={'1rem'}>
									<RiBriefcase5Fill /> {staffMember.position}
								</Text>
								<Text fontSize={'1.5rem'} p={'1rem'}>
									<BsGenderAmbiguous /> {staffMember.gender}
								</Text>
							</Box>
						</Flex>
					</Flex>
				</CardHeader>

			</Card>
			<HStack justify={'center'} gap={'1rem'} mt={'1rem'}>
				<Button>
					<Link to="/update-staff">UPDATE DETAILS</Link>
				</Button>
				<Button bg={'red.500'} onClick={deleteStaffMember}>
					DELETE STAFF
				</Button>
			</HStack>
		</Container>
	);
};

export default StaffDetails;
