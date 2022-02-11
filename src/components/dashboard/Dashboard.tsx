import * as React from "react";
import {
  SimpleGrid,
  Box,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { VideoCard } from "../VideoCard";

const Dashboard: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box h="100%">
      <SimpleGrid columns={2} spacing={10} p="35">
        <VideoCard onClick={onOpen}>
          <VideoCard.Title>Hola, mundo</VideoCard.Title>
          <VideoCard.Description>Este es un video perrón</VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Title>Hola, mundo</VideoCard.Title>
          <VideoCard.Description>Este es un video perrón</VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Title>Hola, mundo</VideoCard.Title>
          <VideoCard.Description>Este es un video perrón</VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Title>Hola, mundo</VideoCard.Title>
          <VideoCard.Description>Este es un video perrón</VideoCard.Description>
        </VideoCard>
      </SimpleGrid>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody bgColor="black">
            <iframe
              width="1366px"
              height="720px"
              src="https://www.youtube.com/embed/iwvSf6qvOFk?controls=0&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export { Dashboard };
