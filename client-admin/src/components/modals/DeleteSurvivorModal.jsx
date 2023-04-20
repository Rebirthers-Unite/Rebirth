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


const DeleteSurvivorModal = ({
	deleteModalOpen,
	closeModal, deleteSurvivor
}) => {
	return (
		<div>
			<Modal isOpen={deleteModalOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>DELETE SURVIVOR</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						ARE YOU SURE?
					</ModalBody>
					<ModalFooter>
						<Button bg={"red.400"} mr={3} onClick={deleteSurvivor}>
							DELETE
						</Button>
						<Button color="red.400" mr={3} onClick={closeModal}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default DeleteSurvivorModal;
