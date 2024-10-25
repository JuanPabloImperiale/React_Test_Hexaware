import React, { useState, useLayoutEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const arrayTest = [
  { id: 1, name: "Item 2", price: 10 },
  { id: 2, name: "Item 3", price: 20 },
  { id: 3, name: "Item 1", price: 30 },
];

const orderArray = (array) => {
  array.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return array;
};

const Test = () => {
  // order items by name
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    let orderArray2 = orderArray(arrayTest);
    setItems(orderArray2);
  }, []);

  // add action to remove item from list
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  };

  // add action to add item to list
  const addItem = () => {
    let newid = 0;
    for (const item of items) {
      let idCompare = newid > item.id ? newid : item.id + 1;
      newid = idCompare;
    }
    console.log("new id", newid);
    let newItem = { id: newid, name: "Item " + newid, price: newid * 10 };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    items && (
      <div>
        <Button onClick={addItem}>Add Item</Button>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={6} key={item.id}>
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">${item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => removeItem(item.id)}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};

export default Test;
