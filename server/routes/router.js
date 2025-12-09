const express = require("express");
const route = express.Router();
const Entry = require("../model/entry");

// easy way to assign static data (e.g., array of strings) to a variable
const competencies = require("../model/competencies.json");

// pass a path (e.g., "/") and a callback function to the get method
//  when the client makes an HTTP GET request to the specified path,
//  the callback function is executed
route.get("/", (req, res) => {
  // the req parameter references the HTTP request object, which has
  //  a number of properties
  console.log("path: ", req.path);

  // the res parameter references the HTTP response object
  res.render("index");
});

route.get("/createEntry", (req, res) => {
  res.render("createEntry", { comps: competencies });
});

route.post("/createEntry", async (req, res) => {
  const entry = new Entry({
    // When the time zone offset is absent, date-only forms are interpreted as
    //  a UTC time and date-time forms are interpreted as a local time. We want
    //  the date object to reflect local time; so, add a time of midnight.
    date: new Date(req.body.date + "T00:00:00"),
    email: "gschmit@naperville203.org",
    competency: req.body.competency,
    content: req.body.content,
  });
  await entry.save();

  res.status(201).end();
});

module.exports = route;
