import "./config/envs.config.js";

import app from "./app.js";

app.listen(app.get("port"), () => {
  console.log("Server listen on port", app.get("port"));
});
