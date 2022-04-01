/* eslint-disable */
import CompressionPlugin from `compression-webpack-plugin`;
import BrotliPlugin from `brotli-webpack-plugin`;
import path from `path`;
export const plugins = [
	new BrotliPlugin( {
		asset: "[fileWithoutExt].[ext].br",
		test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
	} ),
	new CompressionPlugin( {
		test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
		filename ( info ) {
			let opFile = info.path.split( "." ), opFileType = opFile.pop(), opFileName = opFile.join( "." );
			return `${ opFileName }.${ opFileType }.gzip`;
		},
	} ),
];
