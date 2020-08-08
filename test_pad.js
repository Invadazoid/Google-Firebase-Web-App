// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
// PASTE YOUR CONFIG HERE

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref('issues/');

// Task 3 ------------------------------------------

// // we supply the key
// rootRef.set ({
//    0: {
//       description: "Logo does not show up on screen 3",
//       resolved: true,
//       severity: 1
//    },
//
//    1: {
//       description: "Screen flashes on save",
//       resolved: false,
//       severity: 1
//    },
// });
//
// // have Firebase auto assign the key
// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: true,
//   severity: 0
// });
//
// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: false,
//   severity: 1
// });

// Task 4 ------------------------------------------

// rootRef.on("value",
//
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//
//   (error) => {
//     console.log("Error: " + error.code);
//   }
//
// );

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");
//
// recordRef.remove()
//    .catch(function(error) {
//      alert("Delete failed: " + error.message)
//    });
