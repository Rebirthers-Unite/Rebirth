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
import UpdateDetailsForm from '../../forms/AddNewSurvivor';

const UpdateSurvivorModal = ({
	isOpen,
	closeModal,
	newSurvivor,
	setNewSurvivor,
	isUpdating,
	setIsUpdating,
	updateModalOpen,
	setUpdateModalOpen,
	closeUpdateSurvivorModal,
	survivors,
	setSurvivors
}) => {
	return (
		<div>
			<Modal
				isOpen={isUpdating ? updateModalOpen : isOpen}
				onClose={isUpdating ? closeUpdateSurvivorModal : closeModal}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{isUpdating ? 'Update Survivor' : 'Add New Survivor'}
					</ModalHeader>
					<ModalCloseButton
						onClick={isUpdating ? closeUpdateSurvivorModal : closeModal}
					/>
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
							isUpdating={isUpdating}
							setIsUpdating={setIsUpdating}
							// updateModalOpen={updateModalOpen}
							setUpdateModalOpen={setUpdateModalOpen}
							closeUpdateSurvivorModal={closeUpdateSurvivorModal}
							survivors={survivors}
							setSurvivors={setSurvivors}
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							color="red.400"
							mr={3}
							onClick={isUpdating ? closeUpdateSurvivorModal : closeModal}
						>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default UpdateSurvivorModal;
