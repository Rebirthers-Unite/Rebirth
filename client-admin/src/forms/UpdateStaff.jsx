import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import useAuthStore from '../store/Token';
import useIodStore from '../store/User';

const StaffControlForm = ({ staff, setStaff }) => {
	const token = useAuthStore((state) => state.token);
	const iod = useIodStore((state) => state.iod);
	
	// const [staffId, setStaffId] = useState(0);

	const updateStaff = (e) => {
		e.preventDefault();
		// setStaffId(staff.id['$oid']);
		// console.log(staffId);

		fetch(`https://rebirth-ktaf.onrender.com/staffs/${iod}`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json' },
			body: JSON.stringify(staff),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setStaff('');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setStaff((prevState) => ({ ...prevState, [name]: value }));

		console.log(staff);
		// console.log(survivor);
	};

	return (
		<FormControl as={'form'} onSubmit={updateStaff}>
			<FormLabel>Name</FormLabel>
			<Input
				type="text"
				name="name"
				value={staff.name}
				onChange={handleChange}
			/>

			<FormLabel>Email</FormLabel>
			<Input
				type="text"
				name="email"
				value={staff.email}
				onChange={handleChange}
			/>

			<FormLabel>Phone Number</FormLabel>
			<Input
				type="text"
				name="phoneNumber"
				value={staff.phoneNumber}
				onChange={handleChange}
			/>

			<FormLabel>Position</FormLabel>
			<Input
				type="text"
				name="position"
				value={staff.position}
				onChange={handleChange}
			/>

			<FormLabel>Gender</FormLabel>
			<Input
				type="text"
				name="gender"
				value={staff.gender}
				onChange={handleChange}
			/>

			<Button type="submit" colorScheme="blue" mt={5} onClick={updateStaff}>
				Update Staff
			</Button>
		</FormControl>
	);
};

export default StaffControlForm;
