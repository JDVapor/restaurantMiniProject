var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var reservations = [{
  customerName: "yoda",
  phoneNumber: "555-555-5555",
  customerEmail: "test@test.com",
  userName: "forexe"
}];

var waitList = [{
  customerName: "Darth Vader",
  phoneNumber: "555-555-5554",
  customerEmail: "testme@test.com",
  userName: "forexenew"
}];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.send(reservations);
});

app.get("/api/waitlist", function(req, res) {
  res.send(waitList);
});

app.post("/api/reserve", function(req, res) {

  var newReservation = req.body;

  newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
  //
  console.log(newReservation);
  //
  reservations.push(newReservation);

  res.json(reservations);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
