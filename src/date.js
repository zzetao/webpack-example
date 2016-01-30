import Moment from 'moment';

export default function() {
	let element = document.createElement('h2');
	element.innerHTML = Moment().format('llll');
	return element;
}