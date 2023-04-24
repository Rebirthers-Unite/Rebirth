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
import UpdateBlog from '../../forms/UpdateBlog';

const UpdateBlogsModal = ({
	updateBlogsModalOpen,
	closeUpdateBlogModal,
}) => {
	return (
		<div>
			<Modal isOpen={updateBlogsModalOpen} onClose={closeUpdateBlogModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Blog</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						as={'form'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<UpdateBlog />
					</ModalBody>
					<ModalFooter>
						<Button color="red.400" mr={3}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default UpdateBlogsModal;
