import express from "express";
import catsRouter from "cats/cats.route";

class Server {
  public app: express.Application;
  public port: 3000;

  constructor() {
    const app: express.Application = express();
    this.app = app;
    this.port = 3000;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(req.rawHeaders[1]);
        console.log("this is a logging middleware");
        next();
      }
    );

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log("this is an error middleware");
        res.send({ error: "404 not found error" });
      }
    );
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
