"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  deleteUser,
  getUsers,
  getUserById,
  handleFriends,
  updateUser,
} = require("./handlers");

const users = require("./data/users.json");

// add the users array to the res object so that subsequent
// functions can access it via res.locals.users.
const passUsersAlong = (req, res, next) => {
  res.locals.users = users; 
  next(); 
};

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/users", passUsersAlong, getUsers);
app.put("/api/users", passUsersAlong, updateUser);
app.get("/api/users/:id", passUsersAlong, getUserById);
app.delete("/api/users/:id", passUsersAlong, deleteUser);
app.patch("/api/friends", passUsersAlong, handleFriends);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(8000, () => console.log(`Listening on port 8000`));
