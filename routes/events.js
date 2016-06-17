var express = require('express');
var router = express.Router();

var Event = require('../models/Event');

/**
 * GET all events entries
 */
router.get('/', function (req, res) {
    Event.find({}).then(function (events) {
        res.json(events);
    })
});

/**
 * GET a single event entry by slug
 */
router.get('/:slug', function(req, res){
    Event.findBySlug(req.params.slug).then(function (event) {
        if(event){
            res.json(event);
        } else{
            res.status(404);
            res.send('Not found');
        }
    })
});

/**
 * POST new event entry
 *
 * required params:
 *
 * title: String,
 * slug: String,
 * data: Date
 */
router.post('/', function(req, res){
   Event.create(req.body).then(function(newEvents){
       res.json(newEvents);
   }, function(err){
       res.status(500);
       res.send(err.toString());
   })
});

/**
 * DELETE a single event entry
 */
router.delete('/:id', function(req, res){
    Event.remove({_id: req.params.id}).then(function(event){
        res.json(event);
    })
});

module.exports = router;