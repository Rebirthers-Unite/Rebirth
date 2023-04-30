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
import useAuthStore from '../store/Token';

const SurvivorsDetails = ({
	updateModalOpen,
	setUpdateModalOpen,
	renderUpdateSurvivorModal,
	closeUpdateSurvivorModal,
	// renderUpdateForm,
	renderDeleteSurvivorModal,
	deleteModalOpen,
	isOpen,
	closeModal,
	setDeleteModalOpen,
	setIsUpdating,
	isUpdating,
	newSurvivor,
	setNewSurvivor,
	survivors,
	setSurvivors,
}) => {
	const token = useAuthStore((state) => state.token);
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
		fetch('https://rebirth-ktaf.onrender.com/survivors/' + id, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((r) => {
			r.ok
				? r.json().then((data) => {
						setSurvivor(data);
				  })
				: 'Wahala!!';
		});
	}, []);

	const deleteSurvivor = () => {
		fetch('  https://rebirth-ktaf.onrender.com/survivors/' + id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			setDeleteModalOpen(false);
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
							<Avatar name={survivor.name} src="" />

							<Box>
								<Heading size="sm">{survivor.name}</Heading>
								<Text>
									<span>D.O.B: </span> {survivor.date_of_birth}
								</Text>
							</Box>
						</Flex>
					</Flex>
				</CardHeader>
				<CardBody>
					<Text>
						<span>Referring Organization: </span>
						{survivor.organization}
					</Text>
					<Text>
						<span>Referring Organization Address: </span>
						{survivor.organization_contact}
					</Text>
					<Text>
						<span>Organization Email: </span> {survivor.organization_email}
					</Text>
					<Text>
						<span>Guadian: </span> {survivor.guardian_name}
					</Text>
					<Text>
						<span>Contact of Guardian: </span> {survivor.contact_of_guardian}
					</Text>
					<Text>
						<span>Level of Education: </span> {survivor.level_of_education}
					</Text>
					<Text>
						<span>School: </span> {survivor.school}
					</Text>
					<Text>
						<span>Social Asset Building: </span>{' '}
						{survivor.social_asset_building}
					</Text>
					<Text>
						<span>Children: </span> {survivor.children}
					</Text>
					<Text>
						{' '}
						<span>Date of Entry: </span> {survivor.date_of_entry}
					</Text>
					<Text>
						{' '}
						<span>Date of Exit: </span> {survivor.date_of_exit}
					</Text>
				</CardBody>
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
				survivors={survivors}
				setSurvivors={setSurvivors}
				names={survivor.name}
				survivor={survivor}
				setSurvivor={setSurvivor}
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
