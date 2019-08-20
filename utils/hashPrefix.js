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

function hashRoundWithPrefixForChartLabel(hash) {
	if (hash / Math.pow(1000, 2) < 1) {
		return (hash / Math.pow(1000, 1)).toFixed(2) + ' kh/s'
	}
	else if (hash / Math.pow(1000, 3) < 1) {
		return (hash / Math.pow(1000, 2)).toFixed(2) + ' Mh/s'
	}
	else if (hash / Math.pow(1000, 4) < 1) {
		return (hash / Math.pow(1000, 3)).toFixed(2) + ' Gh/s'
	}
	if (hash / Math.pow(1000, 5) < 1) {
		return (hash / Math.pow(1000, 4)).toFixed(2) + ' Th/s'
	}
	else if (hash / Math.pow(1000, 6) < 1) {
		return (hash / Math.pow(1000, 5)).toFixed(2) + ' Ph/s'
	}

}

function hashChartAvg(hashrate, _this) {
	if (!hashrate || !hashrate.length)
		return hashrate

	let hm = 60;
	let hours;
	if (_this) {
		hours = parseInt(_this.chartsPeriod)
	} else {
		hours = 24;
	}
	if (hours === 3)
		hours = 3 * 24;
	let startHour = hashrate.length - hours * hm - 1;
	let newHashrate = []

	for (let i = 0; i < hours; i++) {
		let el = hashrate[startHour + (i + 1) * hm];
		let avgY = 0;
		let countY = 0;
		for (let j = startHour + i * hm; j < startHour + (i + 1) * hm; j++) {
			avgY += hashrate[j].y;
			countY++;
		}

		newHashrate.push({ x: el.x, y: avgY / countY })
	}

	// console.log(newHashrate)
	return newHashrate;

}

function hashThs(hash) {
	// console.log(hash, hash / Math.pow(1000, 4));

	if (hash / Math.pow(1000, 5) < 1) {
		return Math.round(hash / Math.pow(1000, 4)) + ' Th/s'
	} else {
		return hash / Math.pow(1000, 4) + ' Th/s'
	}

}

export { hashRoundWithPrefix, hashRoundWithPrefixForChartLabel, hashThs, hashChartAvg }