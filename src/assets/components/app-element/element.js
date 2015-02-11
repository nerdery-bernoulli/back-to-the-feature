/**
 * Convenience base class that enables the use of ES6 class sugar syntax. Useful
 * as you can't use `extends` directly with HTMLElement in IE.
 *
 * @class AppElement
 * @extends HTMLElement
 */
export default document.registerElement('app-element', {
	prototype: Object.create(HTMLElement.prototype)
});
