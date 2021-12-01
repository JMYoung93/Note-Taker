// one route ('*')
// another route ('/notes')
const router = require('express').Router();
const path = require('path');

// "/notes" responds with the notes.html file
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  // All other routes respond with the index.html file
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  module.exports = router;