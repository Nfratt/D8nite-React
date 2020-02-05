require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT ||3001;
const app =express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
//   API routes 



  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });