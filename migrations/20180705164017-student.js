'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  db.createTable('student', {
    studentId: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 45
    },
    universityId: {
      type: 'int'
    },
    email: {
      type: 'string',
      length: 45
    },
    password: {
      type: 'string',
      length: 45
    },
    paid: {
      type: 'boolean'
    },
    date: {
      type: 'date'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('student');
};

exports._meta = {
  "version": 1
};
