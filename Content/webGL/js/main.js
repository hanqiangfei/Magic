// main.js
var js = request("js");
if (js == null)
    alert("js parameter is null!");

require.config({
    baseUrl: "../Scripts/webGL/",
    paths: {
//        "jquery": "../jQuery/jquery-1.8.0",
//        "optimer_bold": "fonts/optimer_bold.typeface",
//        "helvetiker_bold": "fonts/helvetiker_bold.typeface", 
//        "webGL":"../js/WebGL",
        "js": "js/"+js
    },
    shim: {
        'Controls': ['three', 'Stats', 'Sparks', 'Tween', 'Detector', 'Controls']
        //        'GridControl': {
        //            deps: ['jquery',  'RowExpander', 'TabCloseMenu', 'TreeGridSorter',
        //                'TreeGridColumnResizer', 'TreeGridNodeUI', 'TreeGridLoader', 'TreeGridColumns', 'TreeGrid', 'extGrid2'
        //            ],
        //            exports: 'GridControl'
        //        }
    }
});

require(['js'], function () {

});

//alert("加载成功！");