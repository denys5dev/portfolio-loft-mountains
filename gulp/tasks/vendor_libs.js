'use strict';

module.exports = function() {
	$.gulp.task('vendor_libs', function() {
		return $.gulp.src($.path.vendorLibs)
		.pipe($.gp.concat('libs.js'))
		.pipe($.gulp.dest($.config.root + '/assets/js'))
	})
};
