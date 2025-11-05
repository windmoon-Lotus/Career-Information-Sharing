seajs.config({
	base: '/assets/wiki/js/', 
	paths:{
		'editor':'/assets/common/js/editor',
	},
    alias: { 
    	'tpl': '/assets/common/js/oye.tpl.js',
    	'jquery':'/assets/common/js/jquery/jquery-1.10.1.min.js',
    	"bootstrap":'/assets/wiki/js/bootstrap.min.js',
    	'layer':'/assets/common/js/layer/layer.js',
    	'swiper':'/assets/common/js/swiper/swiper',
    	'uniform':'/assets/common/js/jquery/jquery.uniform.min.js',
    	'masonry':'/assets/common/js/masonry/masonry.pkgd.min.js',
    	'echarts':'echarts.min.js',
    	'highcharts':'highcharts3.js',
    },
});