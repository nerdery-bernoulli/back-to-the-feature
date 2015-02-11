import rivets from 'rivets';
import AppElement from '../app-element/element';

rivets.configure({
    templateDelimiters: ['${', '}']
});

/**
 * Defines a scope and implements two-way binding.
 *
 * @class ScopeElement
 * @extends AppElement
 */
class ScopeElement extends AppElement {
    /**
     * @method createdCallback
     */
    createdCallback() {
        /**
         * @property {ViewModel} viewModel
         */
        this.viewModel = rivets.bind(this, this);
    }
}

export default document.registerElement('app-scope', {
    prototype: ScopeElement.prototype
});
