'use strict';

const NewsCategory = require('../../../src/models/news/newsCategoryModel').NewsCategory;

module.exports = () => (
    [
      new NewsCategory({
          name: "CATEGORIA 1"
      }),
      new NewsCategory({
          name: "CATEGORIA 2"
      }),
      new NewsCategory({
          name: "CATEGORIA 3"
      })
    ]
);
