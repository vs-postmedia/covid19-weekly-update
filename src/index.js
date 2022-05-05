// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import Papa from 'papaparse';
import BigNum from './js/BigNum/BigNum.js';

// VARS
let dataObj;
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRX2X9TkSNhMcia10m3SPMQA_OvW9myF3orsHOhg2Wu5KQRPCodKaWAiTAnIAHuVfTIuesM0wCGm4mB/pub?gid=769966488&single=true&output=csv';

//
const init = async () => {
	Papa.parse(url, {
		download: true,
		header: true,
		complete: res => {
			// get the latest week of data
			const data = res.data[res.data.length - 1];
			console.log(data);

			// prep data for BigNum componenet
			const stats = [
				{
					sub: 'icu',
					num: data.icu
				},
				{
					sub: 'hospitalized',
					num: data.hospitalized
				},
				{
					sub: 'deaths',
					num: data.deaths
				}
			];

			dataObj = data;
			dataObj.stats = stats;

			// show it!
			update();
		}
	});
};


/*
*
* FUNCTIONS
*
*/
function update() {
	// header & footer copy
	updateHeader(dataObj);
	updateFooter(dataObj);

	// update the stats
	BigNum.init(dataObj.stats);
}

function updateHeader(data) {
	const el = document.getElementById('header');
	el.innerHTML = `<p class="header-copy">COVID-19 figures for the week of ${data.week_start} to ${data.week_end}:</p>`;
}

function updateFooter(data) {
	const el = document.getElementById('footer');

	el.innerHTML = `<p class="footer-copy">There were ${numberWithCommas(data.cases_new)} new cases reported in the past seven days in B.C., for a total of ${numberWithCommas(data.cases_total)} cases.</p><p class="footer-copy-bold">Read the full report <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/data-trends#Reports" _target="blank">here</a> | Next update: ${data.next_update} at 1 p.m. or later.</p>`;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




// start it up!!
init();