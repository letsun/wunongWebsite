var ip =" https://life.wnw108.com";
var ip1 ="https://manage.wnw108.com"

var api={
    getPrefectureByAreaType : ip +'/business/product/getPrefectureByAreaType?areaType=1',   //获取商品类型   
    getPrefectureProductList : ip +'/business/product/getPrefectureProductList',  //获取商品信息

    newlist :ip1 + '/w/api/news/list',  //新闻列表

    newlistdetail: ip1+ '/w/api/news/' //新闻详情
}