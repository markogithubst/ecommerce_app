// database constants
exports.DB_DIALECT = 'postgres';
exports.SCHEMA_NAME = 'ecommerce_app';
exports.DEV_NODE_ENV = 'development';
exports.ID_FIELD = 'id';
exports.ROLE_TABLE_NAME = 'role';
exports.ROLE_MODEL_NAME = 'Role';
exports.USER_TABLE_NAME = 'user';
exports.USER_MODEL_NAME = 'User';
exports.FK_USER = 'userId';
exports.FK_ROLE = 'roleId';

// status codes
module.exports.STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
  };


// exclude attributes
exports.ATTRIBUTES_TO_EXCLUDE = ['password', 'createdAt', 'updatedAt', 'deletedAt', 'roleId'];

// db attributes
exports.USER_NAME = 'name';
exports.ROLE_NAME = 'name';
exports.EMAIL = 'email';
exports.CREATED_AT = 'createdAt';
exports.UPDATED_AT = 'updatedAt';
exports.DELETED_AT = 'deletedAt';
exports.FIRST_NAME = 'firstName';
exports.LAST_NAME = 'lastName';

// associations
module.exports.ASSOCIATION = {
    BELONGS_TO: 'BelongsTo',
    HAS_MANY: 'HasMany',
    BELONGS_TO_MANY: 'BelongsToMany'
  };

// order data
exports.ORDER_BY_ID = 'id';
exports.ASCENDING = 'asc';

// pagination
module.exports.PAGINATION = {
    DEFAULT_LIMIT: 50,
    DEFAULT_OFFSET: 0,
    DEFAULT_PAGE: 1
  };
  