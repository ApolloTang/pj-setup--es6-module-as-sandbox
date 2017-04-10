if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}


// import {
//     doHeavyLifting
// } from './util/helper.js';
// console.log('doHeavyLifting(): ', doHeavyLifting()); // eslint-disable-line no-console


// import thirdPartyCode from './vendor/third-party-code.js';
// console.log('thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console


import global_style from './style.less';
import fonts from 'common/fonts';

const appContainer = document.getElementById('app-container');

import root from './modules/root';
appContainer.appendChild(root);




