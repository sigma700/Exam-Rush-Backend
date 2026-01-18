import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PAGE LOADED SUCESSFULLY",
  });
});

app.listen(
  (process.env.PORT,
  () => {
    console.log(`Server listening on :  http://localhost:${process.env.PORT}`);
  }),
);
