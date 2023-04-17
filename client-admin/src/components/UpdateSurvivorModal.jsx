import {
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import UpdateDetailsForm from './UpdateDetailsForm';

const UpdateSurvivorModal = ({ isOpen, closeModal }) => {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>UPDATE DETAILS</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<UpdateDetailsForm />
					</ModalBody>
					<ModalFooter>
						<Button color="red.400" mr={3} onClick={closeModal}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default UpdateSurvivorModal;
