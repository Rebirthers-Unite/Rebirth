import {
	Box,
	Button,
	Container,
	HStack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import SurvivorsList from '../components/tabs/SurvivorsList';
import StaffList from '../components/tabs/StaffList';
import SearchStaff from '../forms/SearchStaff';
import UpdateSurvivorModal from '../components/modals/UpdateSurvivorModal';
import AddBlog from '../components/tabs/AddBlog';
import SurvivorsSearch from '../forms/SurvivorsSearch';
import BlogsSearch from '../forms/BlogsSearch';
import BlogCards from '../components/BlogCards';
import StaffControlForm from '../forms/StaffControlForm';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/Token';
import Programs from '../components/Programs'; // Import the modified Programs component

const Dashboard = ({
	renderupdateform,
	isOpen,
	closeModal,
	loading,
	renderNewStaffForm,
	newSurvivor,
	setNewSurvivor,
	survivors,
	setSurvivors,
	staff,
	setStaff,
	renderStaffControlModal,
	staffControlModalIsOpen,
	closeStaffControlModal,
	newStaff,
	setNewStaff,
	newBlog,
	setNewBlog,
	isModalOpen,
	setIsModalOpen
}) => {
	const token = useAuthStore((state) => state.token);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://rebiirth.onrender.com/survivors/', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((r) => {
			r.ok ? r.json().then((data) => setSurvivors(data)) : 'Problems!';
		});
	}, [newSurvivor]);

	const [tabIndex, setTabIndex] = useState(0);
	const [searchStaff, setSearchStaff] = useState('');

	// Fetch programs from the render API
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		fetch('https://rebiirth.onrender.com/programs', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Failed to fetch programs');
				}
			})
			.then((data) => {
				setPrograms(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Box>
			<Tabs
				isManual
				isLazy
				variant={'soft-rounded'}
				mt={'40px'}
				p={'20px'}
				colorScheme="purple"
				// h={'100dvh'}
				maxW={'100vw'}
				// isFitted
			>
				<TabList>
					<Tab
						// border={"none"}
						_selected={{
							color: 'white',
							bg: 'purple.400',
							borderTopLeftRadius: '60px',
						}}
						h={{
							base: '2rem',
							md: '3rem',
						}}
						fontSize={{
							base: '0.7rem',
							md: '1rem',
						}}
					>
						Survivors
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							// borderTopRightRadius: '10px',
						}}
						h={{
							base: '2rem',
							md: '3rem',
						}}
						fontSize={{
							base: '0.7rem',
							md: '1rem',
						}}
					>
						Staff
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							// borderTopRightRadius: '10px',
						}}
						h={{
							base: '2rem',
							md: '3rem',
						}}
						fontSize={{
							base: '0.7rem',
							md: '1rem',
						}}
					>
						Post Blogs
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							// borderTopRightRadius: '60px',
						}}
						h={{
							base: '2rem',
							md: '3rem',
						}}
						fontSize={{
							base: '0.7rem',
							md: '1rem',
						}}
						id="#viewBlogs"
					>
						View Blogs
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							borderTopRightRadius: '60px',
						}}
						h={{
							base: '2rem',
							md: '3rem',
						}}
						fontSize={{
							base: '0.7rem',
							md: '1rem',
						}}
					>
						Programs
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<HStack justify={'space-between'}>
							<SurvivorsSearch search={search} setSearch={setSearch} />
							<Button
								fontSize={{
									base: '0.8rem',
								}}
								bg={'purple.300'}
								color={'white'}
								_hover={{ bg: 'purple.500' }}
								onClick={renderupdateform}
							>
								Add Survivor
							</Button>
						</HStack>

						<SurvivorsList
							renderupdateform={renderupdateform}
							survivors={survivors.filter((survivor) =>
								survivor.name.toLowerCase().includes(search.toLowerCase())
							)}
							setSurvivors={setSurvivors}
						/>
						<UpdateSurvivorModal
							isOpen={isOpen}
							closeModal={closeModal}
							loading={loading}
							newSurvivor={newSurvivor}
							setNewSurvivor={setNewSurvivor}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
						/>
					</TabPanel>
					<TabPanel>
						<HStack justify={'space-between'}>
							<SearchStaff
								searchStaff={searchStaff}
								setSearchStaff={setSearchStaff}
							/>
							<Button
								fontSize={{
									base: '0.8rem',
								}}
								bg={'purple.300'}
								color={'white'}
								_hover={{ bg: 'purple.500', color: 'white' }}
							>
								<Link to={'/add-staff'}>Add Staff</Link>
							</Button>
						</HStack>

						<StaffList
							staff={staff.filter((staffMember) =>
								staffMember.name.toLowerCase().includes(search.toLowerCase())
							)}
							setStaff={setStaff}
						/>
					</TabPanel>
					<TabPanel>
						<AddBlog newBlog={newBlog} setNewBlog={setNewBlog} />
					</TabPanel>
					<TabPanel>
						<BlogsSearch search={search} setSearch={setSearch} />
						<BlogCards />
					</TabPanel>
					<TabPanel>
						<Programs programs={programs} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Dashboard;

