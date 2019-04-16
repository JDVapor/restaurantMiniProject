var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
// var reservations = [
//   {
//     customerName: "yoda",
//     customerEmail: "test@tessst.com",
//     phoneNumber: "555-555-5555"
//   },
//
// 
// ];
//
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });
//
// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });
//
// app.get("/all", function(req, res) {
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });
//
// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });
//
// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;
//
//   console.log(chosen);
//
//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }
//
//   return res.json(false);
// });
//
// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newcharacter = req.body;
//
//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
//
//   console.log(newcharacter);
//
//   characters.push(newcharacter);
//
//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
