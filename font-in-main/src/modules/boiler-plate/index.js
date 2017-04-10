if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/lab/index.js'); // eslint-disable-line no-console
}

import _ from 'lodash';

const moduleRoot = document.createElement('div');
moduleRoot.className = 'boiler-plate';

import moduleStyle from './style.less';
moduleRoot.className = moduleRoot.className + ` ${moduleStyle['module-style']}`;


// Module Title:
    const elem_title = document.createElement('h3');
    elem_title.innerHTML = 'module-name: boiler-plate';
    moduleRoot.appendChild(elem_title);


//sss --- testing fonts (Roboto)--- sss//
    const elem_RobotoThin = document.createElement('p');
    elem_RobotoThin.className = 'roboto-thin';
    elem_RobotoThin.innerHTML = 'roboto-thin';
    moduleRoot.appendChild(elem_RobotoThin);

    const elem_RobotoLight = document.createElement('p');
    elem_RobotoLight.className = 'roboto-light';
    elem_RobotoLight.innerHTML = 'roboto-light';
    moduleRoot.appendChild(elem_RobotoLight);
//eee --- testing fonts (Roboto)--- eee//


//sss --- testing fonts (font awesome)--- sss//
    const elem_div_fontAwesome = document.createElement('div');

    const elem_fontAwesomeSpinner = document.createElement('i');
    elem_fontAwesomeSpinner.className = 'fa fa-circle-o-notch fa-spin fa-3x fa-fw';
    elem_div_fontAwesome.appendChild(elem_fontAwesomeSpinner);

    const elem_fontAwesomeAreaChart = document.createElement('i');
    elem_fontAwesomeAreaChart.className = 'fa fa-area-chart';
    elem_div_fontAwesome.appendChild(elem_fontAwesomeAreaChart);

    moduleRoot.appendChild(elem_div_fontAwesome);
//eee --- testing fonts (font awesome)--- eee//


const elem_img = document.createElement("img");

import {default as imgUri_twitter} from './local-shares/images/img_01.png';
elem_img.src = imgUri_twitter;
moduleRoot.appendChild(elem_img);





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


