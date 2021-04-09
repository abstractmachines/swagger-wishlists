'use strict';


/**
 * Add a new instrument
 *
 * body Instrument Instrument object
 * returns Instrument
 **/
exports.createInstrument = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yearFrom" : "1957",
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : "jklj3210fjkl",
  "make" : "Gibson",
  "colors" : [ "sunburst", "black", "white", "gold", "tv yellow", "silver sparkle", "red" ],
  "yearTo" : "2021"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes an instrument
 *
 * api_key String  (optional)
 * instrumentId String Instrument id to delete
 * no response value expected for this operation
 **/
exports.deleteInstrument = function(api_key,instrumentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find instrument by ID
 * Returns a single instrument
 *
 * instrumentId String ID of instrument to return
 * returns Instrument
 **/
exports.getInstrumentById = function(instrumentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yearFrom" : "1957",
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : "jklj3210fjkl",
  "make" : "Gibson",
  "colors" : [ "sunburst", "black", "white", "gold", "tv yellow", "silver sparkle", "red" ],
  "yearTo" : "2021"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List possible instruments
 *
 * returns List
 **/
exports.getInstruments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "yearFrom" : "1957",
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : "jklj3210fjkl",
  "make" : "Gibson",
  "colors" : [ "sunburst", "black", "white", "gold", "tv yellow", "silver sparkle", "red" ],
  "yearTo" : "2021"
}, {
  "yearFrom" : "1957",
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : "jklj3210fjkl",
  "make" : "Gibson",
  "colors" : [ "sunburst", "black", "white", "gold", "tv yellow", "silver sparkle", "red" ],
  "yearTo" : "2021"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing instrument
 *
 * instrumentId String 
 * body Instrument Instrument object
 * returns Instrument
 **/
exports.updateInstrument = function(instrumentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yearFrom" : "1957",
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : "jklj3210fjkl",
  "make" : "Gibson",
  "colors" : [ "sunburst", "black", "white", "gold", "tv yellow", "silver sparkle", "red" ],
  "yearTo" : "2021"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an instrument with form data
 *
 * instrumentId String ID of instrument that needs to be updated
 * status String Updated status of the inventory (optional)
 * no response value expected for this operation
 **/
exports.updateInstrumentWithForm = function(instrumentId,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

