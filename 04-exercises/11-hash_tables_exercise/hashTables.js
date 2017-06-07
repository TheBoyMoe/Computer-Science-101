function HashTable(size=53) {
	this.keyMap = new Array(size);
}


// Large prime number
HashTable.prototype.RANDOM_VAL = 18539;

HashTable.prototype.__hash = function(key) {
	let hashFunction = (numericKey, multiple, size) => {
		return (numericKey * multiple) % size;
	};
	
	if (Number.isFinite(key)) {
		return hashFunction(key);
	}
	
	if (typeof key === 'string' && !isNaN(Number(key))) {
		return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
	}
	
	let tempKey = key;
	if (key === null) {
		tempKey = "null";
	}
	
	if (key === undefined) {
		tempKey = "undefined";
	}
	
	if (isNaN(key) || !isFinite(key)) {
		tempKey = "NaN";
	}
	
	if (typeof tempKey === 'string') {
		let numKey = 0;
		for (let i = 0; i < tempKey.length && i < 5; i++) {
			numKey += tempKey.charCodeAt(i);
		}
		
		return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length)
	}
};

// TODO Given the constructor and hashing function, impl the following methods


//  set a value in the hashTable based on a specified key
HashTable.prototype.set = function (key, value) {

};

// return true if the key specified exists in the hash table
HashTable.prototype.get = function (key) {

};


// remove a value from the hash table
HashTable.prototype.remove = function (key) {

};

// return all of the keys in the hash table
HashTable.prototype.keys = function () {

};

// return all of the values
HashTable.prototype.values = function () {

};

// set a value in the hashTable based on a specified key. It should handle collisions using separate chaining.
HashTable.prototype.setSeparateChaining = function (key, value) {

};

// return a value in the hashTable based on a specified key. It should handle collisions using separate chaining.
HashTable.prototype.getSeparateChaining = function (key) {

};

// set a value in the hashTable based on a specified key. It should handle collisions using linear probing.
HashTable.prototype.setLinearProbing = function (key, value) {

};

//  return a value in the hashTable based on a specified key. It should handle collisions using linear probing.
HashTable.prototype.getLinearProbing = function (key) {

};
