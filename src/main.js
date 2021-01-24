var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
            url:"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", //ベースマップ
        }),
        visible:true,
      }),
      new ol.layer.Tile({
        source: new ol.source.XYZ({
            url:"https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",    //単色地図
        }),
        visible:false,
      }),
      /*
      new ol.layer.Tile({
        source: new ol.source.XYZ({
            url:"https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png",    //洪水浸水想定区域

        }),
      }),
      new ol.layer.Tile({
        source: new ol.source.XYZ({
            url:"https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png",    //土砂災害警戒区域

        }),
        visible:false,
      }),
      */
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([135.52, 34.655]),
      zoom: 8
    })
  });

  $(function(){
      $("#menu").change(function(){
          if(map.getLayers().array_[1].values_.visible == false){
            map.getLayers().array_[1].setVisible(true)
          }else{
            map.getLayers().array_[1].setVisible(false)
          }
      });
  });

 /*
  $(function(){
    $("#menu").change(function(){
        if(map.getLayers().array_[3].values_.visible == false){
          map.getLayers().array_[3].setVisible(true)
        }else{
          map.getLayers().array_[3].setVisible(false)
        }
    });
});
*/
