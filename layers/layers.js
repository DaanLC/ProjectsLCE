var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TechnicaldrawingPVWoudbloem_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing PV - Woudbloem",
                            
maxResolution:5.600893230452393,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingPVWoudbloem_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [750469.131369, 7020032.070187, 753304.358335, 7022072.545535]
                            })
                        });
var lyr_TechnicaldrawingcolocatedBESSWoudbloem_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing co-located BESS - Woudbloem",
                            
maxResolution:2.8004466152261966,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingcolocatedBESSWoudbloem_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [751907.932309, 7020721.155735, 752910.843572, 7021447.869891]
                            })
                        });
var format_LandWoudbloem_3 = new ol.format.GeoJSON();
var features_LandWoudbloem_3 = format_LandWoudbloem_3.readFeatures(json_LandWoudbloem_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandWoudbloem_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandWoudbloem_3.addFeatures(features_LandWoudbloem_3);
var lyr_LandWoudbloem_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandWoudbloem_3, 
                style: style_LandWoudbloem_3,
                popuplayertitle: "Land Woudbloem",
                interactive: true,
                title: '<img src="styles/legend/LandWoudbloem_3.png" /> Land Woudbloem'
            });
var format_KadastralepercelenWoudbloem_4 = new ol.format.GeoJSON();
var features_KadastralepercelenWoudbloem_4 = format_KadastralepercelenWoudbloem_4.readFeatures(json_KadastralepercelenWoudbloem_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenWoudbloem_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenWoudbloem_4.addFeatures(features_KadastralepercelenWoudbloem_4);
var lyr_KadastralepercelenWoudbloem_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenWoudbloem_4, 
                style: style_KadastralepercelenWoudbloem_4,
                popuplayertitle: "Kadastrale percelen - Woudbloem",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenWoudbloem_4.png" /> Kadastrale percelen - Woudbloem'
            });
var lyr_TechnicaldrawingMeedenIII_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden III",
                            
maxResolution:3.3605359382714357,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenIII_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [767435.574362, 7007147.951606, 768043.966728, 7007579.600865]
                            })
                        });
var format_LandMeedenIII_6 = new ol.format.GeoJSON();
var features_LandMeedenIII_6 = format_LandMeedenIII_6.readFeatures(json_LandMeedenIII_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIII_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIII_6.addFeatures(features_LandMeedenIII_6);
var lyr_LandMeedenIII_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIII_6,
maxResolution:11.201786460904787,
 
                style: style_LandMeedenIII_6,
                popuplayertitle: "Land Meeden III",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIII_6.png" /> Land Meeden III'
            });
var format_KadastralepercelenMeedenIII_7 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenIII_7 = format_KadastralepercelenMeedenIII_7.readFeatures(json_KadastralepercelenMeedenIII_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenIII_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenIII_7.addFeatures(features_KadastralepercelenMeedenIII_7);
var lyr_KadastralepercelenMeedenIII_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenIII_7, 
                style: style_KadastralepercelenMeedenIII_7,
                popuplayertitle: "Kadastrale percelen - Meeden III",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenIII_7.png" /> Kadastrale percelen - Meeden III'
            });
var lyr_TechnicaldrawingMeedenII_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden II",
                            
maxResolution:5.600893230452393,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenII_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [773354.722970, 7005837.236203, 776369.299172, 7008007.356874]
                            })
                        });
var format_LandMeedenIIBegeman_9 = new ol.format.GeoJSON();
var features_LandMeedenIIBegeman_9 = format_LandMeedenIIBegeman_9.readFeatures(json_LandMeedenIIBegeman_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIIBegeman_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIIBegeman_9.addFeatures(features_LandMeedenIIBegeman_9);
var lyr_LandMeedenIIBegeman_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIIBegeman_9, 
                style: style_LandMeedenIIBegeman_9,
                popuplayertitle: "Land Meeden II - Begeman",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIIBegeman_9.png" /> Land Meeden II - Begeman'
            });
var format_LandMeedenIILubbers_10 = new ol.format.GeoJSON();
var features_LandMeedenIILubbers_10 = format_LandMeedenIILubbers_10.readFeatures(json_LandMeedenIILubbers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIILubbers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIILubbers_10.addFeatures(features_LandMeedenIILubbers_10);
var lyr_LandMeedenIILubbers_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIILubbers_10, 
                style: style_LandMeedenIILubbers_10,
                popuplayertitle: "Land Meeden II - Lubbers",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIILubbers_10.png" /> Land Meeden II - Lubbers'
            });
var format_KadastralepercelenMeedenII_11 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenII_11 = format_KadastralepercelenMeedenII_11.readFeatures(json_KadastralepercelenMeedenII_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenII_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenII_11.addFeatures(features_KadastralepercelenMeedenII_11);
var lyr_KadastralepercelenMeedenII_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenII_11, 
                style: style_KadastralepercelenMeedenII_11,
                popuplayertitle: "Kadastrale percelen - Meeden II",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenII_11.png" /> Kadastrale percelen - Meeden II'
            });
var lyr_TechnicaldrawingMeedenI_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden I",
                            
maxResolution:2.100334961419647,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenI_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [765248.267058, 6997848.428592, 766254.481851, 6998586.024807]
                            })
                        });
var format_LandMeedenI_13 = new ol.format.GeoJSON();
var features_LandMeedenI_13 = format_LandMeedenI_13.readFeatures(json_LandMeedenI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenI_13.addFeatures(features_LandMeedenI_13);
var lyr_LandMeedenI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenI_13,
maxResolution:14.00223307613098,
 
                style: style_LandMeedenI_13,
                popuplayertitle: "Land Meeden I",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenI_13.png" /> Land Meeden I'
            });
var format_KadastralepercelenMeedenI_14 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenI_14 = format_KadastralepercelenMeedenI_14.readFeatures(json_KadastralepercelenMeedenI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenI_14.addFeatures(features_KadastralepercelenMeedenI_14);
var lyr_KadastralepercelenMeedenI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenI_14, 
                style: style_KadastralepercelenMeedenI_14,
                popuplayertitle: "Kadastrale percelen - Meeden I",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenI_14.png" /> Kadastrale percelen - Meeden I'
            });
var lyr_NewTenneTsubstation_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "New TenneT substation",
                            
maxResolution:42.00669922839295,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NewTenneTsubstation_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [783032.501392, 6968891.687104, 784355.109568, 6970118.615049]
                            })
                        });
var lyr_TechnicaldrawingMusselkanaal_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Musselkanaal",
                            
maxResolution:2.240357292180957,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMusselkanaal_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [785562.468230, 6969267.365233, 787062.232449, 6970350.320225]
                            })
                        });
var format_LandMusselkanaal_17 = new ol.format.GeoJSON();
var features_LandMusselkanaal_17 = format_LandMusselkanaal_17.readFeatures(json_LandMusselkanaal_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMusselkanaal_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMusselkanaal_17.addFeatures(features_LandMusselkanaal_17);
var lyr_LandMusselkanaal_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMusselkanaal_17,
maxResolution:2.8004466152261966,
 
                style: style_LandMusselkanaal_17,
                popuplayertitle: "Land Musselkanaal",
                interactive: true,
                title: '<img src="styles/legend/LandMusselkanaal_17.png" /> Land Musselkanaal'
            });
var format_KadastralepercelenMusselkanaal_18 = new ol.format.GeoJSON();
var features_KadastralepercelenMusselkanaal_18 = format_KadastralepercelenMusselkanaal_18.readFeatures(json_KadastralepercelenMusselkanaal_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMusselkanaal_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMusselkanaal_18.addFeatures(features_KadastralepercelenMusselkanaal_18);
var lyr_KadastralepercelenMusselkanaal_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMusselkanaal_18, 
                style: style_KadastralepercelenMusselkanaal_18,
                popuplayertitle: "Kadastrale percelen - Musselkanaal",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMusselkanaal_18.png" /> Kadastrale percelen - Musselkanaal'
            });
var group_BESSMusselkanaal = new ol.layer.Group({
                                layers: [lyr_NewTenneTsubstation_15,lyr_TechnicaldrawingMusselkanaal_16,lyr_LandMusselkanaal_17,lyr_KadastralepercelenMusselkanaal_18,],
                                fold: "open",
                                title: "BESS Musselkanaal"});
var group_BESSMeedenIVeendam = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenI_12,lyr_LandMeedenI_13,lyr_KadastralepercelenMeedenI_14,],
                                fold: "open",
                                title: "BESS Meeden I (Veendam)"});
var group_BESSMeedenIIMeedensubstation = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenII_8,lyr_LandMeedenIIBegeman_9,lyr_LandMeedenIILubbers_10,lyr_KadastralepercelenMeedenII_11,],
                                fold: "open",
                                title: "BESS Meeden II (Meeden sub station)"});
var group_BESSMeedenIIIMuntendam = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenIII_5,lyr_LandMeedenIII_6,lyr_KadastralepercelenMeedenIII_7,],
                                fold: "open",
                                title: "BESS Meeden III (Muntendam)"});
var group_PVWoudbloem = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingPVWoudbloem_1,lyr_TechnicaldrawingcolocatedBESSWoudbloem_2,lyr_LandWoudbloem_3,lyr_KadastralepercelenWoudbloem_4,],
                                fold: "open",
                                title: "PV Woudbloem"});

lyr_GoogleSatellite_0.setVisible(true);lyr_TechnicaldrawingPVWoudbloem_1.setVisible(true);lyr_TechnicaldrawingcolocatedBESSWoudbloem_2.setVisible(true);lyr_LandWoudbloem_3.setVisible(true);lyr_KadastralepercelenWoudbloem_4.setVisible(true);lyr_TechnicaldrawingMeedenIII_5.setVisible(true);lyr_LandMeedenIII_6.setVisible(true);lyr_KadastralepercelenMeedenIII_7.setVisible(true);lyr_TechnicaldrawingMeedenII_8.setVisible(true);lyr_LandMeedenIIBegeman_9.setVisible(true);lyr_LandMeedenIILubbers_10.setVisible(true);lyr_KadastralepercelenMeedenII_11.setVisible(true);lyr_TechnicaldrawingMeedenI_12.setVisible(true);lyr_LandMeedenI_13.setVisible(true);lyr_KadastralepercelenMeedenI_14.setVisible(true);lyr_NewTenneTsubstation_15.setVisible(true);lyr_TechnicaldrawingMusselkanaal_16.setVisible(true);lyr_LandMusselkanaal_17.setVisible(true);lyr_KadastralepercelenMusselkanaal_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_PVWoudbloem,group_BESSMeedenIIIMuntendam,group_BESSMeedenIIMeedensubstation,group_BESSMeedenIVeendam,group_BESSMusselkanaal];
lyr_LandWoudbloem_3.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', 'Landeigena': 'Landeigena', });
lyr_KadastralepercelenWoudbloem_4.set('fieldAliases', {'fuuid': 'fuuid', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_LandMeedenIII_6.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenIII_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMeedenIIBegeman_9.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_LandMeedenIILubbers_10.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenII_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMeedenI_13.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenI_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMusselkanaal_17.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_KadastralepercelenMusselkanaal_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandWoudbloem_3.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', 'Landeigena': 'TextEdit', });
lyr_KadastralepercelenWoudbloem_4.set('fieldImages', {'fuuid': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_LandMeedenIII_6.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenIII_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMeedenIIBegeman_9.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_LandMeedenIILubbers_10.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenII_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMeedenI_13.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenI_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMusselkanaal_17.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_KadastralepercelenMusselkanaal_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandWoudbloem_3.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', 'Landeigena': 'no label', });
lyr_KadastralepercelenWoudbloem_4.set('fieldLabels', {'fuuid': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_LandMeedenIII_6.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenIII_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMeedenIIBegeman_9.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_LandMeedenIILubbers_10.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenII_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMeedenI_13.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenI_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMusselkanaal_17.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_KadastralepercelenMusselkanaal_18.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_KadastralepercelenMusselkanaal_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});