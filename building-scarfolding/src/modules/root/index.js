if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/index/index.js'); // eslint-disable-line no-console
}

import style from './style';

const root = document.createElement('div');
root.className = 'root '+style['module-style'];

import boilerPlate from 'modules/boiler-plate';
root.appendChild(boilerPlate);

export default root;

