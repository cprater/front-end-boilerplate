/*
 * @fileOverview Application Controller definition
 */
 import ExampleView from 'views/ExampleView';

/**
 * Initial application setup. Runs once on every page load.
 *
 * @class App
 * @constructor
 */
export default class App {
  constructor() {
    this.dataModules = {
      'example': ExampleView
    };

    this.init();
  }

  /**
   * Initializes the application and kicks off loading of prerequisites.
   *
   * @method init
   * @public
   */
  init() {
    this.initJQueryComponents();
  }

  /**
   * Exposes a kick-off method for jQuery components
   * Creates moduleNameViews Array if not already created
   * Creates instance of view per module
   *
   * @method initJQueryComponents
   * @public
   */
  initJQueryComponents() {
    Object.keys(this.dataModules).forEach(name => {
      const $modules = document.querySelectorAll(`[data-module="${name}"]`);

      $modules.forEach(function(el, index) {
        const viewName = `${name}Views`;

        if (!this[viewName]) {
          this[viewName] = [];
        }

        this[viewName][index] = new this.dataModules[name](el, index)
      }.bind(this));
    });
  }
}
