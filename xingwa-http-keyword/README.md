# xingwa-baidu-keyword


## USAGE

```javascript
var httpClient = require("xingwa-baidu-keyword").httpClient
// 获取网页内容
var stringData = httpClient.requestSync('http://www.eg.com', 3000, 'utf-8', function (err, res){
  console.log(err, res)
})

// 获取百度关键字
var keyword = require("xingwa-baidu-keyword").keyword
var arrayData = await keyword.get('字符串')
console.log(arrayData)

```
