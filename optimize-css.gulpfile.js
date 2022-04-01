/* eslint-disable */
import { task, src, dest } from "gulp";
import filter from "gulp-filter";
import purify from "gulp-purify-css";
import gzip from "gulp-gzip";
import { compress } from "gulp-brotli";
import clean from "gulp-clean";
import { series, parallel } from "gulp";

// #1 | Optimize CSS
/*
  Steps:
  Filter the CSS files to be optimized
  Based on their usage in Build JS files
  & Store the optimize file in the given location
*/
task("css", () => {
	return src("../dist/ng-bundle/*")
		.pipe(
			filter([
				/*
              glob pattern for CSS files,
              point to files generated post angular prod build
              */
				"**/styles.*.css",
			])
		)
		.pipe(
			/*
              glob pattern for JS files, to look for the styles usage
              the styles will be filtered based on the usage in the below files.
              Pointing to JS build output of Angular prod build
              */
			purify(["../dist/*.js"], {
				info: true,
				minify: true,
				rejected: true,
				whitelist: [],
			})
		)
		.pipe(dest("../dist/test/")); /* Optimized file output location */
});

// # 2 | Genereate GZIP files
/*
Steps:
Read the optimized CSS in the Step #1
Apply gzip compression
*/
task("css-gzip", () => {
	return src("../dist/test/*")
		.pipe(filter(["**/*.css", "!**/*.br.*", "!**/*.gzip.*"]))
		.pipe(gzip({ append: false }))
		.pipe(
			rename((path) => {
				path.extname = ".gzip" + path.extname;
			})
		)
		.pipe(dest("../dist/test/"));
});

// # 3 | Genereate BROTLI files
/*
Steps:
Read the optimized CSS in the Step #1
Apply brotli compression
*/
task("css-br", () => {
	return src("../dist/test/*")
		.pipe(filter(["**/*.css", "!**/*.br.*", "!**/*.gzip.*"]))
		.pipe(compress())
		.pipe(
			rename((path) => {
				path.extname =
					".br" +
					path.basename.substring(
						path.basename.lastIndexOf("."),
						path.basename.length
					);
				path.basename = path.basename.substring(
					0,
					path.basename.lastIndexOf(".")
				);
			})
		)
		.pipe(dest("../dist/test"));
});

// # 4 | Clear ng-build CSS
/*
Delete style output of Angular prod build
*/
task("clear-ng-css", () => {
	return src("../dist/ng-bundle/*")
		.pipe(filter(["**/styles*.css"]))
		.pipe(clean({ force: true }));
});

// # 5 | Copy optimized CSS
/*
Once the optimization & compression is done,
Replace the files in angular build output location
*/
task("copy-op-css", () => {
	return src("../dist/test/*").pipe(dest("../dist/"));
});
// #6 | Clear temp folder
task("clear-test", () => {
	return src("../dist/test/", { read: false }).pipe(clean({ force: true }));
});

/*
 ### Order of Tasks ###
 * Optimize the styles generated from ng build
 * Create compressed files for optimized css
 * Clear the angular build output css
 * Copy the optimized css to ng-bundle folder
 * Clear the temp folder
 */
const _default = series(
	"css",
	parallel("css-gzip", "css-br"),
	"clear-ng-css",
	"copy-op-css",
	"clear-test"
);
export { _default as default };
