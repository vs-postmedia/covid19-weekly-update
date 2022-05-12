import test from './BigNum.css';


const init = async data => {
	let string = '';
	let el = document.getElementById('big-num-container');

	data.forEach((d,i) => {
		string += createBigNumString(d.num, d.sub, d.date);
	});

	el.innerHTML = string;
}


// TEMPLATE
function createBigNumString(num, sub, date) {
	return `
		<div class="big-num">
			<h2 class="num ${sub}">${numberWithCommas(num)}</h2>
			<p class="sub">${sub}</p>
			<p class="date">as of ${date}</p>
		</div>
	`;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default { init };