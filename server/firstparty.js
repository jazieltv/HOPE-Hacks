// ///============================================///

// const request = require("request");
// var city = "london";
// ///the portion above needs to link to the firstparty API
// //so that it can call that information so that the API knows what to use
// request.get(
//   {
//     url: "https://api.api-ninjas.com/v1/airquality?city=" + city,
//     headers: {
//       "X-RapidAPI-Key": "b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d",
//       "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
//     },
//   },
//   function (error, response, body) {
//     if (error) return console.error("Request failed:", error);
//     else if (response.statusCode != 200)
//       return console.error(
//         "Error:",
//         response.statusCode,
//         body.toString("utf8")
//       );
//     else console.log(body);
//   }
// );

"use strict";

import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3000;

//routes here

//here we are caling our api key with a get request
app.get("/", async (req, res) => {
  let response = await axios.get(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality",
    {
      headers: {
        "X-RapidAPI-Key": "b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d",
        "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  res.send(response.data);
});

app.get("/:query", async (req, res) => {
  let response = await axios.get(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality",
    {
      headers: {
        "X-RapidAPI-Key": "b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d",
        "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
      },
    }
  );
  res.send(response.data);
});

//here is where we will be using our port

app.listen(port, (err) => {
  if (err) return err;
  console.log(`Listening on port ${port}`);
});
