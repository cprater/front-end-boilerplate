/*
 * The only purpose of this file is to kick off the application's top-level
 * controller at the appropriate time. All other code should be written as
 * separate modules in their own files.
 *
 * @fileOverview Application kick-off
 */

import App from 'scripts/app';

document.addEventListener('DOMContentLoaded', function() {
  window.app = new App();
});
