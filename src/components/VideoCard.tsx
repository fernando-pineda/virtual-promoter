import * as React from "react";
import { chakra, Box, Image as CkImage, ImageProps } from "@chakra-ui/react";

type VideoCardProps = {
  onClick?(): void;
};

type VideoImageProps = {
  imageRef: string;
} & ImageProps;

type VideoCardSubComponents = {
  Image: React.FC<VideoImageProps>;
  Title: React.FC;
  Description: React.FC;
};

const Image: React.FC<VideoImageProps> = ({ imageRef, ...restProps }) => {
  return (
    <CkImage
      w="100%"
      h="36"
      fit="cover"
      borderTopRadius="inherit"
      src={imageRef}
      {...restProps}
    />
  );
};

const Title: React.FC = ({ children }) => {
  return (
    <chakra.p fontSize="2xl" fontWeight="medium">
      {children}
    </chakra.p>
  );
};

const Description: React.FC = ({ children }) => {
  return <chakra.p p="10px">{children}</chakra.p>;
};

const VideoCard: React.FC<VideoCardProps> & VideoCardSubComponents = ({
  children,
  onClick,
}) => {
  return (
    <Box
      w="96"
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
