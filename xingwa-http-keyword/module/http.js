/**
 * 网络获取
 */
const http = require("http");
const url__ = require('url');
const Agent = require('agentkeepalive');
var keepAliveAgent = new Agent({ keepAlive: true, keepAliveMsecs: 120000 });

const https = require("https");
const url = require('url');
const zlib = require('zlib');
const iconv = require('iconv-lite');

http.request = (function (_request) {
	return function (options, callback) {
		var timeout = options["timeout"];
		var timeoutEventId;
		var req = _request(options, function (res) {
			res.on('end', function () {
				clearTimeout(timeoutEventId);
			});
			res.on('close', function () {
				clearTimeout(timeoutEventId);
			});
			res.on('abort', function () {
			});
			callback(res);
		});
		req.on('timeout', function () {
			try {
				req.res && req.res.abort();
				req.abort();
			} catch (e) {
				req.abort();
			}
		});
		timeout && (timeoutEventId = setTimeout(function () {
			req.emit('timeout', { message: 'timeout' });
		}, timeout));
		return req;
	};

})(http.request);

https.request = (function (_request) {
	return function (options, callback) {
		var timeout = options["timeout"];
		var timeoutEventId;
		var req = _request(options, function (res) {
			res.on('end', function () {
				clearTimeout(timeoutEventId);
			});
			res.on('close', function () {
				clearTimeout(timeoutEventId);
			});
			res.on('abort', function () {
			});
			callback(res);
		});
		req.on('timeout', function () {
			try {
				req.res && req.res.abort();
				req.abort();
			} catch (e) {
				req.abort();
			}
		});
		timeout && (timeoutEventId = setTimeout(function () {
			req.emit('timeout', { message: 'timeout' });
		}, timeout));
		return req;
	};

})(https.request);

var httpClient = function () {

	//获取头部信息
	httpClient.prototype.header = function (urls, timeout, callback) {
		var a = url.parse(urls);

		var httpOrHttps;
		if (a.protocol === "https:") {
			httpOrHttps = https.request;
		} else {
			httpOrHttps = http.request;
		}
		var options = url.parse(urls);
		if (arguments.length <= 1) { options.timeout = 3000; } else { options.timeout = timeout; }
		var ReturnData;
		var req = httpOrHttps(options, function (res) {
			if (res.headers.hasOwnProperty("content-length")) {
				ReturnData = res.headers["content-length"];
				res.destroy();
				req.abort();
				callback(ReturnData)
				return
			} else {
				var strChunks = [];
				res.on('data', function (chunk) { strChunks += chunk; });
				res.on('end', function () {
					res.destroy();
					ReturnData = strChunks.toString().trim().length;
					req.abort();
					callback(ReturnData)
					return
				});
			}
		});
		req.on('error', function (e) { callback(e); return })
		req.on('timeout', function (e) { callback('timeout'); return });
		req.end();

	}



	//获取GET信息(如果要传编码必须传timeout),异步回到
	httpClient.prototype.requestSync = function (urls, timeout, encode, callback) {
		encode = (arguments.length <= 2 ? "utf-8" : arguments[2]);
		var a = url.parse(urls);
		var httpOrHttps;
		if (a.protocol === "https:") {
			httpOrHttps = https.request;
		} else {
			httpOrHttps = http.request;
		}
		var options = url.parse(urls);
		if (arguments.length <= 1) { options.timeout = 3000; } else { options.timeout = timeout; }
		var ReturnData;
		var req = httpOrHttps(options, function (res) {
			var chunks = [];
			res.on('data', function (chunk) { chunks.push(chunk); });
			res.on('end', function () {
				//编码处理
				try {
					var encoding = res.headers['content-encoding'];
				} catch (e) { var encoding = ""; }
				res.destroy();
				var buffer = Buffer.concat(chunks);
				if (encoding === 'gzip') {
					zlib.unzip(buffer, function (err, decoded) {
						if (encode.toLocaleLowerCase() !== 'utf-8' && decoded) {
							decoded = iconv.decode(decoded, encode);
						}
						ReturnData = decoded.toString();
						callback(null, ReturnData)
					});
				} else if (encoding === 'deflate') {
					zlib.inflate(buffer, function (err, decoded) {
						if (encode.toLocaleLowerCase() !== 'utf-8' && decoded) {
							decoded = iconv.decode(decoded, encode);
						}
						ReturnData = decoded.toString();
						callback(null, ReturnData)
					});
				} else {
					if (encode.toLocaleLowerCase() !== 'utf-8' && buffer) {
						buffer = iconv.decode(buffer, encode);
					}
					ReturnData = buffer.toString();
					callback(null, ReturnData)
				}

			});
		});
		req.on('error', function (e) { callback(e, null) })
		req.on('timeout', function (e) { callback('timeout', null) });
		req.end();

	}


}

exports.httpClient = new httpClient;