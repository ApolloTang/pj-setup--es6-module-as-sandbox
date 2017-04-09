if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/lab/index.js'); // eslint-disable-line no-console
}

import _ from 'lodash';

const moduleRoot = document.createElement('div');
import style from './style.less';
import moduleFonts from './local-shares/fonts';

moduleRoot.className = 'lab ' + style['module-style'];
moduleRoot.innerHTML = '<h3>module-name: boiler-plate</h3>';

const elem_RobotoThin = document.createElement('p');
elem_RobotoThin.className = 'roboto-thin';
elem_RobotoThin.innerHTML = 'roboto-thin';
moduleRoot.appendChild(elem_RobotoThin);

const elem_RobotoLight = document.createElement('p');
elem_RobotoLight.className = 'roboto-light';
elem_RobotoLight.innerHTML = 'roboto-light';
moduleRoot.appendChild(elem_RobotoLight);

const elem_img = document.createElement("img");

import {default as imgUri_twitter} from './local-shares/images/img_01.png';
elem_img.src = imgUri_twitter;
moduleRoot.appendChild(elem_img);





console.clear()
//////////////////////////////////////////////////////////////
// d3 testing

import {scaleLinear as d3_scaleLinear} from 'd3-scale'
var color = d3_scaleLinear()
    .domain([10, 100])
    .range(["brown", "steelblue"]);

console.log(color(20)); // "#9a3439"
console.log(color(50)); // "#7b5167console.log(d3Scale);


//////////////////////////////////////////////////////////////

export default moduleRoot;


