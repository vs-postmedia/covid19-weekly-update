import test from './BigNum.css';


const init = async data => {
	let string = '';
	let el = document.getElementById('big-num-container');

	data.forEach((d,i) => {
		string += createBigNumString(d.num, d.sub);
	});

	el.innerHTML = string;
}


// TEMPLATE
function createBigNumString(num, sub) {
	return `
		<div class="big-num">
			<h2 class="num ${sub}">${numberWithCommas(num)}</h2>
			<p class="sub">${sub}</p>
		</div>
	`;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default { init };