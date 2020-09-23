let target = 'http://localhost:3001';

let proxyTable = {
	'/shudu': {
		target: target,
		changeOrigin: true,
		secure: false,
	},
};

module.exports = proxyTable;
