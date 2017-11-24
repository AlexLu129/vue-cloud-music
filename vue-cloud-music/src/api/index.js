/**
 * Created by Administrator on 2017/11/22.
 */
const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'

export default {
    getPlayListByWhere (cat, order, offset, total, limit) {
        return _baseUrl + '?type=toPlayList&Cat'
    },
    getLrc (id) {
        return _baseUrl2 + '?type=lyric&id=' + id
    },
    getSong (id) {
        return _baseUrl + '?type=url&id' + id    
    },
    getPlayListDetail (id) {
        return _baseUrl2 + '?type=playList&id' + id
    },
    getMv (id) {
        return _baseUrl2 + '?type=mv&id=' + id
    },
    search (words) {
        return _baseUrl2 + '?type=search&s=' + words
    }
}