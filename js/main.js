$(function () {
	 $('body').delegate('.selectOption .selected','click' , function(){
      $(this).closest('.selectOption').toggleClass('open')
    })

$(document).click(function(event) {
  var $target = $(event.target);
  if(!$target.closest('.selectOption').length ) {
    $('.selectOption.open').removeClass('open');
  } 
   if(!$target.closest('.items .item .edit  ').length) {
  	$('.items .item .edit .edit-menu ul').hide()
  	$('.items .item .edit .edit-menu ul li .confirm').hide()
  }

});
$('.items .item .edit .edit-button').on('click' , function(){
	$(this).closest('.edit').find('.edit-menu ul').show()
})
$('.items .item .edit .edit-menu ul li').on('click' , function(){
	$(this).closest('ul').find('.confirm').hide()
	$(this).find('.confirm').show()
})

$('.items .item .edit .edit-menu ul li .confirm .yes-no button').on('click' , function(){
	$(this).closest('ul').find('.confirm').hide()
	$(this).find('.confirm').show()
})



	 
})
