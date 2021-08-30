const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const posts = [
  { username: "Raghu", title: "Post1" },
  { username: "Naveen", title: "Post2" },
  { username: "Kumar", title: "Post3" },
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "samplesecret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/login", (req, res) => {
  // authenticate user
  const username = req.body.userName;
  const user = { name: username };
  console.log(username, "dvs");
  const accessToken = jwt.sign(user, "samplesecret");
  res.json({ accessToken: accessToken });
});
app.get("/posts", authenticateToken, (req, res) => {
  //   res.json(posts);
  res.json(posts.filter((post) => post.username === req.user.name));
  //   console.log(req.body);
  //   res.json(posts);
});
app.get("/", (req, res) => {
  res.send("server works");
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});

// connect with demo-react-jwt
//  project frontend part
