const express = require("express");
const cors = require("cors");

const data = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
  },
  {
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
  },
  {
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
  },
  {
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
  }
]

const app = express();
app.use(cors());

function getID(array, id) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == id){
      return array[i];
    }
  }
  return false;
}

app.get("/", function(request, response){
  response.json(data);
});
app.get("/:id", function(request, response){
  if (getID(data,request.params.id)){
  response.json(getID(data,request.params.id));
  response.status = 200;
  }
  else {
    response.status = 404;
    response.json({
        error: {
            message: "No record found!"
        }
      });
  }
});

app.listen(3000, console.log("I'm giving it all I've got captain!"));
