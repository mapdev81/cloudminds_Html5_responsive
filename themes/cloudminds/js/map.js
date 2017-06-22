$(function(){
    var arr=['北京市朝阳区望京SOHO塔三A座23层', ' 四川省成都市高新区益州大道中段1999号银泰城一号楼三层','深圳市南山区海天二路软件产业基地5栋E座903A','4500 Great America Parkway, Suite 230Santa Clara, CA 95054','Cross Office Uchisaiwai-cho #1208, 1-18-6, Nishi-Shimbashi, Minato-kuTokyo 105-0003'];
    function map(map,x,y,location){
        var map = new BMap.Map(map);
        var point = new BMap.Point(x,y);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        var myIcon = new BMap.Icon(window.BASE_URL + "/themes/cloudminds/images/logo_locating(1).svg", new BMap.Size(54,67));
        var marker = new BMap.Marker(point,{icon: myIcon});
        map.addOverlay(marker);
        marker.addEventListener("click", function(){
            var opts = {
                width : 200,     // 信息窗口宽度
                height: 150,     // 信息窗口高度
                title : "达闼科技" // 信息窗口标题
            }
            var infoWindow = new BMap.InfoWindow(location, opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
        },false);
    }
    map("map1",116.4873050000,40.0019020000,arr[0]);
    map("map2",104.067053,30.548139,arr[1]);
    map("map3",113.945286,22.528721,arr[2]);
    map("map4",-121.9784218000,37.3950422000,arr[3]);
    map("map5",139.7527432000, 35.6683030000,arr[4]);
})

