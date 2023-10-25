import { Badge, Box, Image, Icon } from "@chakra-ui/react";

function AirbnbCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      border="2px"
      borderColor="gray.200"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box border="2px" borderColor="gray.200" p="6">
        <Box
          border="2px"
          borderColor="gray.200"
          display="flex"
          alignItems="baseline"
        >
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            border="2px"
            borderColor="gray.200"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          border="2px"
          borderColor="gray.200"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box border="2px" borderColor="gray.200">
          {property.formattedPrice}
          <Box
            border="2px"
            borderColor="gray.200"
            as="span"
            color="gray.600"
            fontSize="sm"
          ></Box>
        </Box>

        <Box
          border="2px"
          borderColor="gray.200"
          display="flex"
          mt="2"
          alignItems="center"
        >
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box
            border="2px"
            borderColor="gray.200"
            as="span"
            ml="2"
            color="gray.600"
            fontSize="sm"
          >
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AirbnbCard;
