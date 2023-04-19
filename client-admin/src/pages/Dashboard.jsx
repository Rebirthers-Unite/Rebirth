import {
	Box,
	Container,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import SurvivorsList from '../components/SurvivorsList';
import StaffList from '../components/StaffList';
import Search from '../components/Search';
import UpdateSurvivorModal from '../components/UpdateSurvivorModal';
import AddBlog from '../forms/AddBlog';

const Dashboard = ({ renderUpdateForm, isOpen, closeModal, loading }) => {
	const [search, setSearch] = useState('');
	const [survivors, setSurvivors] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/survivors').then((r) => {
			r.ok ? r.json().then((data) => setSurvivors(data)) : 'Problems!';
		});
	}, []);

	return (
		<Box>
			<Search search={search} setSearch={setSearch} />
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
						<SurvivorsList
							renderUpdateForm={renderUpdateForm}
							survivors={survivors}
							setSurvivors={setSurvivors}
						/>
						<UpdateSurvivorModal
							isOpen={isOpen}
							closeModal={closeModal}
							loading={loading}
						/>
					</TabPanel>
					<TabPanel>
						<StaffList />
					</TabPanel>
					<TabPanel>
						<AddBlog />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Dashboard;
