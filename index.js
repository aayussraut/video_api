const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./tables/table")();

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
