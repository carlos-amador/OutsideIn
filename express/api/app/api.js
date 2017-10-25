"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
function bootstrap(application) {
    application.get("/", (request, response) => {
        response.send({ message: "Hello World! " });
    });
    application.listen(8502, () => {
        console.log("Listening for request on 8502 TCP port.");
    });
}
exports.bootstrap = bootstrap;
let application = express();
bootstrap(application);
