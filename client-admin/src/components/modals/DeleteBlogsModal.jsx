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

const DeleteBlogsModal = ({
	deleteModalOpen,
	closeDeleteBlogModal,
}) => {
	return (
		<div>
			<Modal isOpen={deleteModalOpen} onClose={closeDeleteBlogModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>DELETE SURVIVOR</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						textAlign={'center'}
					>
						Delete {"PUT BLOG NAME HERE"} from the database?
						<br />
						This action is irreversible
					</ModalBody>
					<ModalFooter>
						<Button bg={'red.400'} mr={3} >
							DELETE	{/* "THIS BUTTON IS THE ONE THAT ACTUALLY MAKES THE FETCH REQUEST" PUT THE FETCH FUNCTION HERE ONCLICK*/}
						</Button>
						<Button color="red.400" mr={3} onClick={closeDeleteBlogModal}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default DeleteBlogsModal;
