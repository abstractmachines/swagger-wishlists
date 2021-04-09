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

module.exports.deleteWishlist = function deleteWishlist (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var wishlistId = req.swagger.params['wishlistId'].value;
  var userId = req.swagger.params['userId'].value;
  Wishlist.deleteWishlist(api_key,wishlistId,userId)
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

module.exports.updateWishlist = function updateWishlist (req, res, next) {
  var wishlistId = req.swagger.params['wishlistId'].value;
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Wishlist.updateWishlist(wishlistId,userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWishlistWithForm = function updateWishlistWithForm (req, res, next) {
  var wishlistId = req.swagger.params['wishlistId'].value;
  var userId = req.swagger.params['userId'].value;
  var status = req.swagger.params['status'].value;
  Wishlist.updateWishlistWithForm(wishlistId,userId,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
