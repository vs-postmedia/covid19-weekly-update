// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
// import axios from 'axios';
import BigNum from './js/BigNum/BigNum.js';

// VARS
let data;
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRX2X9TkSNhMcia10m3SPMQA_OvW9myF3orsHOhg2Wu5KQRPCodKaWAiTAnIAHuVfTIuesM0wCGm4mB/pub?gid=769966488&single=true&output=csv';

//
const init = async () => {
	data = {
		start_date: 'XXX',
		end_date: 'ZZZ',
		stats: [
			{
				sub: 'icu',
				num: '1111'
			},
			{
				sub: 'hospitalized',
				num: '5555'
			},
			{
				sub: 'deaths',
				num: '7777'
			}
		]
	};

	// wait for DOM to load
	document.addEventListener('DOMContentLoaded', update)
};

init();

/*
*
* FUNCTIONS
*
*/

function update() {
	// header & footer copy
	updateHeader(data);
	updateFooter(data);

	// update the stats
	BigNum.init(data.stats);
}

function updateHeader(data) {
	const el = document.getElementById('header');
	el.innerHTML = `<p class="header-copy">COVID-19 figures for the week of ${data.start_date} to ${data.end_date}:</p>`;
}

function updateFooter(data) {
	const el = document.getElementById('footer');

	el.innerHTML = `<p class="footer-copy">There were ${numberWithCommas(data.end_date)} new cases reported in the past seven days in B.C., for a total of ${numberWithCommas(data.end_date)} cases.</p><p class="footer-copy-bold">Read the full report <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/data-trends#Reports" _target="blank">here</a> | Next update: ${data.end_date} at 1 p.m. or later.</p>`;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}