var _ = require('lodash');
var Uuid = require('uuid');

var Defaults = require('../common/defaults');

function Token() {};

Token.create = function(opts) {
  opts = opts || {};

  var tkn = new Token();

  tkn.id = Uuid.v4();
  tkn.version = 1;
  tkn.address = opts.address;
  tkn.deposit = opts.deposit;
  tkn.txid = opts.txid;
  tkn.symbol = opts.symbol;
  tkn.factor = opts.factor;
  tkn.fullName = opts.fullName;
  tkn.hex = opts.hex;
  return tkn;
};

Token.fromObj = function(obj) {
  var tkn = new Token();

  tkn.id = obj.id;
  tkn.version = obj.version;
  tkn.address = obj.address;
  tkn.deposit = obj.deposit;
  tkn.txid = obj.txid;
  tkn.symbol = obj.symbol;
  tkn.factor = obj.factor;
  tkn.fullName = obj.fullName;
  tkn.hex = obj.hex;
  return tkn;
};

Token.prototype.toObject = function() {
  return this;
};

module.exports = Token;
