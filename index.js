'use strict'

const argv = require('yargs')
  .option('collections', {
    describe: 'Collection map YAML file',
    nargs: 1,
    default: 'collections-1-core.yml',
    required: true,
    alias: 'c'
  })

  .option('sql', {
    describe: 'SQL server to connect to',
    nargs: 1,
    default: 'postgres://postgres:postgres@localhost:5432/sirena-core-staging',
    required: true
  })

  .option('mongo', {
    describe: 'Mongo connection string',
    nargs: 1,
    default: 'mongodb://localhost/local',
    required: true
  })

  .option('incremental-import', {
    describe: 'Do an incremental import (experimental)',
    boolean: true,
    default: false,
    alias: 'i'
  })

  .option('concurrency', {
    describe: 'PG client concurrency',
    number: true,
    default: 1,
    alias: 'n'
  })

  .option('delete-mode', {
    describe: 'How to handle deletes',
    choices: ['ignore', 'normal'],
    default: 'normal'
  })

  .option('db-mode', {
    describe: 'Listen to changes in a single or multiple databases',
    choices: [ 'multi', 'single' ],
    default: 'multi'
  })

  .option('db-name', {
    describe: 'Database name. Use with db-mode single. If not set, it defaults to the database specified in the Mongo connection string.',
    string: true
  })

  .help('h')
  .alias('help', 'h')

  .argv

require('./lib/main')(argv)
