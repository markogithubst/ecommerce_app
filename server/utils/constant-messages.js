const RESPONSE_MSG = {
    // common functions
    NOT_FOUND_MODEL: (modelName) => `${modelName} not found!`,
    NOT_FOUND_JOIN_TABLE: (modelName) => `Combination is not found in a join table ${modelName}`,
    NOT_FOUND_ASSOCIATION: (modelName, association) => `Association with alias '${association}' does not exist on '${modelName}'`,
    UPDATE_SUCCESS: (modelName) => `${modelName} successfully updated!`,
    CREATE_SUCCESS: (modelName) => `${modelName} successfully created!`,
    SUCCESSFULLY_CHECKED_MODELS: (modelName) => `Successfully checked: ${modelName}`,
    NAME_ALREADY_EXISTS: (modelName, nameAttribute) => `Name '${nameAttribute}' already exists in '${modelName}'.`,
    ALREADY_EXIST_ENTITY: (modelName, keys) => `Entity with combination of keys: '${keys[0]}' and '${keys[1]}' already exists in '${modelName}'.`,
  
    // Constant messages
    INVALID_INPUT: 'Invalid input',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    PAGE_NOT_FOUND: 'Page not found',
    CONFLICT: 'Conflict in the request',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    INVALID_ID_TYPE: 'Invalid ID type provided!',
    UNIQUE_USER_ERROR: 'User with this email already exits!',
    MISSING_AUTHORIZATION: 'Missing authorization from headers!',
    INVALID_TOKEN: 'Invalid token, you are not allowed to view this page!',
    LOGIN_AUTHORIZATION_ERROR: 'Invalid email or password!',
    LOGIN_SUCCESS: 'Successfully logged in!',
    USER_TYPE_AND_ID_PERMISSION: 'Only users with correct ID and ROLE have access for this action.',
    NO_ROLE_FOUND: 'No role found',
  };
  
  module.exports = RESPONSE_MSG;
  