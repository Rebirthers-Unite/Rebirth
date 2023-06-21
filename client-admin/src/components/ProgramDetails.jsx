import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import UpdateProgramModal from './modals/UpdateProgramsModal';
import DeleteProgramModal from '../components/modals/DeleteProgramModal';

const ProgramDetails = () => {
  const [program, setProgram] = useState({});
  const [updateProgramModalOpen, setUpdateProgramModalOpen] = useState(false);
  const [deleteProgramModalOpen, setDeleteProgramModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://rebiirth.onrender.com/programs/' + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Program not found');
        }
      })
      .then((data) => {
        console.log(data);
        setProgram(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const renderUpdateProgramModal = () => {
    setUpdateProgramModalOpen(true);
  };

  const closeUpdateProgramModal = () => {
    setUpdateProgramModalOpen(false);
  };

  const renderDeleteProgramModal = () => {
    setDeleteProgramModalOpen(true);
  };

  const closeDeleteProgramModal = () => {
    setDeleteProgramModalOpen(false);
  };

  const handleDeleteProgram = () => {
    // Perform delete program logic here
    fetch(`https://rebiirth.onrender.com/programs/${id}`, {
      method: 'DELETE',
      // Add necessary headers and authorization token
    })
      .then((response) => {
        if (response.ok) {
          navigate('/programs');
        } else {
          throw new Error('Failed to delete program');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container maxW={'70%'}>
      <Heading>{program.title}</Heading>
      <VStack>
        <Image
          src={program.image_url}
          alt={program.title}
          borderRadius={'10px'}
          mb={'1rem'}
        />
      </VStack>
      <Text mb={'1rem'}>{program.description}</Text>
      <HStack justify={'center'} gap={'1rem'}>
        <Button onClick={renderUpdateProgramModal}>UPDATE PROGRAM</Button>
        <Button bg={'red.500'} onClick={renderDeleteProgramModal}>
          DELETE PROGRAM
        </Button>
        </HStack>
  <UpdateProgramModal
    program={program}
    isOpen={updateProgramModalOpen}
    onClose={closeUpdateProgramModal}
    onUpdate={setProgram}
  />
  <DeleteProgramModal
    isOpen={deleteProgramModalOpen}
    onClose={closeDeleteProgramModal}
    onDelete={handleDeleteProgram}
  />
</Container>
  )
}

export default ProgramDetails
     
