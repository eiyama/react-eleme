

/*
 ?latitude=22.54286&
 longitude=114.059563&
 offset=0&limit=8&
 extras[]=activities&
 extras[]=tags&
 extra_filters=home&rank_id=
 terminal=h5
*/
 const GETSHOPLIST_API='/restapi/shopping/v3/restaurants'

//nav轮播图数据  和 优惠数据
/*
latitude=31.230378
longitude=121.473658
templates[]=main_template
templates[]=favourable_template
templates[]=svip_template
terminal=h5
*/
const NAV_API = '/restapi/shopping/v2/entries'

/*
请求banner轮播图数据

consumer=1
type=1
latitude=31.230378&
longitude=121.473658
*/
const BANNER_API = '/restapi/shopping/v2/banners'


/*
商家推荐的筛选
     latitude=22.541847
     longitude=114.071311
     terminal=h5
   
*/
const FILTER_API = '/pizza/shopping/restaurants/batch_filter'




export default{
  NAV_API,
  BANNER_API,
  GETSHOPLIST_API,
  FILTER_API
}