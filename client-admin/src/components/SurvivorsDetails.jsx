import { PhoneIcon } from '@chakra-ui/icons';
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
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SurvivorsDetails = () => {
	const [survivor, setSurvivor] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch('http://localhost:8000/survivors/' + id).then((r) => {
			r.ok
				? r.json().then((data) => {
						setSurvivor(data);
				  })
				: 'Wahala!!';
		});
	}, []);

	return (
		<Container h={'100vh'}>
			<Card maxW="md">
				<CardHeader>
					<Flex spacing="4">
						<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
							<Avatar name={survivor.name} src="" />

							<Box>
								<Heading size="sm">{survivor.name}</Heading>
								<Text>
									<span>D.O.B: </span> {survivor.dateOfBirth}
								</Text>
								<Text>
									<PhoneIcon /> {survivor.contact}
								</Text>
							</Box>
						</Flex>
						<IconButton
							variant="ghost"
							colorScheme="gray"
							aria-label="See menu"
							// icon={<BsThreeDotsVertical />}
						/>
					</Flex>
				</CardHeader>
				<CardBody>
					<Text>
						<span>Referring Organization: </span>
						{survivor.referringOrganization}
					</Text>
					<Text>
						<span>Referring Organization Address: </span>
						{survivor.referringOrganizationContact}
					</Text>
					<Text>
						<span>Programs: </span> {survivor.programs}
					</Text>
					<Text>
						{' '}
						<span>Date of Entry: </span> {survivor.dateOfEntry}
					</Text>
					<Text>
						{' '}
						<span>Date of Exit: </span> {survivor.dateOfExit}
					</Text>
					<Text>
						<span>Guardian: </span> {survivor.guardian}
					</Text>
					<Text>
						<span>Guardian Contact: </span>
						{survivor.guardianContact}
					</Text>
				</CardBody>
				<Image
					objectFit="cover"
					src="https://placehold.co/600x400"
					alt="Image goes here"
				/>

				{/* 
	<CardFooter
		justify="space-between"
		flexWrap="wrap"
		sx={{
			'& > button': {
				minW: '136px',
			},
		}}
	>
		<Button flex="1" variant="ghost" leftIcon={<BiLike />}>
			Like
		</Button>
		<Button flex="1" variant="ghost" leftIcon={<BiChat />}>
			Comment
		</Button>
		<Button flex="1" variant="ghost" leftIcon={<BiShare />}>
			Share
		</Button>
	</CardFooter> */}
			</Card>
			<HStack justify={'center'} gap={'1rem'} mt={'1rem'}>
				<Button>UPDATE DETAILS</Button>
				<Button bg={'red.500'}>DELETE SURVIVOR</Button>
			</HStack>
		</Container>
	);
};

export default SurvivorsDetails;
