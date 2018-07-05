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
  db.createTable('review', {
    reviewId: {
      type: 'int',
      primaryKey: true
    },
    courseId: {
      type: 'int'
    },
    universityId: {
      type: 'int'
    },
    studentId: {
      type: 'int'
    },
    professorId: {
      type: 'int'
    },
    mark: {
      type: 'string',
      length: 8
    },
    rating: {
      type: 'string',
      length: 45
    },
    remarks: {
      type: 'string',
      length: 1000
    },
    contact: {
      type: 'boolean'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable(review);
};

exports._meta = {
  "version": 1
};
