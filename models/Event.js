"use strict";

var mongoose = require('../lib/db');
var _ = require('lodash');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

eventSchema.statics.findBySlug = function (slug, cb) {
    return Event.findOne({slug: slug}, cb);
};

var Event = mongoose.model('Event', eventSchema);

/**
 * Middleware for generating unique slugs upon validation.
 */
eventSchema.pre('validate', function (next) {
    let self = this;
    let slug = _.kebabCase(this.title);
    Event.find({slug: new RegExp('^'+slug)}).then(function (events) {
        console.log(events.length);
        if (events.length) {
            slug += '-'+(events.length);
        }
        self.slug = slug;
        next();
    });
});

module.exports = Event;