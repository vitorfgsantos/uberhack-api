'use strict';

const _ = require('lodash');
const News = require('../../src/models/newsModel').News;

module.exports = (categories) => (
    [
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 1",
          author:"carlao",
          body: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          main:true,
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 3')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 3')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 3')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      }),
      new News({
          images: [
            'http://taqe.com.br:3000/lg.png',
            'http://taqe.com.br:3000/lg.png'
          ],
          imageThumb: "http://taqe.com.br:3000/sm.png",
          title:"Noticia 2",
          author:"danrley",
          body: "texto 2",
          categories:[
            _.find(categories, category => category.name === 'CATEGORIA 2')._id,
            _.find(categories, category => category.name === 'CATEGORIA 1')._id
          ]
      })

    ]
);
