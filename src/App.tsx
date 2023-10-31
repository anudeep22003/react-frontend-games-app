import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// import "./App.css";
// import Card from "./components/Card.tsx";

function App() {
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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem px="5" area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
