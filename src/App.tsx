import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genre from "./types/Genre";
import PlatformSelector from "./components/PlatformSelector";
import Platform from "./types/Platforms";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
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
          <NavBar></NavBar>
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
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            setSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
