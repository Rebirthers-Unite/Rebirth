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

const Dashboard = ({
	renderUpdateForm,
	isOpen,
	closeModal,
	loading,
	renderNewSurvivorForm,
}) => {
	const [search, setSearch] = useState('');
	const [newSurvivor, setNewSurvivor] = useState('');

	const [survivors, setSurvivors] = useState([]);

	const [names, setNames] = useState('');
	const [contact, setContact] = useState('');
	const [dob, setDob] = useState('');
	const [reforg, setReforg] = useState('');
	const [reforgContact, setReforgContact] = useState('');
	const [programs, setPrograms] = useState('');
	const [dateofEntry, setDateOfEntry] = useState('');
	const [dateofExit, setDateOfExit] = useState('');
	const [guardian, setGuardian] = useState('');
	const [guardianContacts, setGuardianContacts] = useState('');

	/*
	
	setNames
	setContact
	setDob
	setReforg
	setReforgContact
	setPrograms
	setDateOfEntry
	setDateOfExit
	setGuardian
	setGuardianContacts
	
	*/

	useEffect(() => {
		fetch('http://localhost:8000/survivors').then((r) => {
			r.ok ? r.json().then((data) => setSurvivors(data)) : 'Problems!';
		});
	}, []);

	return (
		<Box>
			<Tabs
				mt={'40px'}
				p={'20px'}
				colorScheme="purple"
				h={'100dvh'}
				maxW={'100vw'}
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
							setNames={setNames}
							setContact={setContact}
							setDob={setDob}
							setReforg={setReforg}
							setReforgContact={setReforgContact}
							setPrograms={setPrograms}
							setDateOfEntry={setDateOfEntry}
							setDateOfExit={setDateOfExit}
							setGuardian={setGuardian}
							setGuardianContacts={setGuardianContacts}
							isOpen={isOpen}
							closeModal={closeModal}
							loading={loading}
							survivors={survivors}
							setSurvivors={setSurvivors}
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
								Add Staff
							</Button>
						</HStack>

						<StaffList />
					</TabPanel>
					<TabPanel>
						<AddBlog />
					</TabPanel>
					<TabPanel>
						<BlogsSearch search={search} setSearch={setSearch} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Dashboard;
