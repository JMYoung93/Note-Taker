const router = require('express').Router();
const storage = require('../db/storage.js')

// GET request for all the notes
// to test this do localhost:3001/notes 
router.get('/notes', (req,res) => {
    storage
    .getNotes()
    .then((notes) =>{
        return res.json(notes);
    }).catch((err) =>res.status(500).json(err))
})

// post 
// delete

module.exports = router;