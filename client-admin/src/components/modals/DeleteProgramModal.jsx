import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import useAuthStore from '../../store/Token';
import React from 'react';
import { useNavigate } from 'react-router';

const DeleteProgramModal = ({ deleteModalOpen, closeDeleteProgramsModal, program }) => {
	const navigate = useNavigate();

	const token = useAuthStore((state) => state.token);

	const deleteProgram = () => {
		fetch(`https://rebiirth.onrender.com/programs/${program.id['$oid']}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});

		navigate('/programs');
	};

	return (
		<div>
			<Modal isOpen={deleteModalOpen} onClose={closeDeleteProgramsModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>DELETE PROGRAM</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						textAlign={'center'}
					>
						Delete program from the database?
						<br />
						This action is irreversible
					</ModalBody>
					<ModalFooter>
						<Button bg={'red.400'} mr={3} onClick={deleteProgram}>
							DELETE
						</Button>
						<Button color="red.400" mr={3} onClick={closeDeleteProgramsModal}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default DeleteProgramModal;