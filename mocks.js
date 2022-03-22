require.extensions['.scss'] = function () { return null; };
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<html><body><div class="page"></div></body></html>', { url: 'http://localhost:3000' });

global.window = window;
global.document = window.document;
