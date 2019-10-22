// get google reviews from browser console
google = document.getElementsByClassName('gws-localreviews__google-review');

for(let i = 0; i < google.length; i++){
	// get reviewer name
	let nameContainer = google[i].getElementsByTagName('div')[1];
	if (typeof nameContainer === 'undefined') {continue};
	let name = nameContainer.getElementsByTagName('a')[0];
	if (typeof name === 'undefined') {continue};
	if(typeof name !== 'undefined') {
		name = name.innerText || name.innerHTML || '';
	}
	// get description
	let sub = google[i].getElementsByTagName('div')[0];
	if (typeof sub === 'undefined') {continue};
	let subSub = sub.getElementsByTagName('div')[2];
	if (typeof subSub === 'undefined') {continue};
	let foo = subSub.getElementsByTagName('div')[1];
	if (typeof foo === 'undefined') {continue};
	let span = foo.getElementsByTagName('span')[0];
	if(typeof span !== 'undefined') {
		span = span.innerText || span.innerHTML || '';
	}
	//get value
	let bob = subSub.getElementsByTagName('div')[0];
	if (typeof bob === 'undefined') {continue};
	let value = bob.getElementsByTagName('span')[0];
	if (typeof value === 'undefined') {continue};
	value = value.getAttribute("aria-label");

	reviews[i] = {name: name, description: span, value: value};
}
let json = JSON.stringify(reviews);
console.log(json);