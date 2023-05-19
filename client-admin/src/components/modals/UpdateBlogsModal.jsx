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
import UpdateBlog from '../../forms/UpdateBlog';

const UpdateBlogsModal = ({
	blog,
	setBlog,
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
						<UpdateBlog
							blog={blog}
							setBlog={setBlog}
							closeUpdateBlogModal={closeUpdateBlogModal}
						/>
					</ModalBody>
					<ModalFooter>
						<Button onClick={closeUpdateBlogModal} color="red.400" mr={3}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};
export default UpdateBlogsModal;
