const express = require("express");

const ob = express();

ob.use(express.json());
const ob1 = [{}];

ob.get("/users/", (req, res) => {
  res.json(ob1);
});

ob.post("/users/", (req, res) => {
  const ob2 = {
    name: req.body.name,
    password: req.body.password,
  };
  ob1.push(ob2);
  res.status(201).send();
});

ob.listen(3000, (req, res) => {
  console.log("server  started");
});
