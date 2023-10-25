import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import Game from "../types/Game";

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
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
