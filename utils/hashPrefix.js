function hashRoundWithPrefix(hash) {
	if (hash / Math.pow(1000, 2) < 1) {
		return Math.round(hash / Math.pow(1000, 1)) + ' kh/s'
	}
	else if (hash / Math.pow(1000, 3) < 1) {
		return Math.round(hash / Math.pow(1000, 2)) + ' Mh/s'
	}
	else if (hash / Math.pow(1000, 4) < 1) {
		return Math.round(hash / Math.pow(1000, 3)) + ' Gh/s'
	}
	if (hash / Math.pow(1000, 5) < 1) {
		return Math.round(hash / Math.pow(1000, 4)) + ' Th/s'
	}
	else if (hash / Math.pow(1000, 6) < 1) {
		return Math.round(hash / Math.pow(1000, 5)) + ' Ph/s'
	}

}

function hashThs(hash) {
	// console.log(hash, hash / Math.pow(1000, 4));

	if (hash / Math.pow(1000, 5) < 1) {
		return Math.round(hash / Math.pow(1000, 4)) + ' Th/s'
	} else {
		return hash / Math.pow(1000, 4) + ' Th/s'
	}

}

export { hashRoundWithPrefix, hashThs }