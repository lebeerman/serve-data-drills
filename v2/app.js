const express = require("express");
const cors = require("cors");

const data = [
  {
    id: 1,
    fullName: "Kyle Coberly",
    title: "Faculty Director",
    numberOfDogs: 0
  },
  {
    id: 2,
    fullName: "Danny Fritz",
    title: "Lead Instructor",
    numberOfDogs: 0
  },
  {
    id: 3,
    fullName: "CJ Reynolds",
    title: "Lead Instructor",
    numberOfDogs: 0
  },
  {
    id: 4,
    fullName: "Brooks Patton",
    title: "Lead Instructor",
    numberOfDogs: 0
  },
  {
    id: 5,
    fullName: "Roberto Ortega",
    title: "Lead Instructor",
    numberOfDogs: 1
  },
  {
    id: 6,
    fullName: "Chad Drummond",
    title: "Instructor",
    numberOfDogs: 0
  },
  {
    id: 7,
    fullName: "Kim Schlesinger",
    title: "Instructor",
    numberOfDogs: 0
  },
  {
    id: 8,
    fullName: "Peter Ostiguy",
    title: "Associate Instructor",
    numberOfDogs: 1
  },
  {
    id: 9,
    fullName: "Cass Torske",
    title: "Resident",
    numberOfDogs: 1
  },
  {
    id: 10,
    fullName: "Matt Winzer",
    title: "Resident",
    numberOfDogs: 2
  },
  {
    id: 11,
    fullName: "Aaron Goodman",
    title: "Resident",
    numberOfDogs: 0
  },
  {
    id: 12,
    fullName: "Michelle Bergquist",
    title: "Resident",
    numberOfDogs: 1
  }
];
var app = express();
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


app.listen(3000, console.log("RUNNING WITH SCISSORS!!!"));
