	/* myDropdownCheckbox attr init */
	$('.dropdown-checkbox-content ul li:nth-child(1) .layout input').attr({'name':'type','value':'all'});
	$('.dropdown-checkbox-content ul li:nth-child(2) .layout input').attr({'name':'type','value':'opening'});
	$('.dropdown-checkbox-content ul li:nth-child(3) .layout input').attr({'name':'type','value':'event'});
	$('.dropdown-checkbox-content ul li:nth-child(1) .layout').addClass('checkbox-btn');

	/* header -> sub-cart ajax loading effect */
	$('.icon-cart-ajax').hover(
		function() {
			$('#ajax-cart').html('');
			$('#ajax-cart').append('<img class=\"ajax-loading\" src=\".\/img\/ajax-loader.gif\" />');
			setTimeout(function() {
				$('#ajax-cart').html('<a href=\"#\">购物车为空</a>');
			}, 700);
		},
		function() {
			$('#ajax-cart').html('<a href=\"#\">购物车为空</a>');
		}
	);

	/* section-main -> place select init */
	$.fn.selectPlace = function(options) {
		var options = jQuery.extend({
			preLoadSrc: "../img/ajax-loader.gif"
		}, options || {});


		var defaults = {};

		return this.each(function() {

			var options = $.extend(defaults, options);
			var $this = $(this);

			var $boxSearch = $this.find('.boxSearch');
			var $lineSearchbg = $this.nextAll().find('.lineSearchbg');

			//city select
			$boxSearch.click(function() {
				var _this = $(this);
				//点击本身显示隐藏
				if (_this.hasClass('boxSearchHover')) {
					_this.removeClass('boxSearchHover');
					_this.children('.btn_search').removeClass('btn_search_current');
					_this.parent().find('.search_form_suggest').hide();

				} else {
					_this.addClass('boxSearchHover');
					_this.children('.btn_search').addClass('btn_search_current');
					_this.parent().find('.search_form_suggest').show();
				}

				_this.next().find('.clr_after a').click(function() {

					_this.find('span.key_word b').text($(this).text());

				});


				_this.next().find('.search_city_result a').click(function() {

					_this.find('span.key_word b').text($(this).text());

				});

				//bind
				$(document).bind('click', function(event) {
					if (!$(event.target).parent().hasClass('boxSearch') && !$(event.target).hasClass('boxSearch') && !$(event.target).parent().parent().hasClass('boxSearch') && !$(event.target).hasClass('input_city')) {
						_this.children('.btn_search').removeClass('btn_search_current');
						_this.removeClass('boxSearchHover');
						_this.parent().find('.search_form_suggest').hide();
					}
				});

			});
		});
	}

	$('.main-menu-other, .main-menu-sort').click(function() {
		if($(this).hasClass('main-menu-other-hover')) {
			$(this).removeClass('main-menu-other-hover');
		} else {
			$(this).addClass('main-menu-other-hover');
		}
	});
	$(document).click(function(){
		$('.main-menu-other, .main-menu-sort').removeClass('main-menu-other-hover');
	});

	var countHeight = null;
	var n = null;
	var lastScrollTop = 0;
	/* .search-box scroll down/up effect */
	$(window).scroll(function(event){
	    var st = $(this).scrollTop();
	    if (st > lastScrollTop){
	    	// downscroll code
	    	if(document.body.clientWidth>768) {
		        $('.search-box').css('display','block');
		        $('.search-box').css('z-index','999');
		        $('.search-box').animate({top:40},300);
		    }
	   	} else {
	    	// upscroll code
	    	$('.search-box').css('z-index','0');
	      	$('.search-box').animate({top:0},10);
	    }
	   lastScrollTop = st;
	});
	$(window).resize(function() {
		if(document.body.clientWidth<768) {
			$('#footer').hide();
			$('.search-box').hide();
		} else {
			$('#footer').show();
		}
		changeHeight();
	});

	function changeHeight() {
		/* tooltip & popover effect */
		$('.services-icon.fapiao').tooltip();
        $("[data-toggle=popover]").popover();

		/* Restaurant hover effect */
		$('.restaurant-block,.tuan-block').css({'background':'#fff'});
		$('.restaurant-block,.tuan-block').hover(function() {
			$(this).css('background', '#f4f4f4');
		},
		function() {
			$(this).css('background', '#fff');
		});

		/* section-main & section-tuangou -> favor hover effect */
	    $('.restaurant .restaurant-block,.tuan-restaurant .tuan-block').hover(function () {
	        $('.main-content-favor, .tuan-content-favor').hide();
	        $(this).find('.main-content-favor, .tuan-content-favor').first().show();
	    }, function(){
	        $('.main-content-favor, .tuan-content-favor').hide();
	        $(this).find('.main-content-favor, .tuan-content-favor').first().hide();
	    });

		/* reset the height of main-content */	
		if($('.restaurant-block').width() == '195') {
			n = 6; 
			countHeight = $('.main-content ul').children().length;
		}
		else if($('.restaurant-block').width() == '190') {
			n = 5; 
			countHeight = $('.main-content ul').children().length;
		}
		else if($('.restaurant-block').width() == '186') {
			n = 4; 
			countHeight = $('.main-content ul').children().length;
		}
		else if($('.restaurant-block').width() <= '240') {
			n = 3; 
			countHeight = $('.main-content ul').children().length;
		}
		$('.main-content.filter-content').css('height',(Math.ceil(countHeight/n)*86));
	}
	changeHeight();

	/* Filter & Sort function */
	/*$("#main-menu-sort-1").change(function(){
  		if($('#main-menu-sort-1 :selected').text()=="从高到低") {
  			$('#main-menu-sort-1 input[name="sort"]').attr('checked', true);
  			console.log("input[name=sort] has selected");
  		}
	});*/

	$('.filter-check').on('change', function() {
    	$('.filter-check').not(this).prop('checked', false);  
	});
	$('.filter-check-two').on('change', function() {
    	$('.filter-check-two').not(this).prop('checked', false);  
	});

	/* section-main -> filter init - Quicksand.js*/
	(function($) {
    $.fn.sorted = function(customOptions) {
      var options = {
        reversed: false,
        by: function(a) { return a.text(); }
      };
      $.extend(options, customOptions);
      $data = $(this);
      arr = $data.get();
      arr.sort(function(a, b) {
          var valA = options.by($(a));
          var valB = options.by($(b));
        if (options.reversed||customOptions) {
          return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
        } else {
          return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
        }
      });
      return $(arr);
    };
  })(jQuery);

	$(function() {
		var $filterType = $('.checkbox-btn input[name="type"]');
		//console.log($filterType);
		var $filterSort = $('.sort_sales_price input[name="sort"]');

		var $restaurant = $('.restaurant');

		var $data = $restaurant.clone();

		$filterType.add($filterSort).change(function(e){
			if($('.checkbox-btn input[name="type"]:checked').val() == 'all') {
				console.log($($filterType).val());	//all	
				var $filteredData = $data.find('li');
				changeHeight();
			} else {
				console.log($($filterType).val());
				var $filteredData = $data.find('li[data-type=' + $('.checkbox-btn input[name="type"]:checked').val() + ']');
				changeHeight();
			}

			if($('.sort_sales_price input[name="sort"]:checked').val() == "sales") {
				var $sortedData = $filteredData.sorted({
					by:function(v) {
						return parseFloat($(v).find('.main-content-line .info .rating span[data-type=sales]').text());
					}
				});
			} else {
				var $sortedData = $filteredData.sorted({
					by: function(v) {
						return parseFloat($(v).find('.main-content-line .info .rating span[data-type=price]').text());
						//return $(v).find('strong').text().toLowerCase();
					}
				});
			}

			$restaurant.quicksand($sortedData, {
				duration: 700,
				easing: 'easeInOutQuad'
			}, function(){
				changeHeight();
			});
		});
	});
	console.log("enjoy~");
