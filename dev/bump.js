'use strict';

const sh = require('shelljs');
const step = process.argv.slice(2)[0];

module.exports = (step) => {
	sh.exec('./node_modules/.bin/gulp --gulpfile .dev/gulp.js bump-' + step);
};

step && module.exports(step);
