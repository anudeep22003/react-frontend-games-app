import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
      >
        <GridItem px="5" area="nav">
          <NavBar></NavBar>
        </GridItem>

        {/* this griditem will only show when screen size is above large */}
        <Show above="lg">
          <GridItem px="5" area="aside" bg="yellow.200">
            Aside
          </GridItem>
        </Show>
        <GridItem px="5" area="main" bg="green.200">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
