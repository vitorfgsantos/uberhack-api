'use strict';

const NewsFilter = require('../../../src/models/news/newsFilterModel').NewsFilter;

module.exports = () => (
    [
      new NewsFilter({
          name: "TODAS AS CATEGORIAS"
      }),
      new NewsFilter({
          name: "RECOMENDADAS"
      }),
      new NewsFilter({
          name: "FAVORITAS"
      })
    ]
);
