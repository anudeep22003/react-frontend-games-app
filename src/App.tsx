import { Grid, GridItem, Show } from "@chakra-ui/react";
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
        <GridItem px="5" area="nav" bg="pink.200">
          Nav
        </GridItem>
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
