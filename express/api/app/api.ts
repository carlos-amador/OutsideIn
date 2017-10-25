import * as express from "express";
import { Express, Application, Request, Response } from 'express';


export function bootstrap(application: express.Application) {

  // Handles any GET request to "/" path.
  application.get("/",(request:express.Request, response:express.Response) => {
    response.send({ message: "Hello World! "});
  });

  // Starts to listen for request on 8080 TCP port.
  application.listen(8502, () => {
    console.log("Listening for request on 8502 TCP port.");
  });

}

let application:express.Application = express();
bootstrap(application);