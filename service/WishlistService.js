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
 * List wishlists
 *
 * userId String 
 * returns List
 **/
exports.getWishlists = function(userId) {
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

