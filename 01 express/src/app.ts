import express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ hello: "world", name: "tjduxxx", friends: ["aa", "bb", "cc"] });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
