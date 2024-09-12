import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    age: chance.age(),
    gender: chance.gender(),
    phone: chance.phone(),
    geohash: chance.geohash(),
    twitter: chance.twitter(),
  };

  response.status(200).json(character);
}
