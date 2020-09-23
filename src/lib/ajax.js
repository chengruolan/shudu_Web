import axios from 'axios';

// 添加公共请求头;
const getHeader = function(options) {
	if (options === 'form') {
		return Object.assign({
			'content-type': 'application/x-www-form-urlencoded',
		});
	} else if (options === 'file') {
		return Object.assign({
			'content-type': 'multipart/form-data',
		});
	}
};

const request = function(method, url, params, options) {
	return new Promise(function(resolve, reject) {
		axios
			.request({
				headers: getHeader(options),
				url: url,
				method: method,
				withCredentials: true,
				data: method === 'post' ? params : {},
				params: method === 'get' ? params : {},
				timeout: 120000,
				responseType: 'json',
			})
			.then(function(response) {
				let data = response.data || JSON.parse(response.request.responseText);
				resolve(data);
			})
			.catch(function(error) {
				if (typeof error.response === 'undefined') {
					if (location.hostname == '127.0.0.1' || location.hostname == 'localhost') {
						reject(error);
					} else {
						location.reload();
					}
				} else {
					reject(error);
				}
			});
	});
};

export default {
	get: function(url, params, options) {
		return request('get', url, params, options);
	},
	post: function(url, params, options) {
		return request('post', url, params, options);
	},
};
