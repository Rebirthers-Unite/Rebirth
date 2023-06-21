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
import React from 'react';
import UpdateProgram from '../../forms/UpdateProgram';

const UpdateProgramModal = ({
	program,
	setProgram,
	updateProgramsModalOpen,
	closeUpdateProgramsModal,
}) => {
	return (
		<div>
			<Modal isOpen={updateProgramsModalOpen} onClose={closeUpdateProgramsModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Program</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<UpdateProgram
  program={program}
  setProgram={setProgram}
  closeUpdateProgramsModal={closeUpdateProgramsModal}
/>

					</ModalBody>
					<ModalFooter>
						<Button onClick={closeUpdateProgramsModal} color="red.400" mr={3}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};
export default UpdateProgramModal;