import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
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
	useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteSurvivorModal from './modals/DeleteSurvivorModal';
import UpdateSurvivorModal from './modals/UpdateSurvivorModal';
const SurvivorsDetails = ({
	updateModalOpen,
	setUpdateModalOpen,
	renderUpdateSurvivorModal,
	closeUpdateSurvivorModal,
	renderUpdateForm,
	renderDeleteSurvivorModal,
	deleteModalOpen,
	isOpen,
	closeModal,
	setDeleteModalOpen,
	setIsUpdating,
	isUpdating,
	newSurvivor,
	setNewSurvivor,
}) => {
	const [survivor, setSurvivor] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Deleted Survivor',
			description: `Successfully deleted ${survivor.name}`,
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <DeleteIcon />,
		});
	};

	useEffect(() => {
		fetch('http://localhost:8000/survivors/' + id).then((r) => {
			r.ok
				? r.json().then((data) => {
						setSurvivor(data);
				  })
				: 'Wahala!!';
		});
	}, []);

	const deleteSurvivor = () => {
		fetch('  http://localhost:8000/survivors/' + id, {
			method: 'DELETE',
		}).then(() => {
			setDeleteModalOpen(false);
			showToast();
			navigate('/dashboard');
		});
	};

	const updateDetails = (e) => {
		e.preventDefault();
		console.log('Hello!');

		const survivorDetails = {
			names,
			contact,
			dob,
			reforg,
			reforgContact,
			programs,
			dateofEntry,
			dateofExit,
			guardian,
			guardianContacts,
		};

		fetch('http://localhost:8000/survivors/' + id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(survivorDetails),
		}).then((data) => console.log(data));
	};

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
			</Card>
			<HStack justify={'center'} gap={'1rem'} mt={'1rem'}>
				<Button onClick={renderUpdateSurvivorModal}>UPDATE DETAILS</Button>
				<Button bg={'red.500'} onClick={renderDeleteSurvivorModal}>
					DELETE SURVIVOR
				</Button>
			</HStack>

			<UpdateSurvivorModal
				isOpen={isOpen}
				updateModalOpen={updateModalOpen}
				closeModal={closeModal}
				closeUpdateSurvivorModal={closeUpdateSurvivorModal}
				isUpdating={isUpdating}
				setIsUpdating={setIsUpdating}
				setUpdateModalOpen={setUpdateModalOpen}
				newSurvivor={newSurvivor}
				setNewSurvivor={setNewSurvivor}
			/>
			<DeleteSurvivorModal
				deleteModalOpen={deleteModalOpen}
				closeModal={closeModal}
				deleteSurvivor={deleteSurvivor}
				survivorName={survivor.name}
			/>
		</Container>
	);
};

export default SurvivorsDetails;
