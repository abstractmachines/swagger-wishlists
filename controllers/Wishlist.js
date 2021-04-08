'use strict';

var utils = require('../utils/writer.js');
var Wishlist = require('../service/WishlistService');

module.exports.createWishlist = function createWishlist (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Wishlist.createWishlist(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWishlistById = function getWishlistById (req, res, next) {
  var wishlistId = req.swagger.params['wishlistId'].value;
  var userId = req.swagger.params['userId'].value;
  Wishlist.getWishlistById(wishlistId,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWishlists = function getWishlists (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Wishlist.getWishlists(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
