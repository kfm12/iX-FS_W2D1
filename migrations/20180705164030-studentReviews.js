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
  db.createTable('studentReviews', {
    studentReviewId: {
      type: 'int',
      primaryKey: true
    },
    studentId: {
      type: 'int'
    },
    courseId: {
      type: 'int'
    },
    reviewId: {
      type: 'int'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('studentReviews');
};

exports._meta = {
  "version": 1
};
