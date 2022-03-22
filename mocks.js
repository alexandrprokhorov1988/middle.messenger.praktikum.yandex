require.extensions['.scss'] = function () { return null; };
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<div class="page"></div>', { url: 'http://localhost:3000' });

global.window = window;
global.document = window.document;
