// get facebook reviews from browser console
fb = document.getElementsByClassName('userContentWrapper');
reviews = [];

for (var i = 0; i < fb.length; i++) {
	let name = fb[i].getElementsByClassName('fwb')[0];
	if (typeof name === 'undefined') {continue}
	let value = fb[i].getElementsByTagName('u');
	if (typeof value === 'undefined' || value.length === 0) {continue}
	let content = fb[i].getElementsByClassName('userContent')[0];
	if (typeof content !== 'undefined') {
		content = content.innerText;
	} else {
		content = '';
	}

	reviews.push({name: name.innerText, description: content, value: value[0].innerText});
}
let json = JSON.stringify(reviews);
console.log(json);