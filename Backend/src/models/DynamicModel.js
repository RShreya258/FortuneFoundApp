const mongoose = require('mongoose');

// Define a schema with an empty object and strict: false
const dynamicSchema = new mongoose.Schema({}, { strict: false });

// Create a model named DynamicModel based on the schema
mongoose.model('DynamicModel', dynamicSchema);

