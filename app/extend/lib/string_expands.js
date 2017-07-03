/**
 * Created by yuliang on 2017/6/28.
 * 字符串相关拓展函数
 */

'use strict'

const is = require('is-type-of')

module.exports = {
    /**
     * 切割字符串
     * @param str 切割目标字符串
     * @param length 保留长度
     * @param additional 超过长度之后追加的字符串
     * @param startIndex 开始切割下标
     * @returns {string}
     */
    cutString  (str, length, startIndex = 0, additional = '') {
        if (!is.string(str)) {
            return str
        }
        if (!is.string(additional)) {
            additional = ''
        }
        return str.length > length
            ? str.substr(startIndex, length) + additional
            : str.substr(startIndex, length)
    },

    /**
     * 从尾部trim字符串
     * @param targetStr 目标字符串
     * @param trimStr   需要trim掉的字符串
     * @returns {*}
     */
    trimEnd (targetStr, trimStr) {
        if (!is.string(targetStr) || !is.string(trimStr)) {
            return targetStr
        }
        while (true) {
            if (targetStr.substr(targetStr.length - trimStr.length, trimStr.length) != trimStr) {
                break;
            }
            targetStr = targetStr.substr(0, targetStr.length - trimStr.length);
        }
        return targetStr;
    },

    /**
     * 从头部trim字符串
     * @param targetStr 目标字符串
     * @param trimStr   需要trim掉的字符串
     * @returns {*}
     */
    trimStart (targetStr, trimStr) {
        if (!is.string(targetStr) || !is.string(trimStr)) {
            return targetStr
        }
        while (true) {
            if (targetStr.substr(0, trimStr.length) !== trimStr) {
                break;
            }
            targetStr = targetStr.substr(trimStr.length);
        }
        return targetStr;
    }
}