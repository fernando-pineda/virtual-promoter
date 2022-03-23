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
  const [currentVideo, setCurrentVideo] = React.useState<string>();

  const handleOpenVideo = (videoLink: string) => {
    setCurrentVideo(videoLink);
    onOpen();
  }

  return (
    <Box h="100%" display="flex" backgroundImage="https://static.wixstatic.com/media/127857_888a4a11869f4d649cb12921f3fa8bfe~mv2.jpg/v1/fill/w_1903,h_632,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/127857_888a4a11869f4d649cb12921f3fa8bfe~mv2.jpg" backgroundRepeat="no-repeat" backgroundSize="cover">
      <SimpleGrid columns={2} spacing={5} margin="auto">
        <VideoCard onClick={() => handleOpenVideo("https://www.youtube.com/embed/BbRhdhSXYNY")}>
          <VideoCard.Image imageRef="https://inbound-marketing.xtresmedia.com/hs-fs/hubfs/que-son-las-redes-sociales-como-funcionan.jpg?width=708&height=283&name=que-son-las-redes-sociales-como-funcionan.jpg" />
          <VideoCard.Title>CARRERA #1</VideoCard.Title>
          <VideoCard.Description>
            Presentación de la carrera de T.S.U en Desarrollo de Redes Multiplaforma
          </VideoCard.Description>
        </VideoCard>

        <VideoCard onClick={() => handleOpenVideo("https://www.youtube.com/embed/c2HklxpoxFw")}>
          <VideoCard.Image imageRef="https://www.tithink.com/wp-content/uploads/2018/05/practicas-desarollo-software.jpeg" />
          <VideoCard.Title>CARRERA #2</VideoCard.Title>
          <VideoCard.Description>
            Presentación de la carrera de T.S.U en Desarrollo de Software Multiplataforma
          </VideoCard.Description>
        </VideoCard>

        <VideoCard onClick={() => handleOpenVideo("https://www.youtube.com/embed/d4Lp_IP0GU4")}>
          <VideoCard.Image imageRef="https://unity3d.com/profiles/unity3d/themes/unity/images/unity/beta/alpha-beta/2020.1b-improvements.jpg" />
          <VideoCard.Title>CARRERA #3</VideoCard.Title>
          <VideoCard.Description>
            Presentación de la carrera de T.S.U en Entornos Virtuales y Negocios Digitales
          </VideoCard.Description>
        </VideoCard>

        <VideoCard onClick={() => handleOpenVideo("https://www.youtube.com/embed/6_kT0lKr7mc")}>
          <VideoCard.Image imageRef="https://pinion.education/wp-content/uploads/2020/10/060_Automatizacionpandemia_01.jpg" />
          <VideoCard.Title>CARRERA #4</VideoCard.Title>
          <VideoCard.Description>
            Presentación de la carrera de T.S.U en Área de Automatización
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
              src={currentVideo}
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
