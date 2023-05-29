import { module, test } from 'qunit';
import { setupRenderingTest } from 'verses-4-vibes/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | graphic', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Graphic />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Graphic>
        template block text
      </Graphic>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
