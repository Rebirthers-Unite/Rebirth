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
	setNames,
	setContact,
	setDob,
	setReforg,
	setReforgContact,
	setPrograms,
	setDateOfEntry,
	setDateOfExit,
	setGuardian,
	setGuardianContacts,
	survivors,
	setSurvivors,
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
							setSurvivors={setSurvivors}
							survivors={survivors}
							newSurvivor={newSurvivor}
							setNewSurvivor={setNewSurvivor}
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
