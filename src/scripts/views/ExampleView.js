/*
 * @fileOverview Example class definition
 */
 import View from 'views/View';

/**
 * Controls opening/closing of mobile nav
 * @class NavView
 * @constructor
 */
class ExampleView extends View {
  /**
   * Initializes the component and kicks off loading of prerequisites.
   *
   * @method init
   * @returns {View}
   * @chainable
   * @public
   */
  init() {
    console.log('ExampleView initialized');
  }
}

export default ExampleView;
