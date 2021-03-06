'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var prisma_lib_1 = require('prisma-client-lib');
var typeDefs = require('./prisma-schema').typeDefs;

var models = [
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'Profile',
    embedded: false,
  },
  {
    name: 'DailyRecord',
    embedded: false,
  },
  {
    name: 'CustomRecipe',
    embedded: false,
  },
  {
    name: 'CustomIngredient',
    embedded: false,
  },
  {
    name: 'IngredientList',
    embedded: false,
  },
  {
    name: 'FavoriteFood',
    embedded: false,
  },
  {
    name: 'WeightLog',
    embedded: false,
  },
  {
    name: 'Post',
    embedded: false,
  },
  {
    name: 'Comment',
    embedded: false,
  },
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env['PRISMA_ENDPOINT']}`,
  secret: `${process.env['PRISMA_SECRET']}`,
});
exports.prisma = new exports.Prisma();
