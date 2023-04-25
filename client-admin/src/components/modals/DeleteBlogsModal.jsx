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
import useAuthStore from '../../store/Token';


const DeleteBlogsModal = ({ deleteModalOpen, closeDeleteBlogModal, blog }) => {
	const token = useAuthStore((state) => state.token);

	const deleteBlog = () => {
		fetch(`https://rebirth-ktaf.onrender.com/blogs/${blog.id["$oid"]}`, {
			method: 'DELETE',
			headers: { 
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			 },
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
