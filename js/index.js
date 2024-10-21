// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});


// main fade effect
function fadeeffect() {
    $('.main-img').fadeOut(500);
    $('.main-img').fadeIn(500);
}

setInterval(fadeeffect, 1000);


//floating menu
$(function(){
    $('.menu-content li.pc-view a').each(function(index){
		if(index == 0) {
			var src = $(this).find('img').attr('src');
			if(src.indexOf('_on.') == -1) {
				src = src.replace('.', '_on.');
				$(this).find('img').attr('src',src);
			}
		}
        $(this).attr('data-n',index+1);
    })
	$('.menu-content li.m-view a').each(function(index){
		if(index == 0) {
			var src = $(this).find('img').attr('src');
			if(src.indexOf('_on.') == -1) {
				src = src.replace('.', '_on.');
				$(this).find('img').attr('src',src);
			}
		}
        $(this).attr('data-n',index+1);
    })
})

function reset_engine_menu_img() {
	$('.menu-content li.pc-view a').each(function() {
		var n = parseInt($(this).attr('data-n'));
		var src = $(this).find('img').attr('src');
		src = src.replace('_on.', '.');
		$(this).find('img').attr('src',src);
	});	
	$('.menu-content li.m-view a').each(function() {
		var n = parseInt($(this).attr('data-n'));
		var src = $(this).find('img').attr('src');
		src = src.replace('_on.', '.');
		$(this).find('img').attr('src',src);
	});
}

$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	var n = 1;
	$('.wrapper').find('section').each(function(){
		if(scroll + 10 >= parseInt($(this).offset().top)) {
			//console.log('scroll : '+scroll +' /// $(this).offset().top : '+$(this).offset().top);
			n = $(this).data('section_group');
		}
	});
	reset_engine_menu_img();
	$('.menu-content li.pc-view a').each(function() {
		if($(this).attr('data-n') == n) {
			var src = $(this).find('img').attr('src');
			src = src.replace('.', '_on.');
			$(this).find('img').attr('src', src);
		}
	});
	$('.menu-content li.m-view a').each(function() {
		if($(this).attr('data-n') == n) {
			var src = $(this).find('img').attr('src');
			src = src.replace('.', '_on.');
			$(this).find('img').attr('src', src);
		}
	});
});
// $(document).ready(function() {
// 	$('.menu-content li.pc-view a').click(function(){
// 		$('.menu-content li.pc-view a').removeClass('on')
// 		$(this).addClass('on')
// 	})
// })


