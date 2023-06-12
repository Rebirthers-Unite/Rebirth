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
  import { useParams } from 'react-router';
//   import UpdateProgramModal from './modals/UpdateProgramModal';
//   import DeleteProgramModal from './modals/DeleteProgramModal';
  
  const ProgramDetails = ({
    renderDeleteProgramModal,
    renderUpdateProgramModal,
    closeUpdateProgramModal,
    updateProgramModalOpen,
    deleteProgramModalOpen,
    closeDeleteProgramModal,
    newProgram,
    setNewProgram,
  }) => {
    const [program, setProgram] = useState({});
    const { id } = useParams();
  
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
          {/* <HStack justify={'space-between'}>
            <HStack m={'1rem'}>
              <Avatar size={'sm'} name={program.author} />
              <Text as={'h6'} fontWeight={'bold'}>
                {program.author}
              </Text>
            </HStack>
            <Text as={'p'}>{program.date}</Text>
          </HStack> */}
        </VStack>
        <Text mb={'1rem'}>{program.description}</Text>
        {/* <HStack justify={'center'} gap={'1rem'}>
          <Button onClick={renderUpdateProgramModal}>UPDATE PROGRAM</Button>
          <Button bg={'red.500'} onClick={renderDeleteProgramModal}>
            DELETE PROGRAM
          </Button>
        </HStack>
        <UpdateProgramModal
          program={program}
          setProgram={setProgram}
          closeUpdateProgramModal={closeUpdateProgramModal}
          updateProgramModalOpen={updateProgramModalOpen}
        />
        <DeleteProgramModal
          program={program}
          deleteProgramModalOpen={deleteProgramModalOpen}
          closeDeleteProgramModal={closeDeleteProgramModal}
        /> */}
      </Container>
    );
  };
  
  export default ProgramDetails;
  