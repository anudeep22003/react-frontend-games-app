import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../types/Game";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

type Props = {
  platforms: Platform[];
};

const PlatformIconList = ({ platforms }: Props) => {
  const platformIconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack margin={2} width={"60%"}>
      {platforms.map((platform) => (
        <Icon color="gray.500" as={platformIconsMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
