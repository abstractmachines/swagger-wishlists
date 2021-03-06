'use strict';

var utils = require('../utils/writer.js');
var Instrument = require('../service/InstrumentService');

module.exports.createInstrument = function createInstrument (req, res, next) {
  var body = req.swagger.params['body'].value;
  Instrument.createInstrument(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInstrument = function deleteInstrument (req, res, next) {
  var api_key = req.swagger.params['api_key'].value;
  var instrumentId = req.swagger.params['instrumentId'].value;
  Instrument.deleteInstrument(api_key,instrumentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstrumentById = function getInstrumentById (req, res, next) {
  var instrumentId = req.swagger.params['instrumentId'].value;
  Instrument.getInstrumentById(instrumentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInstruments = function getInstruments (req, res, next) {
  Instrument.getInstruments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInstrument = function updateInstrument (req, res, next) {
  var instrumentId = req.swagger.params['instrumentId'].value;
  var body = req.swagger.params['body'].value;
  Instrument.updateInstrument(instrumentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInstrumentWithForm = function updateInstrumentWithForm (req, res, next) {
  var instrumentId = req.swagger.params['instrumentId'].value;
  var status = req.swagger.params['status'].value;
  Instrument.updateInstrumentWithForm(instrumentId,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
