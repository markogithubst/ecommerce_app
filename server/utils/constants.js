// database constants
exports.DB_DIALECT = 'postgres';
exports.SCHEMA_NAME = 'ecommerce_app';
exports.DEV_NODE_ENV = 'development';
exports.ID_FIELD = 'id';
exports.ROLE_TABLE_NAME = 'role';
exports.ROLE_MODEL_NAME = 'Role';
exports.USER_TABLE_NAME = 'user';
exports.USER_MODEL_NAME = 'User';
exports.ORDER_TABLE_NAME = 'order';
exports.ORDER_MODEL_NAME = 'Order';
exports.ORDER_DETAILS_TABLE_NAME = 'order_details';
exports.ORDER_DETAILS_MODEL_NAME = 'OrderDetails';
exports.PRODUCT_TABLE_NAME = 'product';
exports.PRODUCT_MODEL_NAME = 'Product';
exports.CATEGORY_TABLE_NAME = 'category';
exports.CATEGORY_MODEL_NAME = 'Category';
exports.FK_ROLE = 'roleId';
exports.FK_USER = 'userId';
exports.FK_ORDER_DETAILS = 'orderDetailsId';
exports.FK_PRODUCT = 'productId';
exports.FK_CATEGORY = 'categoryId';

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

// query parameters
exports.INCLUDE_PARAM = 'include';
exports.PAGE_PARAM = 'page';
exports.SIZE_PARAM = 'size';

// db attributes
exports.USER_NAME = 'name';
exports.ROLE_NAME = 'name';
exports.PRODUCT_NAME = 'name';
exports.CATEGORY_NAME = 'name';
exports.CATEGORY_DESCRIPTION = 'description';
exports.PRODUCT_DESCRIPTION = 'description';
exports.PRODUCT_PRICE = 'price';
exports.PRODUCT_STOCK = 'stock';
exports.ORDER_DATE = 'orderDate';
exports.ORDER_IS_DELIVERED = 'isDelivered';
exports.ORDER_DETAILS_TOTAL_PRICE = 'orderTotalPrice';
exports.ORDER_DETAILS_PRODUCT_QUANTITY = 'productQuantity';
exports.EMAIL = 'email';
exports.CREATED_AT = 'createdAt';
exports.UPDATED_AT = 'updatedAt';
exports.DELETED_AT = 'deletedAt';
exports.FIRST_NAME = 'firstName';
exports.LAST_NAME = 'lastName';
exports.PASSWORD = 'password'

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

// request validation constants
exports.FIRST_NAME_VALIDATION = 'First Name';
exports.LAST_NAME_VALIDATION = 'Last Name';
