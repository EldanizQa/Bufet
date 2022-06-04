const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const comments = [
  {
    id: "1",
    body: "First comment",
    username: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
  },
  {
    id: "2",
    body: "Second comment",
    username: "John",
    userId: "2",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
  },
  {
    id: "3",
    body: "First comment first child",
    username: "John",
    userId: "2",
    parentId: "1",
    createdAt: "2021-08-16T23:00:33.010+02:00",
  },
  {
    id: "4",
    body: "Second comment second child",
    username: "John",
    userId: "2",
    parentId: "2",
    createdAt: "2021-08-16T23:00:33.010+02:00",
  },
];

app.get("/comments", function (req, res) {
  res.json(comments);
});

app.listen(3050, () => console.log(`App listening at port 3050`));
