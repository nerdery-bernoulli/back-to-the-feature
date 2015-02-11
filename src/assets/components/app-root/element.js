import ScopeElement from '../app-scope/element';

/**
 * @class RootElement
 * @extends ScopeElement
 */
class RootElement extends ScopeElement {
    /**
     * @method createdCallback
     */
    createdCallback() {
        /**
         * @property {String} fooValue
         */
        this.fooValue = null;

        /**
         * @property {Array.<Object>} fooValue
         */
        this.items = [
            { foo: 'bar' },
            { foo: 'baz' },
            { foo: 'bat' }
        ];

        super.createdCallback(...arguments);
    }

    /**
     * @method add
     * @param {Event} event
     * @param {ViewModel} viewModel
     * @callback
     */
    add(event, viewModel) {
        event.preventDefault();

        var value = viewModel.fooValue;

        if (!value) {
            return;
        }

        viewModel.items.push({ foo: value });
        viewModel.fooValue = null;
    }

    /**
     * @method sort
     * @param {Event} event
     * @param {ViewModel} viewModel
     * @callback
     */
    sort(event, viewModel) {
        event.preventDefault();

        viewModel.items.sort(function (a, b) {
            return a.foo > b.foo ? 1 : -1;
        });
    }

    /**
     * @method rsort
     * @param {Event} event
     * @param {ViewModel} viewModel
     * @callback
     */
    rsort(event, viewModel) {
        event.preventDefault();

        viewModel.items.sort(function (a, b) {
            return a.foo < b.foo ? 1 : -1;
        });
    }
}

export default document.registerElement('app-root', {
    prototype: RootElement.prototype
});
