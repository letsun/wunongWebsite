var ip =" https://life.wnw108.com";
var ip1 ="https://manage.wnw108.com"; //线上
//var ip1 ="http://192.168.1.105:8081"; //测试

var api={
    getPrefectureByAreaType : ip +'/business/product/getPrefectureByAreaType?areaType=1',   //获取商品类型   
    getPrefectureProductList : ip +'/business/product/getPrefectureProductList',  //获取商品信息
    live:ip1+ '/w/api/live', //直播详情

    newlist :ip1 + '/w/api/news/list',  //新闻列表
    newlistdetail: ip1+ '/w/api/news/' //新闻详情
}