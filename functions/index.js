const functions = require("firebase-functions");
const https = require("https");

const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// This will only work with Blaze plan because it makes an external request
exports.todos = functions.https.onRequest((request, response) => {
  https.get("https://jsonplaceholder.typicode.com/todos", (res) => {
    let rawData = "";
    res.setEncoding("utf8");
    res.on("data", (d) => {
      rawData += d;
    });

    res.on("end", () => {
      response.send(rawData);
    });
  });
});
