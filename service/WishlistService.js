'use strict';


/**
 * Add a new wishlist
 *
 * userId String ID of user
 * body Instrument Instrument object
 * returns Instrument
 **/
exports.createWishlist = function(userId,body) {
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
 * Find wishlist by ID
 * Returns a single wishlist
 *
 * wishlistId String ID of wishlist to return
 * userId String ID of user
 * returns Instrument
 **/
exports.getWishlistById = function(wishlistId,userId) {
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
 * List wishlists
 *
 * userId String 
 * returns List
 **/
exports.getWishlists = function(userId) {
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

