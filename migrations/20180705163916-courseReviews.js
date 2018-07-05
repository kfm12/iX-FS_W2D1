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
  db.createTable('courseReviews', {
    courseReviewId: {
      type: 'int',
      primaryKey: true
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
  db.dropTable('courseReviews');
};

exports._meta = {
  "version": 1
};
