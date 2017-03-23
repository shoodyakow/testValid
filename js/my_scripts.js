
/* Изначально форма не заполнена и по этому считаем что все возможные ошибки есть  */
var errorNull = true;
var errorMail = true;

/* Проверка поля на null  */
var checkNull = function(){
  $(this).val($(this).val().trim());
  if ($(this).val() =="") {
    /* Выводим сообщение об ошибке под элементом */
    $(this).notify("Поле нужно заполнить", "error"); 
    $(this).addClass("errtextbox");
    errorNull = true;
  } else {
    errorNull = false;
    $(this).removeClass("errtextbox");
  }
};

/* Проверяем значения поля при потере фокуса */
$("#name").focusout(checkNull);

/* Проверка поля */
$("#name").keyup(function(){
  var value = $(this).val().trim();
/* Для этого используем регулярное выражение  */
  if (value.search(/^[а-яё\s]+$/i) != 0) {
    $(this).notify("Не правильный формат ввода", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
});
    $(function (){
        var Value = $('#name').val();
        $('.button').click(function (){
            $('.block').empty().html(con);
        });
    });


/* В результате клика по кнопке отправить если ошибок заполнения нет то форма отправляется иначе получаем сообщение об ошибке */
$("#send").click(function(){
	var Value = $('#name').val();
	$('.result_fio').empty().html(Value);
  if (!(errorNull) && !(errorMail)) {
    $("#reg_form").submit();
    $('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
  } else {
    $('#name').notify("Заполните поле корректно", "error");
  }

});

$('#name').keyup(function(){
    var Value = $('#name').val();
    $('#result').text(Value);
});


 
