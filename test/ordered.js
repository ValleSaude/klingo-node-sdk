const clienttests = require('./client');
const verifytests = require('./verify');
const externaltests = require('./external');
const patienttests = require('./patient');
const misctests = require('./misc');

describe('Client', clienttests);
describe('Verify', verifytests);
describe('External', externaltests);
describe('Patient', patienttests);
describe('Misc', misctests);
