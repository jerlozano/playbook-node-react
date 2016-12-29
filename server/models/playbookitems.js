var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playbookitemsSchema = new Schema({
    name: {type: String, required: true},
})

module.exports = mongoose.model('Playbookitems', playbookitemsSchema);
