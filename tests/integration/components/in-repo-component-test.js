import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | in-repo-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<InRepoComponent />`);

    assert.dom('span').hasText('false');
    await click('button');
    assert.dom('span').hasText('true');
  });
});
