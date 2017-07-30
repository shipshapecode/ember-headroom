import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Headroom from 'headroom';

moduleForAcceptance('Acceptance | headroom shim');

test('testing shim import', function(assert) {
  assert.ok(Headroom !== undefined && Headroom !== null);
  assert.equal(Headroom.toString().substr(0, 34), 'function Headroom(elem, options) {');
});
