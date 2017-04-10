if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/common/fonts/index.js'); // eslint-disable-line no-console
}

require('./roboto/index.js');

// Font Awesome required name space to work in local module
import style_fontAwesome from './font-awesome/index.js';
export {style_fontAwesome};



