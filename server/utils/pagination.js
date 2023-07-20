const { PAGINATION } = require('./constants');

module.exports.getPagination = (page, size) => {
  const limit = size ? Number(size) : PAGINATION.DEFAULT_LIMIT;
  const offset = page ? (page - 1) * limit : PAGINATION.DEFAULT_OFFSET;

  return { limit, offset };
};

module.exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: modelRows } = data;
  const currentPage = page ? Number(page) : PAGINATION.DEFAULT_PAGE;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, modelRows, totalPages, currentPage };
};
