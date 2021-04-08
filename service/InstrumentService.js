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
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
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
 * instrumentId Long Instrument id to delete
 * no response value expected for this operation
 **/
exports.deleteInstrument = function(api_key,instrumentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a wishlist
 *
 * api_key String  (optional)
 * wishlistId String ID of wishlist to return
 * userId String ID of user
 * no response value expected for this operation
 **/
exports.deleteWishlist = function(api_key,wishlistId,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find instrument by ID
 * Returns a single instrument
 *
 * instrumentId Long ID of instrument to return
 * returns Instrument
 **/
exports.getInstrumentById = function(instrumentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
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
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
}, {
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
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
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
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
 * instrumentId Long ID of instrument that needs to be updated
 * status String Updated status of the inventory (optional)
 * no response value expected for this operation
 **/
exports.updateInstrumentWithForm = function(instrumentId,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing wishlist
 *
 * wishlistId String ID of wishlist to return
 * userId String ID of user
 * body Instrument Instrument object
 * returns Instrument
 **/
exports.updateWishlist = function(wishlistId,userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yearFrom" : 6,
  "finishes" : "nitrocellulose lacquer",
  "model" : "Les Paul",
  "id" : 0,
  "make" : "Gibson",
  "colors" : [ "colors", "colors" ],
  "yearTo" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a wishlist with form data
 *
 * wishlistId String ID of wishlist to return
 * userId String ID of user
 * status String Updated status of the inventory (optional)
 * no response value expected for this operation
 **/
exports.updateWishlistWithForm = function(wishlistId,userId,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
