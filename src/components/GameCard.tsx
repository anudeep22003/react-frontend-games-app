import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import Game from "../types/Game";
import PlatformIconList from "./PlatformIconList";
import RatingBadge from "./RatingBadge";
import placeholder from "../assets/Placeholder/no-image-placeholder.webp";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card key={game.id} overflow={"hidden"}>
        <Image
          src={game.background_image ? game.background_image : placeholder}
          border={"lg"}
        />
        <CardBody>
          <Heading fontSize="2xl" overflow={"hidden"}>
            {game.name}
          </Heading>
          <HStack justify={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <RatingBadge metacritic={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
