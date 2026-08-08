console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI 😍❤️");
const express = require("express");
const app = express();
const port = 2720;

app.get("/", async (req, res) => {
  return res.status(200).json({
    message: "Hey there ",
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
