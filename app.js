const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 3000));

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
})
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
})
app.listen(3000, function() {
  console.log('Node app v1 is running on port', app.get('port'));
});
