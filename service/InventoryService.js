'use strict';


/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors
 *
 * orderId Integer ID of the order that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteOrder = function(orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Instruments by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findInventoryByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "file" : "les-paul.jpg",
  "color" : "silver sparkle",
  "year" : "2019",
  "model" : "Les Paul",
  "finish" : "polyurethane",
  "id" : "acb123heyhey",
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "belt buckle rash",
    "id" : 0
  }, {
    "name" : "chipped paint",
    "id" : 1
  } ]
}, {
  "file" : "les-paul.jpg",
  "color" : "silver sparkle",
  "year" : "2019",
  "model" : "Les Paul",
  "finish" : "polyurethane",
  "id" : "acb123heyhey",
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "belt buckle rash",
    "id" : 0
  }, {
    "name" : "chipped paint",
    "id" : 1
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Inventory by tags
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findInventoryByTags = function(tags) {
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
 * Returns instrument inventory
 * Returns a map of status codes to quantities
 *
 * returns List
 **/
exports.getInventory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "file" : "les-paul.jpg",
  "color" : "silver sparkle",
  "year" : "2019",
  "model" : "Les Paul",
  "finish" : "polyurethane",
  "id" : "acb123heyhey",
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "belt buckle rash",
    "id" : 0
  }, {
    "name" : "chipped paint",
    "id" : 1
  } ]
}, {
  "file" : "les-paul.jpg",
  "color" : "silver sparkle",
  "year" : "2019",
  "model" : "Les Paul",
  "finish" : "polyurethane",
  "id" : "acb123heyhey",
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "belt buckle rash",
    "id" : 0
  }, {
    "name" : "chipped paint",
    "id" : 1
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns instrument inventory by ID
 * Return inventory item
 *
 * inventoryId String 
 * returns Inventory
 **/
exports.getInventoryById = function(inventoryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "file" : "les-paul.jpg",
  "color" : "silver sparkle",
  "year" : "2019",
  "model" : "Les Paul",
  "finish" : "polyurethane",
  "id" : "acb123heyhey",
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "belt buckle rash",
    "id" : 0
  }, {
    "name" : "chipped paint",
    "id" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10.\\ \\ Other values will generated exceptions
 *
 * orderId Integer ID of inventory order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 1,
  "inventoryId" : 6,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Place an order for an instrument
 *
 * body Order order for instrument in inventory
 * returns Order
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 1,
  "inventoryId" : 6,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads an image
 *
 * inventoryId String ID of inventory to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns Instrument
 **/
exports.uploadFile = function(inventoryId,additionalMetadata,file) {
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

