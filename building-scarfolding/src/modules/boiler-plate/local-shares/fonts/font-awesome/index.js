
if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/common/fonts/font-awesome/index.js'); // eslint-disable-line no-console
}

const fonts = [
    'fontawesome-webfont.ttf',
];

fonts.forEach(font=>{
    const pathToFont = './fonts/'+font;
    require(`${pathToFont}`);
});

import style_fontAwesome from './style.less';
export default style_fontAwesome;
