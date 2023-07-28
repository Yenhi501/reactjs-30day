const readline = require('readline');
const process = require('process');

// implement the function to merge configs
// customConf takes priority
function longestCommonPath(conf1, conf2) {
	let result = [];

	// Recursive function to traverse the objects and find common paths
	function traverse(obj1, obj2, path) {
		for (let key in obj1) {
			if (obj2.hasOwnProperty(key)) {
				let newPath = path.concat(key);

				if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
					traverse(obj1[key], obj2[key], newPath);
				} else {
					// Found a common attribute path
					if (newPath.length > result.length) {
						result = newPath;
					} else if (
						newPath.length === result.length &&
						newPath.join('.') < result.join('.')
					) {
						result = newPath;
					}
				}
			}
		}
	}

	traverse(conf1, conf2, []);

	return result.length > 0 ? result.join('.') : '...';
}

// this is provided function to read test cases
// from stdin and write output to stdout
// you don't have to modify it
async function processCases() {
	const reader = readline.createInterface(process.stdin, process.stdout);
	let confs = [];
	for await (const line of reader) {
		const conf = JSON.parse(line);
		if (typeof conf === 'object') {
			confs.push(conf);
			if (confs.length === 2) {
				const common = longestCommonPath(confs[0], confs[1]);
				console.log(common);
				confs = [];
			}
		}
	}
}

processCases();