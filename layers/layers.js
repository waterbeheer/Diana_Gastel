var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_contracten_1 = new ol.format.GeoJSON();
var features_contracten_1 = format_contracten_1.readFeatures(json_contracten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contracten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contracten_1.addFeatures(features_contracten_1);
var lyr_contracten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contracten_1, 
                style: style_contracten_1,
                popuplayertitle: 'contracten',
                interactive: true,
                title: '<img src="styles/legend/contracten_1.png" /> contracten'
            });
var format_nulopties_2 = new ol.format.GeoJSON();
var features_nulopties_2 = format_nulopties_2.readFeatures(json_nulopties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nulopties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nulopties_2.addFeatures(features_nulopties_2);
var lyr_nulopties_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nulopties_2, 
                style: style_nulopties_2,
                popuplayertitle: 'nul-opties',
                interactive: true,
                title: '<img src="styles/legend/nulopties_2.png" /> nul-opties'
            });
var format_Waterschap_3 = new ol.format.GeoJSON();
var features_Waterschap_3 = format_Waterschap_3.readFeatures(json_Waterschap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterschap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterschap_3.addFeatures(features_Waterschap_3);
var lyr_Waterschap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterschap_3, 
                style: style_Waterschap_3,
                popuplayertitle: 'Waterschap',
                interactive: true,
                title: '<img src="styles/legend/Waterschap_3.png" /> Waterschap'
            });
var format_SBB_4 = new ol.format.GeoJSON();
var features_SBB_4 = format_SBB_4.readFeatures(json_SBB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBB_4.addFeatures(features_SBB_4);
var lyr_SBB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBB_4, 
                style: style_SBB_4,
                popuplayertitle: 'SBB',
                interactive: true,
                title: '<img src="styles/legend/SBB_4.png" /> SBB'
            });
var format_GemeenteCranendonck_5 = new ol.format.GeoJSON();
var features_GemeenteCranendonck_5 = format_GemeenteCranendonck_5.readFeatures(json_GemeenteCranendonck_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GemeenteCranendonck_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GemeenteCranendonck_5.addFeatures(features_GemeenteCranendonck_5);
var lyr_GemeenteCranendonck_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GemeenteCranendonck_5, 
                style: style_GemeenteCranendonck_5,
                popuplayertitle: 'Gemeente Cranendonck',
                interactive: true,
                title: '<img src="styles/legend/GemeenteCranendonck_5.png" /> Gemeente Cranendonck'
            });
var format_KadastraleGrens_6 = new ol.format.GeoJSON();
var features_KadastraleGrens_6 = format_KadastraleGrens_6.readFeatures(json_KadastraleGrens_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastraleGrens_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastraleGrens_6.addFeatures(features_KadastraleGrens_6);
var lyr_KadastraleGrens_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastraleGrens_6, 
                style: style_KadastraleGrens_6,
                popuplayertitle: 'Kadastrale Grens',
                interactive: true,
                title: '<img src="styles/legend/KadastraleGrens_6.png" /> Kadastrale Grens'
            });
var format_Bebouwing_7 = new ol.format.GeoJSON();
var features_Bebouwing_7 = format_Bebouwing_7.readFeatures(json_Bebouwing_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bebouwing_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bebouwing_7.addFeatures(features_Bebouwing_7);
var lyr_Bebouwing_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bebouwing_7, 
                style: style_Bebouwing_7,
                popuplayertitle: 'Bebouwing',
                interactive: true,
                title: '<img src="styles/legend/Bebouwing_7.png" /> Bebouwing'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_contracten_1.setVisible(true);lyr_nulopties_2.setVisible(true);lyr_Waterschap_3.setVisible(true);lyr_SBB_4.setVisible(true);lyr_GemeenteCranendonck_5.setVisible(true);lyr_KadastraleGrens_6.setVisible(true);lyr_Bebouwing_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_contracten_1,lyr_nulopties_2,lyr_Waterschap_3,lyr_SBB_4,lyr_GemeenteCranendonck_5,lyr_KadastraleGrens_6,lyr_Bebouwing_7];
lyr_contracten_1.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_nulopties_2.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_Waterschap_3.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_SBB_4.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_GemeenteCranendonck_5.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastraleGrens_6.set('fieldAliases', {'gml_id': 'gml_id', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'code': 'code', 'waarde': 'waarde', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'typeGrens|TypeGrens|code': 'typeGrens|TypeGrens|code', 'typeGrens|TypeGrens|waarde': 'typeGrens|TypeGrens|waarde', 'perceelRechts|namespace': 'perceelRechts|namespace', 'perceelRechts|lokaalID': 'perceelRechts|lokaalID', 'perceelLinks|namespace': 'perceelLinks|namespace', 'perceelLinks|lokaalID': 'perceelLinks|lokaalID', });
lyr_Bebouwing_7.set('fieldAliases', {'id': 'id', 'objectBegi': 'objectBegi', 'LV-publica': 'LV-publica', 'relatieveH': 'relatieveH', 'inOnderzoe': 'inOnderzoe', 'tijdstipRe': 'tijdstipRe', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'bronhouder': 'bronhouder', 'bgt-status': 'bgt-status', 'plus-statu': 'plus-statu', 'identifi_2': 'identifi_2', 'gml_id': 'gml_id', 'creationDa': 'creationDa', 'LV-publi_1': 'LV-publi_1', 'relatiev_1': 'relatiev_1', 'inOnderz_1': 'inOnderz_1', 'tijdstip_1': 'tijdstip_1', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'plus-sta_1': 'plus-sta_1', 'function': 'function', 'plus-typeG': 'plus-typeG', 'eindRegist': 'eindRegist', 'terminatio': 'terminatio', 'bgt-type': 'bgt-type', 'plus-type': 'plus-type', 'identifi_3': 'identifi_3', 'tekst': 'tekst', 'hoek': 'hoek', 'identifi_4': 'identifi_4', 'identifi_5': 'identifi_5', 'layer': 'layer', 'path': 'path', });
lyr_contracten_1.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_nulopties_2.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_Waterschap_3.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_SBB_4.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_GemeenteCranendonck_5.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastraleGrens_6.set('fieldImages', {'gml_id': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'code': 'TextEdit', 'waarde': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'Range', 'typeGrens|TypeGrens|code': 'Range', 'typeGrens|TypeGrens|waarde': 'TextEdit', 'perceelRechts|namespace': 'TextEdit', 'perceelRechts|lokaalID': 'TextEdit', 'perceelLinks|namespace': 'TextEdit', 'perceelLinks|lokaalID': 'TextEdit', });
lyr_Bebouwing_7.set('fieldImages', {'id': 'TextEdit', 'objectBegi': 'TextEdit', 'LV-publica': 'TextEdit', 'relatieveH': 'TextEdit', 'inOnderzoe': 'TextEdit', 'tijdstipRe': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'bronhouder': 'TextEdit', 'bgt-status': 'TextEdit', 'plus-statu': 'TextEdit', 'identifi_2': 'TextEdit', 'gml_id': 'TextEdit', 'creationDa': 'TextEdit', 'LV-publi_1': 'TextEdit', 'relatiev_1': 'TextEdit', 'inOnderz_1': 'Range', 'tijdstip_1': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'plus-sta_1': 'TextEdit', 'function': 'TextEdit', 'plus-typeG': 'TextEdit', 'eindRegist': 'TextEdit', 'terminatio': 'TextEdit', 'bgt-type': 'TextEdit', 'plus-type': 'TextEdit', 'identifi_3': 'TextEdit', 'tekst': 'TextEdit', 'hoek': 'TextEdit', 'identifi_4': 'TextEdit', 'identifi_5': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_contracten_1.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_nulopties_2.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_Waterschap_3.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_SBB_4.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_GemeenteCranendonck_5.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastraleGrens_6.set('fieldLabels', {'gml_id': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'code': 'no label', 'waarde': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'typeGrens|TypeGrens|code': 'no label', 'typeGrens|TypeGrens|waarde': 'no label', 'perceelRechts|namespace': 'no label', 'perceelRechts|lokaalID': 'no label', 'perceelLinks|namespace': 'no label', 'perceelLinks|lokaalID': 'no label', });
lyr_Bebouwing_7.set('fieldLabels', {'id': 'no label', 'objectBegi': 'no label', 'LV-publica': 'no label', 'relatieveH': 'no label', 'inOnderzoe': 'no label', 'tijdstipRe': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'bronhouder': 'no label', 'bgt-status': 'no label', 'plus-statu': 'no label', 'identifi_2': 'no label', 'gml_id': 'no label', 'creationDa': 'no label', 'LV-publi_1': 'no label', 'relatiev_1': 'no label', 'inOnderz_1': 'no label', 'tijdstip_1': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'plus-sta_1': 'no label', 'function': 'no label', 'plus-typeG': 'no label', 'eindRegist': 'no label', 'terminatio': 'no label', 'bgt-type': 'no label', 'plus-type': 'no label', 'identifi_3': 'no label', 'tekst': 'no label', 'hoek': 'no label', 'identifi_4': 'no label', 'identifi_5': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bebouwing_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});