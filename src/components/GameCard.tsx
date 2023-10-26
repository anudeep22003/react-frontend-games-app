import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import Game from "../types/Game";
import PlatformIconList from "./PlatformIconList";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card key={game.id} borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} border={"lg"}></Image>
        <CardBody>
          <Heading fontSize="2xl" overflow={"hidden"}>
            {game.name}
          </Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
