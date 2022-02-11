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
    <Box h="100%" display="flex">
      <SimpleGrid columns={2} spacing={5} margin="auto">
        <VideoCard onClick={onOpen}>
          <VideoCard.Image imageRef="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg" />
          <VideoCard.Title>VIDEO #1</VideoCard.Title>
          <VideoCard.Description>
            Este es un video de prueba para el proyecto del profesor Anibal
          </VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Image imageRef="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg" />
          <VideoCard.Title>VIDEO #2</VideoCard.Title>
          <VideoCard.Description>
            Este es un video de prueba para el proyecto del profesor Anibal
          </VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Image imageRef="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg" />
          <VideoCard.Title>VIDEO #3</VideoCard.Title>
          <VideoCard.Description>
            Este es un video de prueba para el proyecto del profesor Anibal
          </VideoCard.Description>
        </VideoCard>

        <VideoCard>
          <VideoCard.Image imageRef="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg" />
          <VideoCard.Title>VIDEO #4</VideoCard.Title>
          <VideoCard.Description>
            Este es un video de prueba para el proyecto del profesor Anibal
          </VideoCard.Description>
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
