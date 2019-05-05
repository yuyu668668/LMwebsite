(function($) { "use strict";
    
    //set your google maps parameters

    $(document).ready(function(){
        // var latitude = -37.817,
        //     longitude = 144.962,
        //     map_zoom = 14;

        // var locations = [
        //     ['<div class="infobox"><span>WE ARE COMPACT<span></div>', latitude, longitude, 2]
        // ];
    
        var map = new BMap.Map("map-canvas");
        // 创建地图实例  
        var point = new BMap.Point(113.464592, 23.173304);
        // 创建点坐标  
        map.centerAndZoom(point, 20);

        var marker = new BMap.Marker(point);        // 创建标注    
        map.addOverlay(marker); 


        var opts = {    
            width : 150,     // 信息窗口宽度    
            height: 80,     // 信息窗口高度    
            title : "广州来米信息科技有限公司"  // 信息窗口标题   
        }    
        var infoWindow = new BMap.InfoWindow("广州市黄埔区科学城观虹路兴普紫园10号F栋603室", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

        map.enableScrollWheelZoom(true);
        
    });

})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





    