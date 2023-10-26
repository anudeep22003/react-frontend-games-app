import { Badge } from "@chakra-ui/react";

type Props = {
  metacritic: number;
};

const RatingBadge = ({ metacritic }: Props) => {
  return (
    <Badge
      colorScheme={metacritic > 85 ? "green" : "yellow"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {metacritic}
    </Badge>
  );
};

export default RatingBadge;
