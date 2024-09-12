import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    const name = chance.name();
    const age = chance.age();
    const profession = chance.profession();
    const responseText = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

    response.statusCode = 200;
    response.end(responseText);
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
