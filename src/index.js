import "dotenv/config";
import { connectDb } from "./connection/dbConnect.js";
import { app } from "./app.js";

const PORT = process.env.PORT;

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Express server error: ${error}`);
    });

    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Mongo connection failed: ${error}`);
  });
