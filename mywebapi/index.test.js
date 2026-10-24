const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('./index');

test('the demo API still serves JSON after the Express security update', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  t.after(() => new Promise(resolve => server.close(resolve)));
  await once(server, 'listening');
  const root = `http://127.0.0.1:${server.address().port}`;
  const response = await fetch(root + '/api/v1/list');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /^application\/json/);
  const todos = await response.json();
  assert.equal(todos.length, 3);
  assert.ok(todos.every(todo => typeof todo.title === 'string' && typeof todo.done === 'boolean'));
  assert.equal((await fetch(root + '/missing')).status, 404);
});
