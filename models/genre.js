var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = Schema({
    name: {
        type: String,
        required: true,
        max: 100,
        min: 3
    }, //reference to the associated book

});

// Virtual for bookinstance's URL
genreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('genre', genreSchema);
