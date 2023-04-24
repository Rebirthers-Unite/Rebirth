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
import AddBlog from '../forms/AddBlog';
import SurvivorsSearch from '../forms/SurvivorsSearch';
import BlogsSearch from '../forms/BlogsSearch';
import BlogCards from '../components/BlogCards';
import StaffControlForm from '../forms/StaffControlForm';
import { Link } from 'react-router-dom';

const Dashboard = ({
	renderUpdateForm,
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
}) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:8000/survivors').then((r) => {
			r.ok ? r.json().then((data) => setSurvivors(data)) : 'Problems!';
		});
	}, [newSurvivor]);

	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Box>
			<Tabs
				mt={'40px'}
				p={'20px'}
				colorScheme="purple"
				h={'100dvh'}
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
					>
						Survivors
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							// borderTopRightRadius: '10px',
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
					>
						Post Blogs
					</Tab>
					<Tab
						_selected={{
							color: 'white',
							bg: 'purple.400',
							borderTopRightRadius: '60px',
						}}
					>
						View Blogs
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<HStack justify={'space-between'}>
							<SurvivorsSearch search={search} setSearch={setSearch} />
							<Button
								bg={'purple.300'}
								color={'white'}
								_hover={{ bg: 'purple.500' }}
								onClick={renderUpdateForm}
							>
								Add Survivor
							</Button>
						</HStack>

						<SurvivorsList
							renderUpdateForm={renderUpdateForm}
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
						/>
					</TabPanel>
					<TabPanel>
						<HStack justify={'space-between'}>
							<SearchStaff search={search} setSearch={setSearch} />
							<Button
								bg={'purple.300'}
								color={'white'}
								_hover={{ bg: 'purple.500' }}
							>
								<Link to={"/add-staff"}>Add Staff</Link>
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
						<AddBlog />
					</TabPanel>
					<TabPanel>
						<BlogsSearch search={search} setSearch={setSearch} />
						<BlogCards />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Dashboard;
