const OpenCC = require('opencc')
const open = new OpenCC('s2twp.json')

function replace2(str) {
    str = str.replace(/普京/ig, '普丁')
    str = str.replace(/特朗普/ig, '川普')
    str = str.replace(/面板/ig, '皮膚')
    str = str.replace(/甲肝/ig, 'A肝')
    str = str.replace(/乙肝/ig, 'B肝')
    str = str.replace(/丙肝/ig, 'C肝')
    str = str.replace(/丁肝/ig, 'D肝')
    str = str.replace(/臺灣/ig, '台灣')
    str = str.replace(/我國/ig, '中國')
    str = str.replace(/高原反應/ig, '高山癥')
    str = str.replace(/彩票/ig, '彩券')


    str = str.replace(/\,/ig, '，')

    //str= str.replace(/\"(.[^\"]*)\"/ig,"“$1”")
    str = str.replace(/“/ig, '「')
    str = str.replace(/”/ig, '」')
    str = str.replace(/‘/ig, '「')
    str = str.replace(/’/ig, '」')
    str = str.replace(/\?/ig, '？')
    str = str.replace(/\!/ig, '！')


    /**SEO**/

    str = str.replace(/媽媽/ig, '媽_0_咪')
    str = str.replace(/媽咪/ig, '媽_0_媽')
    str = str.replace(/母親/ig, '媽媽')


    str = str.replace(/知道/ig, '曉_0_得')
    str = str.replace(/曉得/ig, '知_0_道')

    str = str.replace(/小編/ig, '編_0_者')
    str = str.replace(/編者/ig, '小_0_編')

    str = str.replace(/如今/ig, '當_0_今')
    str = str.replace(/當今/ig, '如_0_今')

    str = str.replace(/應當/ig, '應_0_該')
    str = str.replace(/應該/ig, '應_0_當')

    str = str.replace(/自個/ig, '自_0_己')
    str = str.replace(/自己/ig, '自_0_個')

    str = str.replace(/如果/ig, '假_0_如')
    str = str.replace(/假如/ig, '如_0_果')

    str = str.replace(/也會/ig, '就_0_會')
    str = str.replace(/就會/ig, '也_0_會')

    str = str.replace(/至今/ig, '到_0_今_0_天')
    str = str.replace(/到今天/ig, '至_0_今')

    str = str.replace(/很多/ig, '許_0_多')
    str = str.replace(/許多/ig, '很_0_多')

    str = str.replace(/上期/ig, '上_0_壹_0_期')
    str = str.replace(/上壹期/ig, '上_0_期')


    str = str.replace(/今晚/ig, '今_0_天_0_晚_0_上')
    str = str.replace(/今天晚上/ig, '今_0_晚')
    str = str.replace(/今天晚上上/ig, '今天晚上')


    str = str.replace(/明晚/ig, '明_0_天_0_晚_0_上')
    str = str.replace(/明天晚上/ig, '明_0_晚')
    str = str.replace(/明天晚上上/ig, '明天晚上')


    str = str.replace(/昨晚/ig, '昨_0_天_0_晚_0_上')
    str = str.replace(/昨天晚上/ig, '昨_0_晚')
    str = str.replace(/昨天晚上上/ig, '昨天晚上')

    str = str.replace(/不管/ig, '無_0_論')
    str = str.replace(/無論/ig, '不_0_管')
    str = str.replace(/無論妳/ig, '不管妳')
    str = str.replace(/無論他/ig, '不管他')
    str = str.replace(/無論她/ig, '不管她')

    str = str.replace(/本期/ig, '這_0_壹_0_期')
    str = str.replace(/這壹期/ig, '本_0_期')
    str = str.replace(/這期/ig, '本_0_期')

    str = str.replace(/或許/ig, '也_0_許')
    str = str.replace(/也許/ig, '或_0_許')

    str = str.replace(/期待/ig, '等_0_待')
    str = str.replace(/等待/ig, '期_0_待')

    str = str.replace(/決定權/ig, '權_0_力')
    str = str.replace(/權力/ig, '決_0_定_0_權')

    str = str.replace(/日前/ig, '目_0_前')
    str = str.replace(/目前/ig, '日_0_前')

    str = str.replace(/近日/ig, '近_0_期')
    str = str.replace(/近期/ig, '近_0_日')

    str = str.replace(/和夫人/ig, '和_0_妻_0_子')
    str = str.replace(/和妻子/ig, '和_0_夫_0_人')

    str = str.replace(/用餐/ig, '吃_0_飯')
    str = str.replace(/吃飯/ig, '用_0_餐')

    str = str.replace(/質疑者/ig, '質_0_疑_0_的_0_人')
    str = str.replace(/質疑的人/ig, '質_0_疑_0_者')

    str = str.replace(/夫婦/ig, '夫_0_妻')
    str = str.replace(/夫妻/ig, '夫_0_婦')

    str = str.replace(/冷嘲熱諷/ig, '挖_0_苦')
    str = str.replace(/挖苦/ig, '冷_0_嘲_0_熱_0_諷')

    str = str.replace(/大概/ig, '可_0_能')
    str = str.replace(/可能/ig, '大_0_概')

    str = str.replace(/怎樣/ig, '如_0_何')
    str = str.replace(/如何/ig, '怎_0_樣')

    str = str.replace(/認為/ig, '以_0_為')
    str = str.replace(/以為/ig, '認_0_為')

    str = str.replace(/現在/ig, '現_0_今')
    str = str.replace(/現今/ig, '現_0_在')

    str = str.replace(/往往/ig, '通_0_常')
    str = str.replace(/通常/ig, '往_0_往')

    str = str.replace(/已經/ig, '已')

    str = str.replace(/為什幺/ig, '為_0_啥')
    str = str.replace(/為什麽/ig, '為_0_啥')
    str = str.replace(/為啥/ig, '為_0_什_0_麽')

    str = str.replace(/增加了/ig, '加_0_重_0_了')
    str = str.replace(/加重了/ig, '增_0_加_0_了')

    str = str.replace(/異常/ig, '不_0_正_0_常')
    str = str.replace(/不正常/ig, '異_0_常')

    str = str.replace(/明顯/ig, '顯_0_著')
    str = str.replace(/顯著/ig, '明_0_顯')

    str = str.replace(/來說/ig, '來_0_講')
    str = str.replace(/來講/ig, '來_0_說')

    str = str.replace(/寸步不離/ig, '形_0_影_0_不_0_離')
    str = str.replace(/形影不離/ig, '寸_0_步_0_不_0_離')

    str = str.replace(/哪壹些/ig, '哪_0_些')
    str = str.replace(/哪些/ig, '哪_0_壹_0_些')

    str = str.replace(/壹定/ig, '定')

    str = str.replace(/不可以/ig, '不_0_能')
    str = str.replace(/不能/ig, '不_0_可_0_以')

    str = str.replace(/本身/ig, '自_0_己')

    str = str.replace(/晚期/ig, '末_0_期')
    str = str.replace(/末期/ig, '晚_0_期')

    str = str.replace(/致癌/ig, '得_0_癌')

    str = str.replace(/越易/ig, '越_0_容_0_易')
    str = str.replace(/越容易/ig, '越_0_易')

    str = str.replace(/什幺/ig, '啥_0_子')
    str = str.replace(/啥子/ig, '什_0_麽')

    str = str.replace(/不行/ig, '不_0_得_0_行')
    str = str.replace(/不得行/ig, '不_0_行')

    str = str.replace(/每日/ig, '每_0_天')
    str = str.replace(/每天/ig, '每_0_日')

    str = str.replace(/年末/ig, '歲_0_末')
    str = str.replace(/歲末/ig, '年_0_末')

    str = str.replace(/這次/ig, '這_0_壹_0_次')
    str = str.replace(/這壹次/ig, '這_0_次')

    str = str.replace(/興奮/ig, '激_0_動')
    str = str.replace(/激動/ig, '興_0_奮')

    str = str.replace(/恨不得/ig, '巴_0_不_0_得')
    str = str.replace(/巴不得/ig, '恨_0_不_0_得')

    str = str.replace(/於心不忍/ig, '不_0_忍_0_心')
    str = str.replace(/不忍心/ig, '於_0_心_0_不_0_忍')

    str = str.replace(/偷吃/ig, '偷_0_偷_0_地_0_吃')
    str = str.replace(/偷偷地吃/ig, '偷_0_吃')


    str = str.replace(/只因/ig, '只_0_因_0_為')
    str = str.replace(/只因為/ig, '只_0_因')
    str = str.replace(/只因為為/ig, '只_0_因_0_為')

    str = str.replace(/體驗/ig, '享_0_受')
    str = str.replace(/享受/ig, '體_0_驗')

    str = str.replace(/心疼/ig, '心_0_痛')
    str = str.replace(/心痛/ig, '心_0_疼')

    str = str.replace(/經常/ig, '常_0_常')
    str = str.replace(/常常/ig, '經_0_常')

    str = str.replace(/穩妥/ig, '穩_0_當')
    str = str.replace(/穩當/ig, '穩_0_妥')

    str = str.replace(/盼望/ig, '期_0_盼')
    str = str.replace(/期盼/ig, '盼_0_望')

    str = str.replace(/很/ig, '非_0_常')
    str = str.replace(/非常/ig, '很')

    str = str.replace(/耽誤/ig, '耽_0_擱')
    str = str.replace(/耽擱/ig, '耽_0_誤')

    str = str.replace(/若/ig, '如_0_果')

    str = str.replace(/獨處/ig, '單_0_獨_0_相_0_處')

    str = str.replace(/孤單/ig, '孤_0_獨')
    str = str.replace(/孤獨/ig, '孤_0_單')

    str = str.replace(/渴望/ig, '期_0_望')

    str = str.replace(/引人注意/ig, '引_0_起_0_人_0_注_0_意')
    str = str.replace(/吸引/ig, '吸_0_納')

    str = str.replace(/熱鬧/ig, '鬧_0_熱')
    str = str.replace(/鬧熱/ig, '熱_0_鬧')

    str = str.replace(/美好/ig, '美_0_妙')
    str = str.replace(/美妙/ig, '美_0_好')

    str = str.replace(/懵懂/ig, '懵_0_懵_0_懵_0_懵')
    str = str.replace(/懵懵懂懂/ig, '懵_0_懂')

    str = str.replace(/年齡/ig, '年_0_岁')
    str = str.replace(/年岁/ig, '年_0_齡')
    str = str.replace(/年纪/ig, '年_0_齡')

    str = str.replace(/回憶/ig, '記_0_憶')
    str = str.replace(/記憶/ig, '回_0_憶')
    str = str.replace(/回憶力/ig, '記_0_憶_0力')

    str = str.replace(/念舊/ig, '懷_0_舊')
    str = str.replace(/懷舊/ig, '念_0_舊')

    str = str.replace(/似曾相識/ig, '壹_0_見_0_如_0_故')
    str = str.replace(/壹見如故/ig, '似_0_曾_0_相_0_識')

    str = str.replace(/彷彿/ig, '好_0_像')
    str = str.replace(/好像/ig, '很_0_像')

    str = str.replace(/即使/ig, '纵_0_然')

    str = str.replace(/哪怕/ig, '就_0_算')
    str = str.replace(/就算/ig, '哪_0_怕')



    str = str.replace(/_0_/ig, '')
    return str
}


function OpenCCtranslate(res, language) {
    if (typeof (res) === 'string') {
        // console.log('string==============================================', res)
        return replace2(open.convertSync(res))
    } else if (typeof (res) === 'object' && Array.isArray(res)) {
        //console.log('array======================', res)
        let array = []
        for (let index = 0; index < res.length; index++) {
            let inRes = res[index]
            if (typeof (inRes) === 'string') {
                array.push(replace2(open.convertSync(inRes)))
            } else {
                array.push(OpenCCtranslate(inRes, language))
            }
        }
        return array
    } else if (typeof (res) === 'object' && !Array.isArray(res)) {
        try {
            res = res.toObject()
        } catch (error) {

        }
        // console.log('object=======================', res)
        let obj = {}
        for (var i in res) {
            let inRes = res[i]
            //console.log('object=======================', inRes,'xxxxxxxxxxxxxxxxxxxxxxx',i)
            if (typeof (inRes) === 'string') {
                obj[i] = replace2(open.convertSync(inRes))
            } else if (i === '_id') {
                obj[i] = inRes
            } else {
                obj[i] = OpenCCtranslate(inRes, language)
            }

        }
        return obj
    } else {
        return res
    }
}

class exportsOpencc {
    static translate(res, language = 's2twp') {
        //console.log('type',typeof(res), res)
        return OpenCCtranslate(res, language)
    }
}

exports.translate = exportsOpencc