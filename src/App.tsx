import { Grid, GridItem } from "@chakra-ui/react";
// import "./App.css";
// import Card from "./components/Card.tsx";

function App() {
  return (
    <>
      {/* <Card></Card> */}
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        templateRows={"50px 1fr 30px"}
        templateColumns={"150px 1fr"}
        h="400px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
