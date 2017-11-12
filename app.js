const express = require("express");
const cors = require("cors");

const data = [{
      id: 1,
      cohortName: "17-01-WD-DP",
      cohortCode: "g100",
      numberOfStudents: "28"
    },{
      id: 2,
      cohortName: "17-01-DS-GT",
      cohortCode: "g105",
      numberOfStudents: "24"
    },{
      id: 3,
      cohortName: "17-01-WD-PX",
      cohortCode: "g109",
      numberOfStudents: "30"
    },{
      id: 4,
      cohortName: "17-01-WD-BD",
      cohortCode: "g110",
      numberOfStudents: "29"
    }
];

const app = express();
app.use(cors());

function getID(array, id) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == id){
      return array[i];
    }
  }
}

app.get("/data", function(request, response){
  response.json(data);
})
app.get("/data/:id", function(request, response){
  if (getID(request.params.id) == true){
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
})




app.listen(3000, console.log("RUNNING WITH SCISSORS!!!"));
