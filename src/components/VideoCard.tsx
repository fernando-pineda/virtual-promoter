import * as React from "react";
import { chakra, Box } from "@chakra-ui/react";

type VideoCardProps = {
  onClick?(): void;
};

type VideoCardSubComponents = {
  Image: React.FC;
  Title: React.FC;
  Description: React.FC;
};

const Image: React.FC = ({ children }) => {
  return <chakra.p>{children}</chakra.p>;
};

const Title: React.FC = ({ children }) => {
  return <chakra.p>{children}</chakra.p>;
};

const Description: React.FC = ({ children }) => {
  return <chakra.p>{children}</chakra.p>;
};

const VideoCard: React.FC<VideoCardProps> & VideoCardSubComponents = ({
  children,
  onClick,
}) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      borderColor="#D7D7D7"
      borderRadius="md"
      borderWidth="1px"
      _hover={{ transform: "scale(1.1)", transition: "all 0.2s ease-out" }}
      p="0"
      m="0"
    >
      {children}
    </Box>
  );
};

VideoCard.Image = Image;
VideoCard.Description = Description;
VideoCard.Title = Title;

export { VideoCard };
