// const baseUrl = 'http://192.168.3.10:18080/music-front';
const baseUrl = 'http://sing.recomusic.net/music-front';

const xhr = (pathname, method, params, headers) => {
    return new Promise((res, rej) => {
        let url = ~pathname.indexOf('http://') ? pathname : (baseUrl + pathname);
        let requestBody = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'token': headers && headers.token ? headers.token : ''
            },
            body: JSON.stringify(params)
        }

        if(method === 'GET' && params){
            url = url + '?' + JSON.stringify(params).replace(/{|}|\"/ig,'').replace(/,/g,'&').replace(/:/g,'=');
            delete requestBody.body;
        }

        fetch(url, requestBody).then((response) => {
            return response.json();
        }).then((data) => {
            res(data);
        }).catch(function (e) {
            alert('error')
        });
    })
}

const method = method => pathname => [pathname, method];

const [get,post] = ['GET','POST'].map(value => method(value));

const apis = {
    //登录
    login: post('/weiChatLogin'),
    loginById: post('/weiChatIdLogin'),
    signature: get('/signature'),
    bindPhone: post('/bindPhone'),
    sendCode: post('/sendVCode'),
    report: post('/signUp'),
    loginByPhone:post('/phoneLogin'),

    //首页
    banner: get('/index/bannerList'),
    activity: get('/index/activityList'),
    recommend: get('/index/recommendList'),
    newMv: post('/index/mvNew'),
    mvTop: post('/index/mvTop'),
  
    //全部歌曲
    musicList: post('/music/list'),
    musicDetail: post('/music/getMusiDetailById'),
    musicMv: post('/music/videosByMusic'),
    musicLrc: post('/music/getSubtitle'),
    musicIsCollect: post('/music/checkCollection'),
    musicCollect: post('/music/collection'),
    musicUnCollect: post('/music/unCollection'),
    musicCondition: get('/music/getConditions'),
  
    //搜索
    searchVideo: post('/searchVideo'),
    searchSinger: post('/searchSinger'),
    //歌手详情
    singerCity: get('/singer/getProvinceCitys'),
    singerList: post('/singer/list'),
    singerDetail: post('/singer/singerDetail'),
    singerImage: post('/singer/singerImages'),
    singerVideo: post('/singer/videoList'),
    //视频相关
    videoCheckCollection: post('/video/checkCollection'),
    videoCollection: post('/video/collection'),
    videoComment: post('/video/comment'),
    videoCommentClick: post('/video/commentClick'),
    videoCommentList: post('/video/commentList'),
    videoDetail: post('/video/getVideoDetailById'),
    videoPlayTimes: post('/video/playTimes'),
    videoShare: post('/video/share'),
    videoUnCollection: post('/video/unCollection'),
    videoClick: post('/video/videoClick'),
    //我的页面
    selfMusicList: post('/self/musicList'),
    selfVideoList: post('/self/videoList'),
    selfInfo: post('/self/singerInfo')
};

const ajax = (pathname, data, headers) => {
    return xhr(...apis[pathname], data, headers)
}

export default ajax;
