'use strict';


/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors
 *
 * orderId Long ID of the order that needs to be deleted
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
  "file" : "file",
  "color" : "color",
  "year" : 6,
  "model" : "Les Paul",
  "finish" : "finish",
  "id" : 0,
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ]
}, {
  "file" : "file",
  "color" : "color",
  "year" : 6,
  "model" : "Les Paul",
  "finish" : "finish",
  "id" : 0,
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
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
 * Returns instrument inventory
 * Returns a map of status codes to quantities
 *
 * returns List
 **/
exports.getInventory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "file" : "file",
  "color" : "color",
  "year" : 6,
  "model" : "Les Paul",
  "finish" : "finish",
  "id" : 0,
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ]
}, {
  "file" : "file",
  "color" : "color",
  "year" : 6,
  "model" : "Les Paul",
  "finish" : "finish",
  "id" : 0,
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
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
  "file" : "file",
  "color" : "color",
  "year" : 6,
  "model" : "Les Paul",
  "finish" : "finish",
  "id" : 0,
  "make" : "Gibson",
  "status" : "available",
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
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
 * orderId Long ID of inventory order that needs to be fetched
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
 * inventoryId Long ID of inventory to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns Instrument
 **/
exports.uploadFile = function(inventoryId,additionalMetadata,file) {
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

