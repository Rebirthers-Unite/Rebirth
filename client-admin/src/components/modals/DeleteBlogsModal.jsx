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

const DeleteBlogsModal = ({ deleteModalOpen, closeDeleteBlogModal, blog }) => {
	const deleteBlog = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: 'DELETE',
		});
	};

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
						Delete blog from the database?
						<br />
						This action is irreversible
					</ModalBody>
					<ModalFooter>
						<Button bg={'red.400'} mr={3} onClick={deleteBlog}>
							DELETE
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
