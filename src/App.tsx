import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genre from "./types/Genre";
import PlatformSelector from "./components/PlatformSelector";
import Platform from "./types/Platforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortValue: string | null;
  searchString: string | null;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortValue: null,
    searchString: null,
  });

  return (
    <>
      {/* <Card></Card> */}
      <Grid
        // templateAreas={`"nav nav"
        //                 "aside main"`}
        templateAreas={{
          sm: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem px="5" area="nav">
          <NavBar
            setSearchString={(searchString: string) =>
              setGameQuery({ ...gameQuery, searchString })
            }
          />
        </GridItem>

        {/* this griditem will only show when screen size is above large */}
        <Show above="lg">
          <GridItem px="5" area="aside">
            <GenreList
              setSelectedGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery.genre}
              // setSelectedGenre={setSelectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem px="5" area="main">
          <VStack margin={2} align={"flex-start"}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                setSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortValue={gameQuery.sortValue}
                setSelectedSort={(sortValue) =>
                  setGameQuery({ ...gameQuery, sortValue })
                }
              />
            </HStack>
          </VStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
