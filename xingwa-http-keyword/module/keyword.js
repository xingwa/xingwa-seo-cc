const httpHelper = require('./http')


class keyword {
    static promiseHttp(url, timeout = 3000, code = 'utf-8') {
        return new Promise(function (resolve, reject) {
            httpHelper.httpClient.requestSync(url, timeout, code, function (err, res) {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }
    static async get(key='') {
        try {
            let conent = await this.promiseHttp('http://wap.baidu.com/s?word=' + encodeURIComponent(key))
            let relativewords = conent.split('<div class="rw-title">相关搜索</div>')[1].split('</div></div>')[0]
            let reg = new RegExp('>.[^<>]*?<\/a>', 'ig')
            let match = relativewords.match(reg)
            let arr = [key]
            if (match.length > 0) {
                for (let index = 0; index < match.length; index++) {
                    let element = match[index];
                    element = element.replace('>', '').replace('</a>', '')
                    arr.push(element)

                }
                return arr
            }else{
                return undefined
            }
        } catch (ex) {
            return null
        }

    }
}

exports.keyword = keyword