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
  db.createTable('courseProfessors', {
    courseProfessorId: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 45
    },
    courseId: {
      type: 'int'
    },
    professorId: {
      type: 'int'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('courseProfessors');
};

exports._meta = {
  "version": 1
};
