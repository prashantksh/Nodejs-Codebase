const assert = require('chai').assert;

const app = require('../app');

describe('App', () => {
  it('App should return Hello', () => {
    assert.equal(app.greet(), 'Hello');
  });

  it('App should return the name', () => {
    assert.equal(app.tell('name'), 'name');
    assert.typeOf(app.tell('name'), 'string');
  });

  it('App should return the string', () => {
    assert.typeOf(app.tell('name'), 'string');
  });
});
