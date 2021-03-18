import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerData from "./constants";

export default function Content() {
  const getCoffeeMakerCard = (coffeeMaker) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CoffeeCard {...coffeeMaker} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {coffeeMakerData.map((item) => getCoffeeMakerCard(item))}
    </Grid>
  );
}
