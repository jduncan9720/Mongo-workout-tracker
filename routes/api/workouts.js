const router = require('express').Router();
const { Workout } = require('../../models')


router.get("/exercise", (req, res) => {
    Workout.find({})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.put("/exercise/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body

    Workout.findOneAndUpdate({ _id: id }, {$push:{ exercises: body }})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})


module.exports = router;