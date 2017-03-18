/*
	Count word frequency in a string

 */

function wordCount(str) {
	return str.replace(/[^a-z ]/gi, '').split(' ').reduce(function (obj, word) {
		if(!obj[word]) obj[word] = 0;
		obj[word]++;
		return obj;
	}, {})
}