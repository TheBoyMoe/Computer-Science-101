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

// determine the most frequent word
function mostFrequentWord(str) {
	let frequency = wordCount(str);
	let values = [], result = {};
	for(let p in frequency) {
		if(frequency.hasOwnProperty(p))
			values.push(frequency[p]);
	}
	let max = Math.max(...values);
	for(let p in frequency) {
		if(frequency.hasOwnProperty(p))
			if(frequency[p] == max)
				result[p] = frequency[p];
	}
	return result;
}