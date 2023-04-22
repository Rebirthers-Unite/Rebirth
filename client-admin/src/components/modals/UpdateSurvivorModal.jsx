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
import UpdateDetailsForm from '../../forms/UpdateDetailsForm';

const UpdateSurvivorModal = ({
	isOpen,
	closeModal,

	newSurvivor,
	setNewSurvivor,
}) => {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New Survivor</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<UpdateDetailsForm
							newSurvivor={newSurvivor}
							setNewSurvivor={setNewSurvivor}
							closeModal={closeModal}
						/>
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
