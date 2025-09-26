var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_District_Boundary_2 = new ol.format.GeoJSON();
var features_District_Boundary_2 = format_District_Boundary_2.readFeatures(json_District_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundary_2.addFeatures(features_District_Boundary_2);
var lyr_District_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundary_2, 
                style: style_District_Boundary_2,
                popuplayertitle: 'District_Boundary',
                interactive: false,
                title: '<img src="styles/legend/District_Boundary_2.png" /> District_Boundary'
            });
var format_Wetlands_of_Bihar_3 = new ol.format.GeoJSON();
var features_Wetlands_of_Bihar_3 = format_Wetlands_of_Bihar_3.readFeatures(json_Wetlands_of_Bihar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetlands_of_Bihar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetlands_of_Bihar_3.addFeatures(features_Wetlands_of_Bihar_3);
var lyr_Wetlands_of_Bihar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetlands_of_Bihar_3, 
                style: style_Wetlands_of_Bihar_3,
                popuplayertitle: 'Wetlands_of_Bihar',
                interactive: true,
                title: '<img src="styles/legend/Wetlands_of_Bihar_3.png" /> Wetlands_of_Bihar'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_District_Boundary_2.setVisible(true);lyr_Wetlands_of_Bihar_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_District_Boundary_2,lyr_Wetlands_of_Bihar_3];
lyr_District_Boundary_2.set('fieldAliases', {'distrctnam': 'distrctnam', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'shape_STAr': 'shape_STAr', 'shape_STLe': 'shape_STLe', });
lyr_Wetlands_of_Bihar_3.set('fieldAliases', {'FID_1': 'FID_1', 'XCoord': 'XCoord', 'YCoord': 'YCoord', 'Area_in_Ha': 'Area_in_Ha', 'Dist_Nam': 'Dist_Nam', 'ORIG_FID': 'ORIG_FID', 'Panchayat': 'Panchayat', 'Block': 'Block', 'Village': 'Village', 'Wetland_Id': 'Wetland_Id', 'Wetland_Na': 'Wetland_Na', });
lyr_District_Boundary_2.set('fieldImages', {'distrctnam': 'TextEdit', 'globalid': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'shape_STAr': 'TextEdit', 'shape_STLe': 'TextEdit', });
lyr_Wetlands_of_Bihar_3.set('fieldImages', {'FID_1': 'Range', 'XCoord': 'TextEdit', 'YCoord': 'TextEdit', 'Area_in_Ha': 'TextEdit', 'Dist_Nam': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Panchayat': 'TextEdit', 'Block': 'TextEdit', 'Village': 'TextEdit', 'Wetland_Id': 'TextEdit', 'Wetland_Na': 'TextEdit', });
lyr_District_Boundary_2.set('fieldLabels', {'distrctnam': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'shape_STAr': 'no label', 'shape_STLe': 'no label', });
lyr_Wetlands_of_Bihar_3.set('fieldLabels', {'FID_1': 'hidden field', 'XCoord': 'no label', 'YCoord': 'no label', 'Area_in_Ha': 'no label', 'Dist_Nam': 'no label', 'ORIG_FID': 'hidden field', 'Panchayat': 'no label', 'Block': 'no label', 'Village': 'no label', 'Wetland_Id': 'no label', 'Wetland_Na': 'no label', });
lyr_Wetlands_of_Bihar_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});