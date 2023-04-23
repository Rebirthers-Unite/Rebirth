import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div>
			<List
				display={'flex'}
				flexDirection={{
					md: 'column',
				}}
				alignItems={'baseline'}
				color={'white'}
				fontSize={'1.2em'}
				spacing={4}
				gap={{
					sm: 10,
					md: 0,
				}}
			>
				<ListItem>
					<NavLink to={'/dashboard'}>
						<ListIcon as={CalendarIcon} color={'white'} />
						Dashboard
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to={'/create'}>
						<ListIcon as={EditIcon} color={'whatsapp.200'} />
						New Task
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to={'/profile'}>
						<ListIcon as={AtSignIcon} color={'wheat'} />
						Profile
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to={'/login'}>
						Login
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to={'/signup'}>
						Signup
					</NavLink>
				</ListItem>
			</List>
		</div>
	);
};

export default Sidebar;
