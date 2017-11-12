/*
 * @fileOverview View module definition
 */

/**
 * Base View Class
 *
 * @class View
 * @constructor
 */
class View {
  /**
   * Sets properties and kicks off component
   *
   * @param element The base parent element of the view
   * @constructor
   */
  constructor (element, viewId = 0) {
    /*
     * The base parent element of the view
     *
     * @property $element
     * @default undefined
     * @type jQuery
     * @public
     */
    this.viewId = viewId;
    this.element = element;

    /*
     * Tracks whether component is enabled
     *
     * @property isEnabled
     * @default false
     * @type bool
     * @public
     */
    this.isEnabled = false;

    this.init();
  }

  /**
   * Initializes the component and kicks off loading of prerequisites.
   *
   * @method init
   * @returns {View}
   * @chainable
   * @public
   */
  init () {
    this.setupHandlers()
        .createChildren()
        .enable()
        .afterInit();

    return this;
  }

  /**
   * Binds the scope of any handler functions.
   *
   * @method setupHandlers
   * @returns {View}
   * @public
   * @chainable
   */
  setupHandlers () {
    return this;
  }

  /**
   * Create any child objects or references to DOM elements.
   *
   * @method createChildren
   * @returns {View}
   * @public
   * @chainable
   */
  createChildren () {
    return this;
  }

  /**
   * Remove any child objects or references to DOM elements.
   *
   * @method removeChildren
   * @returns {View}
   * @public
   * @chainable
   */
  removeChildren () {
    return this;
  }

  /**
   * Enable event handlers.
   * Exits early if component already enabled.
   *
   * @method enable
   * @returns {View}
   * @chainable
   * @public
   */
  enable () {
    if (this.isEnabled) {
      return this;
    }
    this.isEnabled = true;

    return this;
  }

  /**
   * Disable event handlers.
   * Exits early if component already disabled.
   *
   * @method disable
   * @returns {View}
   * @chainable
   * @public
   */
  disable () {
    if (!this.isEnabled) {
      return this;
    }
    this.isEnabled = false;

    return this;
  }

  /**
   * Tears down component
   *
   * @method destroy
   * @returns {View}
   * @chainable
   * @public
   */
  destroy () {
    this.removeChildren()
        .disable();

    return this;
  }

  /*
   * Provides a post initialization hook for additional setup
   * outside of event and child setup
   *
   * @property afterInit
   * @returns {FormView}
   * @chainable
   * @public
   */
  afterInit () {
    return this;
  }
}

export default View;
