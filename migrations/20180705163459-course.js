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
  db.createTable('course', {
    courseId: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 45
    },
    universityId: {
      type: 'int'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('course');
};

exports._meta = {
  "version": 1
};
