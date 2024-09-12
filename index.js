import express from "express";

const app = express();
const port = 3000;

app.get("/123", (req, res) => {
  res.send("Get off the page, you are about to be hit with the biggest virus in the world");
});


app.listen(port, () => `Example app listening on port ${port}`);
