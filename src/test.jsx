import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Test = () => {
  // order items by name
  const [items, setItems] = useState([
    { id: 1, name: "Item 2", price: 10 },
    { id: 2, name: "Item 3", price: 20 },
    { id: 3, name: "Item 1", price: 30 },
  ]);

  // add action to remove item from list
  const removeItem = () => {};

  // add action to add item to list
  const addItem = () => {};

  // review code and figure out how to enhance it
  // display cards in a 2 x 2 grid
  return (
    <List>
      <ListItem key={items[0].id}>
        <Card key={items[0].id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{items[0].name}</Typography>
            <Typography variant="body1">${items[0].price}</Typography>
          </CardContent>
          <CardActions>{"something goes here"}</CardActions>
        </Card>
      </ListItem>

      <ListItem key={items[1].id}>
        <Card key={items[1].id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{items[1].name}</Typography>
            <Typography variant="body1">${items[1].price}</Typography>
          </CardContent>
          <CardActions>{"something goes here"}</CardActions>
        </Card>
      </ListItem>

      <ListItem key={items[2].id}>
        <Card key={items[2].id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{items[2].name}</Typography>
            <Typography variant="body1">${items[2].price}</Typography>
          </CardContent>
          <CardActions>{"something goes here"}</CardActions>
        </Card>
      </ListItem>
    </List>
  );
};

export default Test;
